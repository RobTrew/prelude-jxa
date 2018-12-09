```applescript
-- > unfoldr (\b -> if b == 0 then Nothing else Just (b, b-1)) 10
-- > [10,9,8,7,6,5,4,3,2,1] 
```

```applescript
-- unfoldr :: (b -> Maybe (a, b)) -> b -> [a]
on unfoldr(f, v)
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
                set end of xs to |1| of xr
            end if
        end repeat
    end tell
    return xs
end unfoldr
```

```js
// The 'unfoldr' function is a *dual* to 'foldr': while 'foldr'
// reduces a list to a summary value, 'unfoldr' builds a list from
// a seed value.  The function takes the element and returns 'Nothing'
// if it is done producing the list or returns 'Just' @(a,b)@, in which
// case, @a@ is a prepended to the list and @b@ is used as the next
// element in a recursive call.
//
// unfoldr(x => 0 !== x ? Just([x, x - 1]) : Nothing(), 10);
// --> [10,9,8,7,6,5,4,3,2,1]

// (x => Maybe [value, remainder] -> initial value -> values
```

```js
// unfoldr :: (b -> Maybe (a, b)) -> b -> [a]
const unfoldr = (f, v) => {
    let
        xr = [v, v],
        xs = [];
    while (true) {
        const mb = f(xr[1]);
        if (mb.Nothing) {
            return xs
        } else {
            xr = mb.Just;
            xs.push(xr[0])
        }
    }
};
```