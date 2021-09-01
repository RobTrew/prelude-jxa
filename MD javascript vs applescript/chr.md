```applescript
-- chr :: Int -> Char
on chr(n)
    character id n
end chr
```


```javascript
// chr :: Int -> Char
const chr = x =>
    // The character at unix code-point x.
    String.fromCodePoint(x);
```