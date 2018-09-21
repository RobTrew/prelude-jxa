```js
// inits([1, 2, 3]) -> [[], [1], [1, 2], [1, 2, 3]
// inits('abc') -> ["", "a", "ab", "abc"]
```

```js
// inits :: [a] -> [[a]]
// inits :: String -> [String]
const inits = xs => [
        []
    ]
    .concat(('string' === typeof xs ? xs.split('') : xs)
        .map((_, i, lst) => lst.slice(0, i + 1)));
```