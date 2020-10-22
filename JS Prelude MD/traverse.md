```javascript
// traverse :: (Applicative f, Traversable t) => 
// (a -> f b) -> t a -> f (t b)
const traverse = f => tx => {
    const t = tx.type;
    return (
        undefined !== t ? (
            'Either' === t ? (
                traverseLR
            ) : 'Maybe' === t ? (
                traverseMay
            ) : 'Node' === t ? (
                traverseTree
            ) : 'Tuple' === t ? (
                traverseTuple
            ) : traverseList
        ) : traverseList
    )(f)(tx);
};
```