```javascript
// showIntAtBase :: Int -> (Int -> Char) ->
// Int -> String -> String
const showIntAtBase = base =>
    // A string representation of n, in the given base,
    // using a supplied (Int -> Char) function for
    // digits, and a supplied suffix string.
    toChr => n => rs => {
        const go = ([x, d], r) => {
            const r_ = toChr(d) + r;

            return 0 !== x ? (
                go(quotRem(x)(base), r_)
            ) : r_;
        };

        const e = "error: showIntAtBase applied to";

        return 1 >= base ? (
            `${e} unsupported base`
        ) : 0 > n ? (
            `${e} negative number`
        ) : go(quotRem(n)(base), rs);
    };
```