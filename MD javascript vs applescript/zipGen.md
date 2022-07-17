```javascript
// zipGen :: (a -> b -> c) ->
// Gen [a] -> Gen [b] -> Gen [c]
const zipGen = ga =>
    // A composite generator formed by the application
    // of f to each pair of values in a zip of two
    // generators.
    gb => {
        const go = function* (ma, mb) {
            let
                a = ma,
                b = mb;

            while (!a.Nothing && !b.Nothing) {
                const [ax, axs] = a.Just;
                const [bx, bxs] = b.Just;

                yield [ax, bx];
                a = uncons(axs);
                b = uncons(bxs);
            }
        };

        return go(uncons(ga), uncons(gb));
    };
```


```applescript
-- zipGen :: Gen [a] -> Gen [b] -> Gen [(a, b)]
on zipGen(ga, gb)
    script
        property ma : missing value
        property mb : missing value
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
                set x to Tuple(|1| of ta, |1| of tb)
                set ma to uncons(|2| of ta)
                set mb to uncons(|2| of tb)
                return x
            end if
        end |λ|
    end script
end zipGen
```