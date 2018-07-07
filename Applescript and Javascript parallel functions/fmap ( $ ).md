```applescript
-- fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
on fmap(f, fa)
    set c to class of fa
    if c is record and keys(fa) contains "type" then
        set t to type of fa
        if "Either" = t then
            set fm to my fmapLR
        else if "Maybe" = t then
            set fm to my fmapMay
        else if "Tree" = t then
            set fm to my fmapTree
        else if "Tuple" = t then
            set fm to my fmapTuple
        else
            set fm to my map
        end if
        |λ|(f, fa) of mReturn(fm)
    else if c is text then
        map(f, characters of fa)
    else
        map(f, fa)
    end if
end fmap
```

```js
// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = (f, fa) =>
    Array.isArray(fa) ? (
        fa.map(f)
    ) : 'string' !== typeof fa ? (
        'Either' === t ? (
            fmapLR
        ) : 'Maybe' === t ? (
            fmapMay
        ) : 'Node' === t ? (
            fmapTree
        ) : 'Tuple' === t ? (
            fmapTuple
        ) : undefined
    )(fa) : fa.split('').map(f);
```