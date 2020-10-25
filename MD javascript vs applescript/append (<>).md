```applescript
-- append (<>) :: [a] -> [a] -> [a]
-- append (<>) :: String -> String -> String
on append(xs, ys)
    -- Append two lists.
    xs & ys
end append
```


```javascript
// append (<>) :: [a] -> [a] -> [a]
const append = xs =>
    // A list defined by the
    // concatenation of two others.
    ys => xs.concat(ys);
```