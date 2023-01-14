type UtilRecord<K extends keyof any, T> = {
	[P in K]: T;
}

interface Page {
	title?: string | undefined;
	content?: string | undefined;
}

type PageType = 'home' | 'about' | 'contact';

type record1 = Record<PageType, Page>;
type record2 = UtilRecord<PageType, Page>;
