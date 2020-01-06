```js
// kCompose (>=>) :: Monad m => 
// [(a -> m a)] -> (a -> m a)
const kCompose = (...fs) =>
    // Left Right composition of a sequence
    // of functions which lift a raw value
    // of the same type into the same monad.
    x => 0 < fs.length ? (
        fs.slice(1).reduce(
            (m, f) => bind(m)(f),
            fs[0](x)
        )
    ) : x;
```