```applescript
-- enumFromToChar :: Char -> Char -> [Char]
on enumFromToChar(m, n)
    set {intM, intN} to {id of m, id of n}
    if intM ≤ intN then
        set xs to {}
        repeat with i from intM to intN
            set end of xs to character id i
        end repeat
        return xs
    else
        {}
    end if
end enumFromToChar
```


```javascript
// enumFromToChar :: Char -> Char -> [Char]
const enumFromToChar = m => n => {
    const
        [intM, intN] = [m, n].map(
            x => x.codePointAt(0)
        );

    return Array.from({
        length: Math.floor(intN - intM) + 1
    }, (_, i) => String.fromCodePoint(intM + i));
};
```