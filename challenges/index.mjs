import fetch from 'node-fetch';
import fs from 'fs';

// import cached from './question-tree.json' assert { type: 'json'}

const GITHUB_API_PATH = 'https://api.github.com/repos/contents';
const GITHUB_PATH = 'https://api.github.com/repos/type-challenges/type-challenges/git/trees/main';
const GITHUB_RAW_PATH = 'https://raw.githubusercontent.com/type-challenges/type-challenges/main';

export const encodeContent = content => {
	return Buffer.from(content ?? '', 'base64').toString();
};

export const write = async ({ name, path, content }) => {
	let difficulty = '';

	const subPath = (path.split('/')[1] || '')
		.split('-')
		.map((v, i) => {
			if (i === 1) {
				difficulty = v;

				return '';
			}

			return i === 0 ? +v : v;
		})
		.filter(Boolean)
		.join('-');

	const folderPath = `./${difficulty}/${subPath}`;

	if (!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath, {
			recursive: true,
		});
	}

	await fs.writeFile(
		`${folderPath}/${name}`,
		content,
		{
			encoding: 'utf-8',
		},
		() => {
			console.log(`${path} has been write successfully\n\n`);
		}
	);
};

const newCachePath = './new.json';
const oldCachePath = './old.json';

const diffTree = async newTree => {
	const diff = [];

	const { default: old } = await import(oldCachePath, {
		assert: {
			type: 'json',
		},
	});

	newTree.forEach(n => {
		if (old.every(o => o.sha !== n.sha)) {
			diff.push(n);
		}
	});

	return diff;
};

const fetchQuestionList = async () => {
	let tree = [];

	const res = await fetch(`${GITHUB_PATH}?recursive=1`);

	const {tree: data} = await res.json();

	if (res.status === 200) {
	    tree = data;

	    fs.writeFileSync(
	        newCachePath,
	        JSON.stringify(tree, null, 2),
	        {
	            encoding: 'utf8',
	        },
	        () => {
	            console.log(`Cached into ${newCachePath}\n`);
	        }
	    );
	} else {
	    const {default: cached} = await import(newCachePath, {
	        assert: {
	            type: 'json',
	        },
	    });

	    tree = cached;
	}

	const processTree = await diffTree(tree);

	const questions = (processTree || []).filter(
		item =>
			item.path.startsWith('questions/') &&
			['README.zh-CN.md', 'README.md', 'template.ts', 'test-cases.ts'].some(p =>
				item.path.endsWith(p)
			)
	);

	return questions;
};

const fetchContent = async ({ path, name, processContent = v => v }) => {
	if (!path.endsWith(name)) {
		return;
	}

	const res = await fetchFileContent(path);

	if (res.status !== 200) {
		return;
	}

	const content = await res.text();

	await write({
		content: await processContent(content),
		path,
		name,
	});
};

const fetchFileContent = async path => {
	return await fetch(`${GITHUB_RAW_PATH}/${path}`);
};

const fetchQuestion = async ({ path }) => {
	[
		{
			name: 'template.ts',
			processContent: content => content.replaceAll(/type(\s)/gi, 'export type '),
		},
		{
			name: 'test-cases.ts',
			processContent: async content => {
				const res = await fetchFileContent(path.replaceAll(/test\-cases/gi, 'template'));
				const s = await res.text();

				const type = [...s.matchAll(/type(\s)\w+/gi)]
					?.reverse()
					?.shift()
					?.join('')
					?.trim()
					?.split(' ')
					?.pop();
				const importContent = type ? `import { ${type} } from './template';` : '';

				return `${importContent}\n${content.replaceAll(
					/\@type\-challenges\/utils[\']/gi,
					`../../../utils\';`
				)}`;
			},
		},
	].forEach(async current => {
		await fetchContent({
			path,
			...current,
		});
	});

	if (['README.zh-CN.md', 'README.md'].every(p => !path.endsWith(p))) {
		return;
	}

	let res = await fetchFileContent(path);

	if (res.status === 400) {
		res = await fetchFileContent(path);
	}

	const content = await res.text();

	await write({
		content,
		path,
		name: 'question.md',
	});
};

const run = async () => {
	const questions = await fetchQuestionList();

	questions.map(fetchQuestion);
};

run();
