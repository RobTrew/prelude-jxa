```js
// zipGen :: Gen [a] -> Gen [b] -> Gen [(a, b)]
const zipGen = ga => gb => {
    function* go(ma, mb) {
        let
            a = ma,
            b = mb;
        while(!a.Nothing && !b.Nothing) {
            let
                ta = a.Just,
                tb = b.Just;
            yield(
                Tuple(fst(ta))(
                    fst(tb)
                )
            );
            a = uncons(snd(ta));
            b = uncons(snd(tb));
        }
    }
    return go(uncons(ga), uncons(gb));
};
```