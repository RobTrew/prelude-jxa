```javascript
// inits :: [a] -> [[a]]
const inits = xs =>
    // All prefixes of the argument,
    // shortest first.
    xs.reduce(
        (a, x) => a.concat(
            [a.slice(-1)[0].concat(x)]
        ),
        [[]]
    );
```