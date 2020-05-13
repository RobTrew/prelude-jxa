```js
// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = eq =>
    // The intersection of the lists xs and ys
    // in terms of the equality defined by eq.
    xs => ys => {
        const zs = list(ys);
        return list(xs).filter(
            x => zs.some(eq(x))
        );
    };
```