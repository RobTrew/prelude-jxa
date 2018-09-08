```js
// permutations :: [a] -> [[a]]
const permutations = xs => {
    const go = xs =>
        xs.length ? concatMap(x => concatMap(ys => [
                [x].concat(ys)
            ],
            go(delete_(x, xs))), xs) : [
            []
        ];
    return go(xs);
};
```