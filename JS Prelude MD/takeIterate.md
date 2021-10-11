```javascript
// takeIterate n f x == [x, f x, f (f x), ...]
// takeIterate :: Int -> (a -> a) -> a -> [a]
const takeIterate = n =>
    f => x => Array.from({
        length: n - 1
    }).reduce(
        ([a, vs]) => {
            const v = f(a);

            return Tuple(v)(vs.concat(v));
        },
        Tuple(x)([x])
    )[1];
```