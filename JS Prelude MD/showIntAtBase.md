```javascript
// showIntAtBase :: Int -> (Int -> Char) -> Int -> String -> String
const showIntAtBase = base =>
    toChr => n => rs => {
        const go = ([x, d], r) => {
            const r_ = toChr(d) + r;

            return 0 !== x ? (
                go(Array.from(quotRem(n)(base)), r_)
            ) : r_;
        };

        return 1 >= base ? (
            "error: showIntAtBase applied to unsupported base"
        ) : 0 > n ? (
            "error: showIntAtBase applied to negative number"
        ) : go(Array.from(quotRem(n)(base)), rs);
    };
```