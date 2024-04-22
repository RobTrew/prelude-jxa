```javascript
// index (!!) :: [a] -> Int -> Maybe a
// index (!!) :: Generator (Int, a) -> Int -> Maybe a
// index (!!) :: String -> Int -> Maybe Char
const index = xs =>
    i => {
        const s = xs.constructor.constructor.name;

        return "GeneratorFunction" !== s
            ? (() => {
                const v = xs[i];

                return undefined !== v
                    ? Just(v)
                    : Nothing();
            })()
            : (take(i)(xs), xs.next().value);
    };
```