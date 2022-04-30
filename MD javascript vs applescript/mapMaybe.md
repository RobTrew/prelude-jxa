```applescript
-- mapMaybe :: (a -> Maybe b) -> [a] -> [b]
on mapMaybe(mf, xs)
    -- The mapMaybe function is a version of map which can throw out
    -- elements. In particular, the functional argument returns
    -- something of type Maybe b. If this is Nothing, no element is
    -- added on to the result list. If it just Just b, then b is
    -- included in the result list.
    script
        property g : mReturn(mf)
        on |λ|(a, x)
            set mb to g's |λ|(x)
            if Nothing of mb then
                a
            else
                a & (Just of mb)
            end if
        end |λ|
    end script
    foldl(result, {}, xs)
end mapMaybe
```


```javascript
// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
const mapMaybe = mf =>
    // A filtered map, retaining only the contents
    // of Just values. (Nothing values discarded).
    xs => xs.flatMap(x => {
        const mb = mf(x);

        return "Just" in mb ? (
            [mb.Just]
        ) : [];
    });
```