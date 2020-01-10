```js
// deleteKey :: String -> Dict -> Dict
const deleteKey = k =>
    // A new dictionary, without the key k.
    dct => {
        const dct2 = {...dct};
        return (delete dct2[k], dct2);
    };
```