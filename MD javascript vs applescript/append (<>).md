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
    // Two lists joined into one.
    ys => xs.concat(ys);
```