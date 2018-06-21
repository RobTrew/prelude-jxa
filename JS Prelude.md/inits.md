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
    .concat((typeof xs === 'string' ? xs.split('') : xs)
        .map((_, i, lst) => lst.slice(0, i + 1)));
```