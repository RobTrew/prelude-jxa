```applescript
-- uncons :: [a] -> Maybe (a, [a])
on uncons(xs)
    set lng to |length|(xs)
    if 0 = lng then
        Nothing()
    else
        if (2 ^ 29 - 1) as integer > lng then
            if class of xs is string then
                set cs to text items of xs
                Just(Tuple(item 1 of cs, rest of cs))
            else
                Just(Tuple(item 1 of xs, rest of xs))
            end if
        else
            Just(Tuple(item 1 of take(1, xs), xs))
        end if
    end if
end uncons
```

```js
// uncons :: [a] -> Maybe (a, [a])
const uncons = xs => {
    const lng = length(xs);
    return (0 < lng) ? (
        Just(
            lng < Infinity ? (
                Tuple(xs[0],  xs.slice(1)) // Finite list
            ) : Tuple(take(1, xs)[0],  xs) // Lazy generator
        )
    ) : Nothing();
};
```