```js
// regexMatches :: Regex -> String -> [[String]]
const regexMatches = rgx =>
    // All matches for the given regular expression
    // in the supplied string s.
    s => {
        // Recompiled to ensure that any supplied 
        // regex is interpreted as global.
        const r = new RegExp(rgx, 'g');
        return unfoldr(
            m => !!m ? (
                Just(Tuple(m)(r.exec(s)))
            ) : Nothing()
        )(r.exec(s));
    };
```