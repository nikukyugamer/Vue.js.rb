# フィルタ
フィルタ機能は、事前に定義したフィルタ関数を、フォーマットとして値に適用するものです。
mustache展開とv-bind、２つの場所で使用することが出来ます。

```
filters: {
  moment: function (date) {
    return moment(date).fromNow()
  }
}
```

例として、上のmomentフィルタは、渡されたdateオブジェクトの日時がどれだけ前かを返すものです。

```
{{ createdAt || moment }}
```
のように使うことが出来ます。
