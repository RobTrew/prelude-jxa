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
// Abbreviation of showJSON for quick testing.
// Default indent size is two, which can be
// overriden by any integer supplied as the
// first argument of more than one.
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