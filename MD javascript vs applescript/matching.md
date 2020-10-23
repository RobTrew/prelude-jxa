```applescript
-- Returns a sequence-matching function for findIndices etc
-- matching :: [a] -> (a -> Int -> [a] -> Bool)
-- matching :: String -> (Char -> Int -> String -> Bool)
on matching(pat)
    if class of pat is text then
        set xs to characters of pat
    else
        set xs to pat
    end if
    set lng to length of xs
    set bln to 0 < lng
    if bln then
        set h to item 1 of xs
    else
        set h to missing value
    end if
    script
        on |λ|(x, i, src)
            (h = x) and xs = ¬
                (items i thru min(length of src, -1 + lng + i) of src)
        end |λ|
    end script
end matching
```


```javascript
// matching :: [a] -> (a -> Int -> [a] -> Bool)
const matching = pat => {
    // A sequence-matching function for findIndices etc
    // findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
    // -> [1, 4]
    const
        lng = pat.length,
        bln = 0 < lng,
        h = bln ? pat[0] : undefined;
    return x => i => src =>
        bln && h == x && eq(pat)(
            src.slice(i, lng + i)
        );
};
```