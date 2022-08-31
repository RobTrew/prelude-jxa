```javascript
// length :: [a] -> Int
const length = xs =>
    // Returns Infinity over objects without finite
    // length. This enables zip and zipWith to choose
    // the shorter argument when one is non-finite,
    // like cycle, repeat etc
    "Node" !== xs.type ? (
        "GeneratorFunction" !== xs.constructor
        .constructor.name ? (
                xs.length
            ) : Infinity
    ) : lengthTree(xs);
```