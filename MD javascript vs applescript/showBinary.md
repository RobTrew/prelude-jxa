```applescript
-- showBinary :: Int -> String
on showBinary(n)
    script binaryChar
        on |λ|(n)
            character id (48 + n)
        end |λ|
    end script
    
    showIntAtBase(2, binaryChar, n, "")
end showBinary
```


```javascript
// showBinary :: Int -> String
const showBinary = n => {
    const
        binaryChar = m => 0 !== m ? (
            "1"
        ) : "0";

    return showIntAtBase(2)(
        binaryChar
    )(n)("");
};
```