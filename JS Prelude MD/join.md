```js
// join :: Monad m => m (m a) -> m a
const join = x => bind(x, identity);
```