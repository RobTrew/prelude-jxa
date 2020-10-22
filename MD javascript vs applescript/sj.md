```javascript
// sj :: a -> String
function sj() {
    // Abbreviation of showJSON for quick testing.
    // Default indent size is two, which can be
    // overriden by any integer supplied as the
    // first argument of more than one.
    const args = Array.from(arguments);
    return JSON.stringify.apply(
        null,
        1 < args.length && !isNaN(args[0]) ? [
            args[1], null, args[0]
        ] : [args[0], null, 2]
    );
}
```


```applescript
-- Abbreviation for quick testing
-- sj :: a -> String
on sj(x)
    showJSON(x)
end sj
```