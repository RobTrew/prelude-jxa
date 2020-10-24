```applescript
-- showHex :: Int -> String
on showHex(n)
    showIntAtBase(16, mReturn(intToDigit), n, "")
end showHex
```


```javascript
// showHex :: Int -> String
const showHex = n =>
    showIntAtBase(16)(
        intToDigit
    )(n)('');
```