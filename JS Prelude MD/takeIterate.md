```js
// takeIterate n f x == [x, f x, f (f x), ...]
```

```js
// takeIterate :: Int -> (a -> a) -> a -> [a]
const takeIterate = (n, f, x) =>
    snd(mapAccumL((a, _, i) => {
        const v = i !== 0 ? f(a) : x;
        return [v, v];
    }, x, Array.from({
        length: n
    })));
```