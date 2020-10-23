```applescript
-- then (>>) :: Monad m => m a -> m b -> m b
on |then|(ma, mb)
    set c to class of ma
    if c is list then
        thenList(ma, mb)
    else if c is record then
        if keys(ma) contains "Maybe" then
            thenMay(ma, mb)
        else
            thenIO(ma, mb)
        end if
    else
        thenIO(ma, mb)
    end if
end |then|
```


```javascript
// then (>>) :: Monad m => m a -> m b -> m b
const then = ma => mb =>
    (Array.isArray(ma) ? (
        thenList
    ) : isMaybe(ma) ? (
        thenMay
    ) : thenIO)(
        ...[ma, mb]
    );
```