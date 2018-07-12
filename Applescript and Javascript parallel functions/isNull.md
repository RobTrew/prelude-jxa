```applescript
-- isNull :: [a] -> Bool
-- isNull :: String -> Bool
on isNull(xs)
    if class of xs is string then
        "" = xs
    else
        {} = xs
    end if
end isNull
```

```js
// isNull :: [a] -> Bool
// isNull :: String -> Bool
const isNull = xs =>
    Array.isArray(xs) || ('string' === typeof xs) ? (
        1 > xs.length
    ) : undefined;
```