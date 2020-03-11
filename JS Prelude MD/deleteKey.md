```js
// deleteKey :: String -> Dict -> Dict
const deleteKey = k =>
    // A new dictionary, without the key k.
    dct => {
        const dct2 = Object.assign({}, dct2);
        return (delete dct2[k], dct2);
    };
```