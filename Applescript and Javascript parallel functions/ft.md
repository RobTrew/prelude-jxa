```applescript
-- Abbreviation for quick testing
```

```applescript
-- ft :: Enum a => a -> a -> [a]
on ft(m, n)
    enumFromTo(m, n)
end ft
```

```js
// Abbreviation for quick testing
// enumFromTo by default, enumFromThenTo if 3 args
```

```js
// ft :: Enum a => a -> a -> [a]
function ft() {
    const args = Array.from(arguments);
    return (
        2 < args.length ? (
            enumFromThenTo
        ) : enumFromTo
    ).apply(null, args);
};
```