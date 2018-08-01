# 1.5 プロパティとスロット

## プロパティ
コンポーネントに対して、プロパティを宣言することが出来ます。
```
props: ['title']
```

コンポーネントに属性として値を渡したとき、その属性に対応する名前のプロパティが宣言してあった場合、
値はプロパティに受け渡されます。
値の受け渡しは、
```
<my-article title="今日の日記"></-my-article>
```
のような静的な受け渡しや

```
<my-article v-bind="post.title"></-my-article>
```
のような動的な受け渡しがあります。

プロパティを宣言する際、特定の型を指定することも出来ます。

```
props: {
  title: String,
  likes: Number,
  isPrivate: Boolean,
  author: Object
}
```


## スロット

要素（タグ）内のコンテンツは、コンポーネント内の```<slot>```要素に受け渡され、展開されます。

```
<my-article>今日の日記</my-article>
```

```
<div class="my-article">
  <slot></slot>
</div>
```

スロットに名前をつけることで、一つのコンポーネント内で複数のslotを利用することが出来ます。

```
<div class="my-article">
  <div>
    <h4><slot name="title"></slot></h4>
  </div>
  <slot></slot>
</div>
```

```
<my-article>
  <template slot="title">{{article.title}}</template>
  {{article.body}}
</my-article>

```
