```applescript
-- zipWithM :: Applicative m => (a -> b -> m c) -> [a] -> [b] -> m [c]
on zipWithM(fm, xs, ys)
    -- A functor of the type to which fm lifts its result.
    -- For example, Nothing/Left if any of the zip applications failed,
    -- or Just/Right a list of the results, when all succeeded.
    traverseList(my identity, zipWith(fm, xs, ys))
end zipWithM
```


```javascript
// zipWithM :: Applicative m => (a -> b -> m c) -> [a] -> [b] -> m [c]
const zipWithM = f => 
    xs => ys =>
        sequenceA(
            zipWith(f)(
                [...xs]
            )([...ys])
        );
```