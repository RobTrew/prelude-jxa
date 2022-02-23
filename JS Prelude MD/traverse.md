```javascript
// traverse :: (Applicative f, Traversable t) ->
// (a -> f b) -> t a -> f (t b)
const traverse = f =>
    // Each element of a structure mapped to an
    // a functor-wrapped value, with evaluation from
    // from left to right, and the results collected
    // in a single instance of the target functor.
    tx => ({
        "Either": () => traverseLR,
        "Maybe": () => traverseMay,
        "Node": () => traverseTree,
        "Tuple": () => traverseTuple,
        "List": () => traverseList
    })[tx.type || "List"]()(f)(tx);
```