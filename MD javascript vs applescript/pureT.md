```applescript
-- Given a type name string, returns a 
-- specialised 'pure', where
-- 'pure' lifts a value into a particular functor.
-- pureT :: String -> f a -> (a -> f a)
on pureT(t, x)
    if "List" = t then
        pureList(x)
    else if "Either" = t then
        pureLR(x)
    else if "Maybe" = t then
        pureMay(x)
    else if "Node" = t then
        pureTree(x)
    else if "Tuple" = t then
        pureTuple(x)
    else
        pureList(x)
    end if
end pureT
```


```javascript
// pureT :: String -> f a -> (a -> f a)
const pureT = t =>
    // Given a type name string, returns a 
    // specialised 'pure', where
    // 'pure' lifts a value into a particular functor.
    ({
        'Either': () => pureLR,
        'Maybe': () => pureMay,
        'Node': () => pureTree,
        'Tuple': () => pureTuple,
        'List': () => pureList
    })[t || 'List']();
```