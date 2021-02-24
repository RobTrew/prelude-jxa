```javascript
// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = f =>
    // f mapped over the given functor.
    x => ({
        "Either": () => fmapLR,
        "List": () => map,
        "Maybe": () => fmapMay,
        "Node": () => fmapTree,
        "String": () => map,
        "Tuple": () => fmapTuple
    })[typeName(x)]()(f)(x);
```


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