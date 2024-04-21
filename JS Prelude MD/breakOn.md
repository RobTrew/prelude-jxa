```javascript
// breakOn :: Eq a => [a] -> [a] -> ([a], [a])
// breakOn :: String -> String -> ([Char], [Char])
const breakOn = needle =>
    // A tuple of the prefix before the first match
    // and the whole remainder (including the match).
    haystack => {
        const ns = [...needle];

        const go = hs =>
            isPrefixOf(ns)(hs)
                ? Tuple([])(hs)
                : 0 === hs.length
                    ? Tuple([])([])
                    : first(
                        v => [hs[0]].concat(v)
                    )(
                        go(hs.slice(1))
                    );

        return go([...haystack]);
    };
```