```js
// showBinary :: Int -> String
const showBinary = n => {
    const binaryChar = n => n !== 0 ? '1' : '0';
    return showIntAtBase(2, binaryChar, n, '');
};
```