```js
// zipWithM :: Applicative m => (a -> b -> m c) -> [a] -> [b] -> m [c]
const zipWithM = f => 
    xs => ys =>
        sequenceA(
            zipWith(f)(xs)(ys)
        );
```