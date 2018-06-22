```js
// isPrefixOf takes two lists or strings and returns 
// true iff the first is a prefix of the second.
```

```js
// isPrefixOf :: [a] -> [a] -> Bool
// isPrefixOf :: String -> String -> Bool
const isPrefixOf = (xs, ys) => {
    const pfx = (xs, ys) => {
        const intX = xs.length;
        return intX > 0 ? (
            ys.length >= intX ? xs[0] === ys[0] && pfx(
                xs.slice(1), ys.slice(1)
            ) : false
        ) : true;
    };
    return typeof xs !== 'string' ? pfx(xs, ys) : ys.startsWith(xs);
};
```