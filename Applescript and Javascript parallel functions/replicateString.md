```applescript
-- replicateString :: Int -> String -> String
on replicateString(n, s)
    set out to ""
    if n < 1 then return out
    set dbl to s
 
    repeat while (n > 1)
        if (n mod 2) > 0 then set out to out & dbl
        set n to (n div 2)
        set dbl to (dbl & dbl)
    end repeat
    return out & dbl
end replicateS
```

```js
// replicateString :: Int -> String -> String
const replicateString = (n, s) => s.repeat(n);
```