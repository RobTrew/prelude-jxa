```applescript
-- > unfoldl (\b -> if b == 0 then Nothing else Just (b, b-1)) 10
-- > [1,2,3,4,5,6,7,8,9,10]
```

```applescript
-- unfoldl :: (b -> Maybe (a, b)) -> b -> [a]
on unfoldl(f, v)
    set xr to Tuple(v, v) -- (value, remainder)
    set xs to {}
    tell mReturn(f)
        repeat -- Function applied to remainder.
            set mb to |λ|(|2| of xr)
            if Nothing of mb then
                exit repeat
            else -- New (value, remainder) tuple,
                set xr to Just of mb
                -- and value appended to output list.
                set xs to ({|1| of xr} & xs)
            end if
        end repeat
    end tell
    return xs
end unfoldl
```

```js
// (x => Maybe [value, remainder] -> initial value -> values
```

```js
// unfoldl :: (b -> Maybe (a, b)) -> b -> [a]
const unfoldl = (f, v) => {
    let xs = [];
    return (
        until(
            mb => mb.Nothing,
            mb => (
                xs = [mb.Just[1]].concat(xs),
                f(mb.Just[1])
            ), Just(Tuple(v, v))
        ),
        xs.slice(1)
    );
};
```