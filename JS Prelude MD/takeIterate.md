```js
// takeIterate n f x == [x, f x, f (f x), ...]
```

```js
// takeIterate n f x == [x, f x, f (f x), ...]
// takeIterate :: Int -> (a -> a) -> a -> [a]
const takeIterate = n => f => x =>
    snd(mapAccumL(a => _ => i => {
        const v = 0 !== i ? f(a) : x;
        return [v, v];
    }, x, Array.from({
        length: n
    })));
```