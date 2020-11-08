```javascript
// traverse :: (Applicative f, Traversable t) => 
// (a -> f b) -> t a -> f (t b)
const traverse = f => tx =>
    ({
        'Either': () => traverseLR,
        'Maybe': () => traverseMay,
        'Node': () => traverseTree,
        'Tuple': () => traverseTuple,
        'List': () => traverseList
    })[tx.type || 'List']()(f)(tx);
```