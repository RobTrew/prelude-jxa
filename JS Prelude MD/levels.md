```js
// levels :: Tree a -> [[a]]
const levels = tree =>
    iterateUntil(xs => 1 > xs.length)(
        ys => [].concat(...ys.map(nest))
    )([tree]).map(xs => xs.map(root));
```