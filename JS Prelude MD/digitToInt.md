```javascript
// digitToInt :: Char -> Int
const digitToInt = c => {
    const
        ord = x => x.codePointAt(0),
        oc = ord(c);
    return 48 > oc || 102 < oc ? (
        undefined
    ) : (() => {
        const
            dec = oc - ord('0'),
            hexu = oc - ord('A'),
            hexl = oc - ord('a');
        return 9 >= dec ? (
            dec
        ) : 0 <= hexu && 5 >= hexu  ? (
            10 + hexu
        ) : 0 <= hexl && 5 >= hexl ? (
            10 + hexl
        ) : undefined;
    })();
};
```