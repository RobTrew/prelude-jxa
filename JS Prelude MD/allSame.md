```javascript
// allSame :: [a] -> Bool
const allSame = xs =>
    // True if xs has less than 2 items, or every item 
    // in the tail of the list is identical to the head.
    2 > xs.length || (() => {
        const [h, ...t] = xs;

        return t.every(x => h === x);
    })();
```