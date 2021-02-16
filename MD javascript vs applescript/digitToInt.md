```javascript
// digitToInt :: Char -> Int
const digitToInt = c => {
    const
        ord = x => x.codePointAt(0),
        oc = ord(c);

    return 48 > oc || 102 < oc ? (
        null
    ) : (() => {
        const
            dec = oc - ord('0'),
            hexu = oc - ord('A'),
            hexl = oc - ord('a');

        return 9 >= dec ? (
            dec
        ) : 0 <= hexu && 5 >= hexu ? (
            10 + hexu
        ) : 0 <= hexl && 5 >= hexl ? (
            10 + hexl
        ) : null;
    })();
};
```


```applescript
-- digitToInt :: Char -> Int
on digitToInt(c)
    set oc to id of c
    if 48 > oc or 102 < oc then
        missing value
    else
        set dec to oc - (id of "0")
        set hexu to oc - (id of "A")
        set hexl to oc - (id of "a")
        if 9 ≥ dec then
            dec
        else if 0 ≤ hexu and 5 ≥ hexu then
            10 + hexu
        else if 0 ≤ hexl and 5 ≥ hexl then
            10 + hexl
        else
            missing value
        end if
    end if
end digitToInt
```