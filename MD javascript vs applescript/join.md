```javascript
// join :: Monad m => m (m a) -> m a
const join = x =>
    bind(x)(identity);
```


```applescript
-- join :: Monad m => m (m a) -> m a
on join(x)
    bind(x, my identity)
end join
```