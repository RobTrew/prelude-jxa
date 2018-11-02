```applescript
-- unwords :: [String] -> String
on unwords(xs)
    set {dlm, my text item delimiters} to ¬
        {my text item delimiters, space}
    set s to xs as text
    set my text item delimiters to dlm
    return s
end unwords
```

```js
// unwords :: [String] -> String
const unwords = xs => xs.join(' ');
```