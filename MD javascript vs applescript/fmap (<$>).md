```applescript
-- fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
on fmap(f, fa)
    set c to class of fa
    if c is record and keys(fa) contains "type" then
        set t to |type| of fa
        if "Either" = t then
            set fm to my fmapLR
        else if "Maybe" = t then
            set fm to my fmapMay
        else if "Node" = t then
            set fm to my fmapTree
        else if "Tuple" = t then
            set fm to my fmapTuple
        else
            set fm to my map
        end if
        |λ|(f, fa) of mReturn(fm)
    else if c is text then
        map(f, characters of fa)
    else if c is list then
        map(f, fa)
    else
        missing value
    end if
end fmap
```


```javascript
// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = f => fa =>
    Array.isArray(fa) ? (
        fa.map(f)
    ) : 'string' !== typeof fa ? (() => {
        const t = fa.type;
        return ('Either' === t ? (
            fmapLR(f)(fa)
        ) : 'Maybe' === t ? (
            fmapMay(f)(fa)
        ) : 'Node' === t ? (
            fmapTree(f)(fa)
        ) : 'Tuple' === t ? (
            fmapTuple(f)(fa)
        ) : undefined);
    })() : fa.split('').map(f);
```