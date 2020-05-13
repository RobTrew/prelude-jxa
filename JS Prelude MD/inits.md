```js
// inits([1, 2, 3]) -> [[], [1], [1, 2], [1, 2, 3]
// inits('abc') -> ["", "a", "ab", "abc"]
```

```js
// inits :: [a] -> [[a]]
// inits :: String -> [String]
const inits = xs => [
    []
].concat((list(xs))
    .map((_, i, ys) => ys.slice(0, 1 + i)));
```