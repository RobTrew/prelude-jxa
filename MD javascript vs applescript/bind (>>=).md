```javascript
// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = m =>
    // Two computations sequentially composed,
    // with any value produced by the first
    // passed as an argument to the second.
    mf => Array.isArray(m) ? (
        bindList(m)(mf)
    ) : (
        ({
            'Either': () => bindLR,
            'Maybe': () => bindMay,
            'Tuple': () => bindTuple,
            'function': () => bindFn
        })[m.type || typeof m]()(m)(mf)
    );
```


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