```applescript
-- traverse :: (Applicative f, Traversable t) => (a -> f b) -> t a -> f (t b)
on traverse(f, tx)
    if class of tx is list then
        traverseList(f, tx)
    else if class of tx is record and keys(tx) contains "type" then
        set t to type of tx
        if "Either" = t then
            traverseLR(f, tx)
        else if "Maybe" = t then
            traverseMay(f, tx)
        else if "Node" = t then
            traverseTree(f, tx)
        else if "Tuple" = t then
            traverseTuple(f, tx)
        else
            missing value
        end if
    else
        missing value
    end if
end traverse
```


```javascript
// traverse :: (Applicative f, Traversable t) => 
// (a -> f b) -> t a -> f (t b)
const traverse = f =>
    // Each element of a structure mapped to an 
    // a functor-wrapped value, with evaluation from
    // from left to right, and the results collected
    // in a single instance of the target functor.
    tx => ({
        'Either': () => traverseLR,
        'Maybe': () => traverseMay,
        'Node': () => traverseTree,
        'Tuple': () => traverseTuple,
        'List': () => traverseList
    })[tx.type || 'List']()(f)(tx);
```