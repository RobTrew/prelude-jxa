```javascript
// pureT :: String -> f a -> (a -> f a)
const pureT = t =>
    // Given a type name string, returns a
    // specialised "pure", where
    // "pure" lifts a value into a particular functor.
    ({
        "Either": () => pureLR,
        "Maybe": () => pureMay,
        "Node": () => pureTree,
        "Tuple": () => pureTuple,
        "List": () => pureList
    })[t || "List"]();
```