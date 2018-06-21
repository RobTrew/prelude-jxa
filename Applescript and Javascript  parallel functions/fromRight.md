```js
-- fromRight :: b -> Either a b -> bon fromRight(def, lr)	if isRight(lr) then		|Right| of lr	else		def	end ifend fromRight
```

```js
// | Return the contents of a 'Right'-value or a default value otherwise.
```

```js
// fromRight :: b -> Either a b -> b
const fromRight = (def, lr) =>
  isRight(lr) ? lr.Right : def;
```