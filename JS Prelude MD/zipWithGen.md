```javascript
// zipWithGen :: (a -> b -> c) ->
// Gen [a] -> Gen [b] -> Gen [c]
const zipWithGen = f => ga => gb => {
    const go = function* (ma, mb) {
        let
            a = ma,
            b = mb;

        while (!a.Nothing && !b.Nothing) {
            const
                ta = a.Just,
                tb = b.Just;

            yield f(fst(ta))(fst(tb));
            a = uncons(snd(ta));
            b = uncons(snd(tb));
        }
    };

    return go(uncons(ga), uncons(gb));
};
```