```javascript
// uncons :: [a] -> Maybe (a, [a])
const uncons = xs => {
    // Just a tuple of the head of xs and its tail,
    // Or Nothing if xs is an empty list.
    const n = length(xs);

    return 0 < n
        ? Infinity > n
            // Finite list
            ? Just(Tuple(xs[0])(xs.slice(1)))

            // Lazy generator
            : (() => {
                const nxt = take(1)(xs);

                return 0 < nxt.length
                    ? Just(Tuple(nxt[0])(xs))
                    : Nothing();
            })()
        : Nothing();
};
```


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
            set nxt to take(1, xs)
            if {} is nxt then
                Nothing()
            else
                Just(Tuple(item 1 of nxt, xs))
            end if
        end if
    end if
end uncons
```