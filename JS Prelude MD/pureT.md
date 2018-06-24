```js
// pureT :: f a -> (a -> f a)
const pureT = x =>
    Array.isArray(x) ? (
        pureList
    ) : (() => {
        const t = x.type;
        return t !== undefined ? (
            'Either' === t ? (
                pureLR
            ) :'Maybe' === t ? (
                pureMay
            ) : 'Tree' === t ? (
                pureTree
            ) : 'Tuple' === t ? (
                pureTuple
            ) : pureList
        ) : pureList;
    })();
```