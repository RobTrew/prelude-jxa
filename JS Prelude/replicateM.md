```js
// Instance for lists (arrays) only here
```

```js
// replicateM :: Int -> [a] -> [[a]]
const replicateM = (n, xs) => {
    const loop = x => x <= 0 ? [
        []
    ] : liftA2(cons, xs, loop(x - 1));
    return loop(n);
};
```