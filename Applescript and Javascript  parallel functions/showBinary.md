```applescript
-- showBinary :: Int -> String
on showBinary(n)
    script binaryChar
        on |λ|(n)
            text item (n + 1) of "01"
        end |λ|
    end script
    showIntAtBase(2, binaryChar, n, "")
end showBin
```

```js
// showBinary :: Int -> String
const showBinary = n => {
    const binaryChar = n => n !== 0 ? '1' : '0';
    return showIntAtBase(2, binaryChar, n, '');
};
```