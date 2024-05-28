```applescript
-- Abbreviation for quick testing
-- sj :: a -> String
on sj(x)
    showJSON(x)
end sj
```


```javascript
// sj :: a -> String
const sj = (...args) =>
    // Abbreviation of showJSON for quick testing.
    // Default indent size is two, which can be
    // overriden by any integer supplied as the
    // first argument of more than one.
    JSON.stringify.apply(
        null,
        1 < args.length && !isNaN(args[0])
            ? [args[1], null, args[0]]
            : [args[0], null, 2]
    );
```