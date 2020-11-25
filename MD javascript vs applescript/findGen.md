```javascript
// findGen :: (a -> Bool) -> Gen [a] -> Maybe a
const findGen = p =>
    // Just the first match for the predicate p
    // in the generator stream xs, or Nothing
    // if no match is found.
    xs => {
        const
            mb = until(tpl => {
                const nxt = tpl[0];
                return nxt.done || p(nxt.value);
            })(
                tpl => Tuple(tpl[1].next())(
                    tpl[1]
                )
            )(Tuple(xs.next())(xs))[0];
        return mb.done ? (
            Nothing()
        ) : Just(mb.value);
    };
```


```applescript
-- findGen :: (a -> Bool) -> Gen [a] -> Maybe a
on findGen(p, gen)
    -- Just the first match for the predicate p
    -- in the generator stream gen, or Nothing
    -- if no match is found.
    set mp to mReturn(p)
    set v to gen's |λ|()
    repeat until missing value is v or (|λ|(v) of mp)
        set v to (|λ|() of gen)
    end repeat
    if missing value is v then
        Nothing()
    else
        Just(v)
    end if
end findGen
```