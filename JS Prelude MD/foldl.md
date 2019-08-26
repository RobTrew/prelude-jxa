```js
// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = f => a => xs => {
    let v = a;
    xs.forEach(x => v = f(v)(x));
    return v;
};
```