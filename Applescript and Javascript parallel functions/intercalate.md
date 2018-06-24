```applescript
-- intercalate :: [a] -> [[a]] -> [a]
-- intercalate :: String -> [String] -> String
on intercalate(sep, xs)
  concat(intersperse(sep, xs))
end intercalate
```

```js
// intercalate :: [a] -> [[a]] -> [a]
// intercalate :: String -> [String] -> String
const intercalate = (sep, xs) =>
    xs.length > 0 && 'string' === typeof sep &&
    'string' === typeof xs[0] ? (
        xs.join(sep)
    ) : concat(intersperse(sep, xs));
```