```javascript
// elemAtMay :: Int -> Dict -> Maybe (String, a)
// elemAtMay :: Int -> [a] -> Maybe a
const elemAtMay = i =>
    // Just the item at the indexed position in an array,
    // or in the lexically sorted key-values of a dict,
    // or Nothing, if the index is out of range.
    obj => {
        const
            vs = Array.isArray(obj)
                ? obj
                : Object.entries(obj).sort(
                    (a, b) => b[0].localeCompare(a[0])
                );

        return (0 <= i) && (i < vs.length)
            ? Just(vs[i])
            : Nothing();
    };
```


```applescript
-- elemAtMay :: Int -> Dict -> Maybe (String, a)
-- elemAtMay :: Int -> [a] -> Maybe a
on elemAtMay(i, x)
    -- If x is a Dictionary then reads the Int as an index
    -- into the lexically sorted keys of the Dict, 
    -- returning a Maybe (Key, Value) pair.
    -- If x is a list, then return a Maybe a 
    -- (In either case, returns Nothing for an Int out of range)
    set bln to class of x is record
    if bln then
        set ks to keys(x)
        if i ≤ |length|(ks) then
            set k to item i of sort(ks)
            script pair
                on |λ|(v)
                    Just(Tuple(k, v))
                end |λ|
            end script
            bindMay(lookup(k, x), pair)
        end if
    else
        if i ≤ |length|(x) then
            Just(item i of x)
        else
            Nothing()
        end if
    end if
end elemAtMay
```