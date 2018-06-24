```applescript
-- index (!!) :: [a] -> Int -> a
on |index|(xs, i)
    item i of xs
end |index|
```

```js
// index (!!) :: [a] -> Int -> a
const index = (xs, i) => xs[i];
```