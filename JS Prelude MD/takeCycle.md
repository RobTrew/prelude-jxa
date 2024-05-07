```javascript
// takeCycle :: Int -> [a] -> [a]
const takeCycle = n =>
    // First n elements of a non-finite cycle of xs.
    xs => {
        const lng = xs.length;

        return (
            n <= lng
                ? xs
                : Array.from(
                    {length: n},
                    () => xs
                )
                .flat(1)
        )
        .slice(0, n);
    };
```