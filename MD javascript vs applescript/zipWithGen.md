```applescript
-- zipWithGen :: (a -> b -> c) -> Gen [a] -> Gen [b] -> Gen [c]
on zipWithGen(f, ga, gb)
    script
        property ma : missing value
        property mb : missing value
        property mf : mReturn(f)
        on |λ|()
            if missing value is ma then
                set ma to uncons(ga)
                set mb to uncons(gb)
            end if
            if Nothing of ma or Nothing of mb then
                missing value
            else
                set ta to Just of ma
                set tb to Just of mb
                set ma to uncons(|2| of ta)
                set mb to uncons(|2| of tb)
                |λ|(|1| of ta, |1| of tb) of mf
            end if
        end |λ|
    end script
end zipWithGen
```


```javascript
// zipWithGen :: (a -> b -> c) ->
// Gen [a] -> Gen [b] -> Gen [c]
const zipWithGen = f =>
    // A composite generator formed by the application
    // of f to each pair of values in a zip of two
    // generators.
    ga => gb => {
        const go = function* (ma, mb) {
            let
                a = ma,
                b = mb;

            while (!a.Nothing && !b.Nothing) {
                const [ax, axs] = a.Just;
                const [bx, bxs] = b.Just;

                yield f(ax)(bx);
                a = uncons(axs);
                b = uncons(bxs);
            }
        };

        return go(uncons(ga), uncons(gb));
    };
```