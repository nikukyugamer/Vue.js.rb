# 1.4 データバインディング
コンポーネントのdataオプションで定義したプロパティは、
リアクテイブデータとしての性質を持ちます。
リアクティブデータは、データへのget,setに反応します。
```
{{message}}
```
とかくと、テキストとしてバインドされます。


```
<input type='text' v-model='monsterForm.name'>
```
で、inputタグのvalue属性にプロパティの```monsterForm.name```が双方向バインドされます。

```
<input type='text' v-bind:value='monsterForm.name'>

```
または
```
<input type='text' :value='monsterForm.name'>
```
で単方向のバインドになります。
```v-bind:value```と ```:value```は同じ意味です。
