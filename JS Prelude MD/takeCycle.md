```javascript
// takeCycle :: Int -> [a] -> [a]
const takeCycle = n =>
    // First n elements of a non-finite cycle of xs.
    xs => {
        const lng = xs.length;

        return (
            n <= xs ? (
                xs
            ) : concat(
                replicate(Math.ceil(n / lng))(
                    xs
                )
            )
        ).slice(0, n);
    };
```