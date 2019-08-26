```js
// isPrefixOf takes two lists or strings and returns 
// true iff the first is a prefix of the second.
```

```js
// isPrefixOf :: [a] -> [a] -> Bool
// isPrefixOf :: String -> String -> Bool
const isPrefixOf = xs => ys => {
    const go = (xs, ys) => {
        const intX = xs.length;
        return 0 < intX ? (
            ys.length >= intX ? xs[0] === ys[0] && go(
                xs.slice(1), ys.slice(1)
            ) : false
        ) : true;
    };
    return 'string' !== typeof xs ? (
        go(xs, ys)
    ) : ys.startsWith(xs);
};
```