```applescript
-- Applies wrapped functions to wrapped values, 
-- for example applying a list of functions to a list of values
-- or applying Just(f) to Just(x), Right(f) to Right(x), etc
```

```applescript
-- ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
on ap(mf, mx)
    if class of mx is list then
        apList(mf, mx)
    else if record is class of mf and ¬
        keys(mf) contains "type" then
        set t to type of mf
        if "Either" = t then
            apLR(mf, mx)
        else if "Maybe" = t then
            apMay(mf, mx)
        else if "Node" = t then
            apTree(mf, mx)
        else if "Tuple" = t then
            apTuple(mf, mx)
        else
            missing value
        end if
    end if
end ap
```

```js
// Applies wrapped functions to wrapped values, 
// for example applying a list of functions to a list of values
// or applying Just(f) to Just(x), Right(f) to Right(x), etc
```

```js
// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = (mf, mx) => {
    const t = mx.type;
    return (
        undefined !== t ? (
            'Either' === t ? (
                apLR
            ) : 'Maybe' === t ? (
                apMay
            ) : 'Node' === t ? (
                apTree
            ) : 'Tuple' === t ? (
                apTuple
            ) : apList
        ) : apList
    )(mf, mx);
};
```