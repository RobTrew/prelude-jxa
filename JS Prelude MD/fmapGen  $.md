```js
// fmapGen <$> :: (a -> b) -> Gen [a] -> Gen [b]
function* fmapGen(f, gen) {
    let v = take(1, gen);
    while (0 < v.length) {
        yield(f(v[0]))
        v = take(1, gen)
    }
}
```