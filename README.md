# ts-playground

## 目的

- 学习TS
- 刷题

> 基础知识学习可转至[typescript-guide](https://rain120.github.io/typescript-guide/)

## Challenges

本质是[GitHub](https://github.com/type-challenges/type-challenges)上的题目，但是题目都混在一起，不太适合刷。我通过脚本的方式来区分题目难度，让你可以按难度去实操。

### 怎么刷题?

推荐，VS Code分屏操作，快如闪电❤️❤️❤️

#### 原始题目

![image](https://user-images.githubusercontent.com/20939839/212466458-425ee8aa-f116-4203-b4b1-825124f42962.png)

#### 解决之后

![image](https://user-images.githubusercontent.com/20939839/212466638-bfb7b5f8-5d51-4d07-9af6-bec09ad62e63.png)

README.md
> 题目描述

template.ts
> 实现
> PS: 原文没有export

test-cases.ts
> 测试用例
> PS: 已将 `template.ts` 的类型导出，正常打开 `test-cases.ts` 是会报错的，当你的 `template.ts` 实现正确的时候，报错会消失，(不一定完全正确哈，只能说大致是对的，)

### 我不会怎么办？

> `test-cases.ts`的错误消失 or [issues](https://github.com/type-challenges/type-challenges/issues) 搜索题号，学习别人如何实现

### Github上的题目更新了怎么办？

> 会通过定时任务，每周日的0点会去拉取更新的题目
> PS: 如果，只是更新的某题的内容，是无法获得最新的内容，需要自行更新

### 完成状态

#### Warm

- [x] [13-hello-world](./challenges/warm/13-hello-world/question.md)

#### Easy

- [x] [4-pick](./challenges/easy/4-pick/question.md)
- [x] [7-readonly](./challenges/easy/7-readonly/question.md)
- [x] [11-tuple-to-object](./challenges/easy/question.md/11-tuple-to-object)
- [x] [14-first](./challenges/easy/14-first/question.md)
- [x] [18-tuple-length](./challenges/easy/18-tuple-length/question.md)
- [x] [43-exclude](./challenges/easy/43-exclude/question.md)
- [x] [189-awaited](./challenges/easy/189-awaited/question.md)
- [x] [268-if](./challenges/easy/268-if/question.md)
- [x] [533-concat](./challenges/easy/533-concat/question.md)
- [x] [898-includes](./challenges/easy/898-includes/question.md)
- [x] [3057-push](./challenges/easy/3057-push/question.md)
- [x] [3060-unshift](./challenges/easy/3060-unshift/question.md)
- [x] [3312-parameters](./challenges/easy/3312-parameters/question.md)

#### Medium

- [ ] [2-return-type](./challenges/medium/2-return-type/question.md)
- [ ] [3-omit](./challenges/medium/3-omit/question.md)
- [ ] [8-readonly-2](./challenges/medium/8-readonly-2/question.md)
- [ ] [9-deep-readonly](./challenges/medium/9-deep-readonly/question.md)
- [ ] [10-tuple-to-union](./challenges/medium/10-tuple-to-union/question.md)
- [ ] [12-chainable-options](./challenges/medium/12-chainable-options/question.md)
- [ ] [15-last](./challenges/medium/15-last/question.md)
- [ ] [16-pop](./challenges/medium/16-pop/question.md)
- [ ] [20-promise-all](./challenges/medium/20-promise-all/question.md)
- [ ] [62-type-lookup](./challenges/medium/62-type-lookup/question.md)
- [ ] [106-trimleft](./challenges/medium/106-trimleft/question.md)
- [ ] [108-trim](./challenges/medium/108-trim/question.md)
- [ ] [110-capitalize](./challenges/medium/110-capitalize/question.md)
- [ ] [116-replace](./challenges/medium/116-replace/question.md)
- [ ] [119-replaceall](./challenges/medium/119-replaceall/question.md)
- [ ] [191-append-argument](./challenges/medium/191-append-argument/question.md)
- [ ] [296-permutation](./challenges/medium/296-permutation/question.md)
- [ ] [298-length-of-string](./challenges/medium/298-length-of-string/question.md)
- [ ] [459-flatten](./challenges/medium/459-flatten/question.md)
- [ ] [527-append-to-object](./challenges/medium/527-append-to-object/question.md)
- [ ] [529-absolute](./challenges/medium/529-absolute/question.md)
- [ ] [531-string-to-union](./challenges/medium/531-string-to-union/question.md)
- [ ] [599-merge](./challenges/medium/599-merge/question.md)
- [ ] [612-kebabcase](./challenges/medium/612-kebabcase/question.md)
- [ ] [645-diff](./challenges/medium/645-diff/question.md)
- [ ] [949-anyof](./challenges/medium/949-anyof/question.md)
- [ ] [1042-isnever](./challenges/medium/1042-isnever/question.md)
- [ ] [1097-isunion](./challenges/medium/1097-isunion/question.md)
- [ ] [1130-replacekeys](./challenges/medium/1130-replacekeys/question.md)
- [ ] [1367-remove-index-signature](./challenges/medium/1367-remove-index-signature/question.md)
- [ ] [1978-percentage-parser](./challenges/medium/1978-percentage-parser/question.md)
- [ ] [2070-drop-char](./challenges/medium/2070-drop-char/question.md)
- [ ] [2257-minusone](./challenges/medium/2257-minusone/question.md)
- [ ] [2595-pickbytype](./challenges/medium/2595-pickbytype/question.md)
- [ ] [2688-startswith](./challenges/medium/2688-startswith/question.md)
- [ ] [2693-endswith](./challenges/medium/2693-endswith/question.md)
- [ ] [2757-partialbykeys](./challenges/medium/2757-partialbykeys/question.md)
- [ ] [2759-requiredbykeys](./challenges/medium/2759-requiredbykeys/question.md)
- [ ] [2793-mutable](./challenges/medium/2793-mutable/question.md)
- [ ] [2852-omitbytype](./challenges/medium/2852-omitbytype/question.md)
- [ ] [2946-objectentries](./challenges/medium/2946-objectentries/question.md)
- [ ] [3062-shift](./challenges/medium/3062-shift/question.md)
- [ ] [3188-tuple-to-nested-object](./challenges/medium/3188-tuple-to-nested-object/question.md)
- [ ] [3192-reverse](./challenges/medium/3192-reverse/question.md)
- [ ] [3196-flip-arguments](./challenges/medium/3196-flip-arguments/question.md)
- [ ] [3243-flattendepth](./challenges/medium/3243-flattendepth/question.md)
- [ ] [3326-bem-style-string](./challenges/medium/3326-bem-style-string/question.md)
- [ ] [3376-inordertraversal](./challenges/medium/3376-inordertraversal/question.md)
- [ ] [4179-flip](./challenges/medium/4179-flip/question.md)
- [ ] [4182-fibonacci-sequence](./challenges/medium/4182-fibonacci-sequence/question.md)
- [ ] [4260-nomiwase](./challenges/medium/4260-nomiwase/question.md)
- [ ] [4425-greater-than](./challenges/medium/4425-greater-than/question.md)
- [ ] [4471-zip](./challenges/medium/4471-zip/question.md)
- [ ] [4484-istuple](./challenges/medium/4484-istuple/question.md)
- [ ] [4499-chunk](./challenges/medium/4499-chunk/question.md)
- [ ] [4518-fill](./challenges/medium/4518-fill/question.md)
- [ ] [4803-trim-right](./challenges/medium/4803-trim-right/question.md)
- [ ] [5117-without](./challenges/medium/5117-without/question.md)
- [ ] [5140-trunc](./challenges/medium/5140-trunc/question.md)
- [ ] [5153-indexof](./challenges/medium/5153-indexof/question.md)
- [ ] [5310-join](./challenges/medium/5310-join/question.md)
- [ ] [5317-lastindexof](./challenges/medium/5317-lastindexof/question.md)
- [ ] [5360-unique](./challenges/medium/5360-unique/question.md)
- [ ] [5821-maptypes](./challenges/medium/5821-maptypes/question.md)
- [ ] [7544-construct-tuple](./challenges/medium/7544-construct-tuple/question.md)
- [ ] [8640-number-range](./challenges/medium/8640-number-range/question.md)
- [ ] [8767-combination](./challenges/medium/8767-combination/question.md)
- [ ] [8987-subsequence](./challenges/medium/8987-subsequence/question.md)
- [ ] [9286-firstuniquecharindex](./challenges/medium/9286-firstuniquecharindex/question.md)
- [ ] [9896-get-middle-element](./challenges/medium/9896-get-middle-element/question.md)
- [ ] [10969-integer](./challenges/medium/10969-integer/question.md)
- [ ] [16259-to-primitive](./challenges/medium/16259-to-primitive/question.md)
- [ ] [17973-deepmutable](./challenges/medium/17973-deepmutable/question.md)
- [ ] [18142-all](./challenges/medium/18142-all/question.md)
- [ ] [18220-filter](./challenges/medium/18220-filter/question.md)

#### Hard

- [ ] [6-simple-vue](./challenges/hard/6-simple-vue/question.md)
- [ ] [17-currying-1](./challenges/hard/17-currying-1/question.md)
- [ ] [55-union-to-intersection](./challenges/hard/55-union-to-intersection/question.md)
- [ ] [57-get-required](./challenges/hard/57-get-required/question.md)
- [ ] [59-get-optional](./challenges/hard/59-get-optional/question.md)
- [ ] [89-required-keys](./challenges/hard/89-required-keys/question.md)
- [ ] [90-optional-keys](./challenges/hard/90-optional-keys/question.md)
- [ ] [112-capitalizewords](./challenges/hard/112-capitalizewords/question.md)
- [ ] [114-camelcase](./challenges/hard/114-camelcase/question.md)
- [ ] [147-c-printf-parser](./challenges/hard/147-c-printf-parser/question.md)
- [ ] [213-vue-basic-props](./challenges/hard/213-vue-basic-props/question.md)
- [ ] [223-isany](./challenges/hard/223-isany/question.md)
- [ ] [270-typed-get](./challenges/hard/270-typed-get/question.md)
- [ ] [300-string-to-number](./challenges/hard/300-string-to-number/question.md)
- [ ] [399-tuple-filter](./challenges/hard/399-tuple-filter/question.md)
- [ ] [472-tuple-to-enum-object](./challenges/hard/472-tuple-to-enum-object/question.md)
- [ ] [545-printf](./challenges/hard/545-printf/question.md)
- [ ] [553-deep-object-to-unique](./challenges/hard/553-deep-object-to-unique/question.md)
- [ ] [651-length-of-string-2](./challenges/hard/651-length-of-string-2/question.md)
- [ ] [730-union-to-tuple](./challenges/hard/730-union-to-tuple/question.md)
- [ ] [847-string-join](./challenges/hard/847-string-join/question.md)
- [ ] [956-deeppick](./challenges/hard/956-deeppick/question.md)
- [ ] [1290-pinia](./challenges/hard/1290-pinia/question.md)
- [ ] [1383-camelize](./challenges/hard/1383-camelize/question.md)
- [ ] [2059-drop-string](./challenges/hard/2059-drop-string/question.md)
- [ ] [2822-split](./challenges/hard/2822-split/question.md)
- [ ] [2828-classpublickeys](./challenges/hard/2828-classpublickeys/question.md)
- [ ] [2857-isrequiredkey](./challenges/hard/2857-isrequiredkey/question.md)
- [ ] [2949-objectfromentries](./challenges/hard/2949-objectfromentries/question.md)
- [ ] [4037-ispalindrome](./challenges/hard/4037-ispalindrome/question.md)
- [ ] [5181-mutable-keys](./challenges/hard/5181-mutable-keys/question.md)
- [ ] [5423-intersection](./challenges/hard/5423-intersection/question.md)
- [ ] [6141-binary-to-decimal](./challenges/hard/6141-binary-to-decimal/question.md)
- [ ] [7258-object-key-paths](./challenges/hard/7258-object-key-paths/question.md)
- [ ] [8804-two-sum](./challenges/hard/8804-two-sum/question.md)
- [ ] [9155-validdate](./challenges/hard/9155-validdate/question.md)
- [ ] [9160-assign](./challenges/hard/9160-assign/question.md)
- [ ] [9384-maximum](./challenges/hard/9384-maximum/question.md)
- [ ] [9775-capitalize-nest-object-keys](./challenges/hard/9775-capitalize-nest-object-keys/question.md)
- [ ] [13580-replace-union](./challenges/hard/13580-replace-union/question.md)
- [ ] [14080-fizzbuzz](./challenges/hard/14080-fizzbuzz/question.md)
- [ ] [14188-run-length-encoding](./challenges/hard/14188-run-length-encoding/question.md)
- [ ] [15260-tree-path-array](./challenges/hard/15260-tree-path-array/question.md)
- [ ] [19458-snakecase](./challenges/hard/19458-snakecase/question.md)

#### Extreme

- [ ] [5-readonly-keys](./challenges/extreme/5-readonly-keys/question.md)
- [ ] [151-query-string-parser](./challenges/extreme/151-query-string-parser/question.md)
- [ ] [216-slice](./challenges/extreme/216-slice/question.md)
- [ ] [274-integers-comparator](./challenges/extreme/274-integers-comparator/question.md)
- [ ] [462-currying-2](./challenges/extreme/462-currying-2/question.md)
- [ ] [476-sum](./challenges/extreme/476-sum/question.md)
- [ ] [517-multiply](./challenges/extreme/517-multiply/question.md)
- [ ] [697-tag](./challenges/extreme/697-tag/question.md)
- [ ] [734-inclusive-range](./challenges/extreme/734-inclusive-range/question.md)
- [ ] [741-sort](./challenges/extreme/741-sort/question.md)
- [ ] [869-distributeunions](./challenges/extreme/869-distributeunions/question.md)
- [ ] [925-assert-array-index](./challenges/extreme/925-assert-array-index/question.md)
- [ ] [6228-json-parser](./challenges/extreme/6228-json-parser/question.md)
- [ ] [7561-subtract](./challenges/extreme/7561-subtract/question.md)