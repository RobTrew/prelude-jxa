```js
// | Return the contents of a 'Right'-value or a default value otherwise.
```

```js
// fromRight :: b -> Either a b -> b
const fromRight = def => lr =>
  isRight(lr) ? lr.Right : def;
```