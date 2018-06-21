```js
// take N Members of an infinite cycle of xs, starting from index I
```

```js
// takeDropCycle :: Int -> [a] -> [a]
const takeDropCycle = (n, i, xs) => {
    const
        lng = xs.length,
        m = n + i;
    return drop(i,
        take(m,
            (lng >= m ? xs : concat(replicate(Math.ceil(m / lng), xs)))
        )
    );
};
```