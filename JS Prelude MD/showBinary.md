```javascript
// showBinary :: Int -> String
const showBinary = n => {
    const
        binaryChar = n => 0 !== n ? (
            '1'
        ) : '0';
    return showIntAtBase(2)(
        binaryChar
    )(n)('');
};
```