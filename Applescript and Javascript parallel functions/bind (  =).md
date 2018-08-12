```applescript
-- bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
on bind(m, mf)
    set c to class of m
    if list = c then
        bindList(m, mf)
    else if record = c then
        set ks to keys(m)
        if ks contains "type" then
            set t to type of m
            if "Maybe" = t then
                bindMay(m, mf)
            else if "Either" = t then
                bindLR(m, mf)
            else if "Tuple" = t then
                bindTuple(m, mf)
            else
                missing value
            end if
        else
            missing value
        end if
    else if handler is c or script is c then
        bindFn(m, mf)
    else
        missing value
    end if
end bind
```

```js
// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = (m, mf) =>
    (Array.isArray(m) ? (
        bindList
    ) : (() => {
        const t = m.type;
        return 'Either' === t ? (
            bindLR
        ) : 'Maybe' === t ? (
            bindMay
        ) : 'Tuple' === t ? (
            bindTuple
        ) : ('function' === typeof m) ? (
            bindFn
        ) : undefined;
    })()(m, mf));
```