```js
// fmapGen <$> :: (a -> b) -> Gen [a] -> Gen [b]
function* fmapGen(f, gen) {
    const g = gen;
    let v = take(1, g);
    while (0 < v.length) {
        yield(f(v))
        v = take(1, g)
    }
}
```