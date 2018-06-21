```js
// permutations :: [a] -> [[a]]
const permutations = xs =>
    xs.length ? concatMap(x => concatMap(ys => [
            [x].concat(ys)
        ],
        permutations(delete_(x, xs))), xs) : [
        []
    ];
```