```javascript
// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = f =>
    // f mapped over the given functor.
    x => ({
        "Either": () => fmapLR,
        "List": () => map,
        "Maybe": () => fmapMay,
        "Node": () => fmapTree,
        "String": () => map,
        "Tuple": () => fmapTuple
    })[typeName(x)]()(f)(x);
```