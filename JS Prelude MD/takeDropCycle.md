```js
// takeDropCycle :: Int -> [a] -> [a]
const takeDropCycle = n =>
    // N Members of an infinite cycle of xs, starting from index I
    i => xs => drop(i)(
        take(n + i)(cycle(xs))
    );
```