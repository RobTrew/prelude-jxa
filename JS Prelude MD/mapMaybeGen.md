```js
// mapMaybeGen :: (a -> Maybe b) -> Gen [a] -> Gen [b]
function* mapMaybeGen(mf, gen) {
    let v = take(1, gen);
    while (0 < v.length) {
        let mb = mf(v[0]);
        if (!mb.Nothing) yield mb.Just
        v = take(1, gen);
    }
}
```