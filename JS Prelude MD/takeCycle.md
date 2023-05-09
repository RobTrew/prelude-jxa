```javascript
// takeCycle :: Int -> [a] -> [a]
const takeCycle = n =>
    // First n elements of a non-finite cycle of xs.
    xs => {
        const lng = xs.length;

        return (
            n <= lng ? (
                xs
            ) : replicate(
                Math.ceil(n / lng)
            )(xs).flat(1)
        ).slice(0, n);
    };
```