## イベントハンドリング
```v-on``` または```@```を使ってイベントハンドラを指定出来ます

```
<button v-on:click='submit'>送信</button>
<button @click='submit'>送信</button>
```
上の2つのボタンはどちらも、クリック時にsubmitメソッドが呼ばれます。

使用できるイベントは、ブラウザのサポート状況にそのまま依存します。

### イベント修飾子

イベント名に修飾子を付与することで、イベントの振る舞いを変えることが出来ます。

```prevent```というイベント修飾子は、```preventDefault``` + ```stopPropagation```に相当し、

その要素のイベントがキャンセルされ、親要素へのイベント伝搬がされなくなります。

```
<form @submit.prevent="onSubmit">
  <input type="text">
  <button type='submit'>リロードしない</button>
</form>
```

上の例では、form自体のsubmitイベントがキャンセルされる為、
ページリロードは発生せずにonSubmitが実行されます。
