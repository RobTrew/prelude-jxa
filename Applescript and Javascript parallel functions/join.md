```applescript
-- join :: Monad m => m (m a) -> m a
on join(x)
    bind(x, |id|)
end join
```

```js
// join :: Monad m => m (m a) -> m a
const join = x => bind(x, id);
```