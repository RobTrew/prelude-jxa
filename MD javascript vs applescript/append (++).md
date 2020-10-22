```javascript
// append (++) :: [a] -> [a] -> [a]
const append = xs =>
    // A list defined by the
    // concatenation of two others.
    ys => xs.concat(ys);
```


```applescript
-- Append two lists.
-- append (++) :: [a] -> [a] -> [a]
-- append (++) :: String -> String -> String
on append(xs, ys)
    xs & ys
end append
```