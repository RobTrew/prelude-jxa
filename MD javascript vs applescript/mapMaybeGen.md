```applescript
-- mapMaybeGen :: (a -> Maybe b) -> Gen [a] -> Gen [b]
on mapMaybeGen(mf, gen)
    script
        property mg : mReturn(mf)
        on |λ|()
            set v to gen's |λ|()
            if v is not missing value then
                set mb to mg's |λ|(v)
                repeat while (Nothing of mb) and not (missing value is v)
                    set v to gen's |λ|()
                    if missing value is not v then set mb to mg's |λ|(v)
                end repeat
                if not |Nothing| of mb then
                    |Just| of mb
                else
                    missing value
                end if
            else
                v
            end if
        end |λ|
    end script
end mapMaybeGen
```


```javascript
// mapMaybeGen :: (a -> Maybe b) -> Gen [a] -> Gen [b]
const mapMaybeGen = mf =>
    // A filtered map over a generator, returning only the
    // contents of Just values. (Nothing values discarded).
    function*(gen) {
        let v = take(1)(gen);

        while (Boolean(v.length)) {
            const mb = mf(v[0]);

            if (!("Nothing" in mb)) {
                yield mb.Just;
            }
            v = take(1)(gen);
        }
    };
```