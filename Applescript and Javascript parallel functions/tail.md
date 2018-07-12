```applescript
-- tail :: [a] -> [a]
on tail(xs)
    if xs = {} then
        missing value
    else
        rest of xs
    end if
end tailDef
```

```js
// tail :: [a] -> [a]
const tail = xs => 0 < xs.length ? xs.slice(1) : [];
```