```js
// pureT :: f a -> (a -> f a)
const pureT = x =>
    Array.isArray(x) ? (
        pureList
    ) : (() => {
        const t = x.type;
        return t !== undefined ? (
            t === 'Either' ? (
                pureLR
            ) : t === 'Maybe' ? (
                pureMay
            ) : t === 'Tree' ? (
                pureTree
            ) : t === 'Tuple' ? (
                pureTuple
            ) : pureList
        ) : pureList;
    })();
```