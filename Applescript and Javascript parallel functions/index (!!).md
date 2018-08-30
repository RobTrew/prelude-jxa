```applescript
-- index (!!) :: [a] -> Int -> a
-- index (!!) :: String -> Int -> Char
on |index|(xs, i)
    item i of xs
end |index|
```

```js
// index (!!) :: [a] -> Int -> a
// index (!!) :: String -> Int -> Char
const index = (xs, i) => xs[i];
```