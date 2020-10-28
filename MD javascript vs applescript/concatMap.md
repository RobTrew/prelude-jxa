```applescript
-- concatMap :: (a -> [b]) -> [a] -> [b]
on concatMap(f, xs)
    set lng to length of xs
    set acc to {}
    tell mReturn(f)
        repeat with i from 1 to lng
            set acc to acc & (|λ|(item i of xs, i, xs))
        end repeat
    end tell
    if {text, string} contains class of xs then
        acc as text
    else
        acc
    end if
end concatMap
```


```javascript
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f =>
    // Where (a -> [b]) returns an Array, this 
    // is equivalent to .flatMap, which should be
    // used by default.
    // but if (a -> [b]) returns String rather than [Char], 
    // the monoid unit is '' in place of [], and a 
    // concatenated string is returned.
    xs => {
        const ys = list(xs).map(f);
        return 0 < ys.length ? (
            ys.some(y => 'string' !== typeof y) ? (
                []
            ) : ''
        ).concat(...ys) : ys;
    };
```