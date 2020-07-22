```js
// rotate :: Int -> [a] -> [a]
const rotate = n => xs => {
    // Rightward rotation of xs by n positions.
    const lng = xs.length;
    return Infinity > lng ? (
        take(lng)(
            drop(lng - n)(
                cycle(xs)
            )
        )
    ) : undefined;
};
```