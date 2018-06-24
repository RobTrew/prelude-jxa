```applescript
-- mappend (<>) :: Monoid a => a -> a -> a
on mappend(a, b)
    if class of a is record and class of b is record then
        script instanceMay
            on |λ|(strType)
                set mb to lookup(strType, ¬
                    {Maybe:mappendMaybe, Ordering:mappendOrdering, Tuple:mappendTuple})
            end |λ|
        end script
        set mbi to bindMay(lookup("type", a), instanceMay)
        if Nothing of mbi then
            a & b
        else
            mReturn(Just of mbi)'s |λ|(a, b)
        end if
    else
        a & b
    end if
end mappend
```

```js
// mappend (<>) :: Monoid a => a -> a -> a
const mappend = (a, b) => {
    const t = a.type;
    return (Boolean(t) ? (
        'Maybe' === t ? (
            mappendMaybe
        ) : 'Ordering' === t ? (
            mappendOrdering
        ) : mappendTuple
    ) : append)(a, b);
};
```