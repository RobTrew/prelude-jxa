```applescript
-- Abbreviation for quick testing
```

```applescript
-- sj :: a -> String
on sj(x)
    showJSON(x)
end sj
```

```js
// Abbreviation for quick testing - any 2nd arg interpreted as indent size
```

```js
// sj :: a -> String
function sj() {
    const args = Array.from(arguments);
    return JSON.stringify.apply(
        null,
        1 < args.length && !isNaN(args[0]) ? [
            args[1], null, args[0]
        ] : [args[0], null, 2]
    );
}
```