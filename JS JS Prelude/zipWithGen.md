```js
// zipWithGen :: (a -> b -> c) -> 
// Gen [a] -> Gen [b] -> Gen [c]
const zipWithGen = f => ga => gb => {
    function* go(ma, mb) {
        let
            a = ma,
            b = mb;
        while (!a.Nothing && !b.Nothing) {
            let
                ta = a.Just,
                tb = b.Just
            yield(f(fst(ta))(fst(tb)));
            a = uncons(snd(ta));
            b = uncons(snd(tb));
        }
    }
    return go(uncons(ga), uncons(gb));
};
```