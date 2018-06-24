```applescript
-- pureT :: f a -> (a -> f a)
on pureT(x)
    if class of x is record and keys(x) contains "type" then
        set t to type of x
        if t = "Either" then
            pureLR
        else if t = "Maybe" then
            pureMay
        else if t = "Tree" then
            pureTree
        else if t = "Tuple" then
            pureTuple
        else
            pureList
        end if
    else
        pureList
    end if
end pureT
```

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