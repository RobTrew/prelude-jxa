```applescript
-- unwords :: [String] -> String
on unwords(xs)
    intercalateS(space, xs)
end unwords
```

```js
// unwords :: [String] -> String
const unwords = xs => xs.join(' ');
```