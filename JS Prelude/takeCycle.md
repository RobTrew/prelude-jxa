```js
// First n members of an infinite cycle of xs
```

```js
// takeCycle :: Int -> [a] -> [a]
const takeCycle = (n, xs) => {
    const lng = xs.length;
    return (
            n <= xs ? (
                xs
            ) : concat(
                replicate(
                    Math.ceil(n / lng),
                    xs
                )
            )
        )
        .slice(0, n)
};
```