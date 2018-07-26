#1.2 SFCで記述する
Vueコンポーネントは,Vue Single-File Component という形式で記述することが出来ます。

```example.vue
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>
```

SFC形式の```.vue```ファイルを解釈する為に```webpack, vue-loader```を使用します。
別途、ローダを導入することで,pug,sass,TypeScriptなどで記述する事も可能です。
https://github.com/vuejs/vue-loader


## storybookを使う
https://github.com/storybooks/storybook
storybookは、UIコンポーネントの開発、共有するためのツールです。

```
// playground ディレクトリ内
$ npm install
$ npm run storybook
```

上記のコマンドで、storybookが起動します。

```src/stories/index.js```
で、Vueコンポーネントをstorybookに登録しています。
