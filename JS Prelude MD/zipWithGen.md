```javascript
// zipWithGen :: (a -> b -> c) ->
// Gen [a] -> Gen [b] -> Gen [c]
const zipWithGen = f => ga => gb => {
    const go = function* (ma, mb) {
        let
            a = ma,
            b = mb;

        while (!a.Nothing && !b.Nothing) {
            const [fta, sta] = a.Just;
            const [ftb, stb] = b.Just;

            yield f(fta)(ftb);
            a = uncons(sta);
            b = uncons(stb);
        }
    };
```