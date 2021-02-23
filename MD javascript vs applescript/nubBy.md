```javascript
// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = fEq => {
    const go = xs => 0 < xs.length ? (() => {
        const x = xs[0];

        return [x].concat(
            go(xs.slice(1)
                .filter(y => !fEq(x)(y))
            )
        );
    })() : [];

    return compose(go, list);
};
```


```applescript
-- nubBy :: (a -> a -> Bool) -> [a] -> [a]
on nubBy(f, xs)
    set g to mReturn(f)'s |λ|
    
    script notEq
        property fEq : g
        on |λ|(a)
            script
                on |λ|(b)
                    not fEq(a, b)
                end |λ|
            end script
        end |λ|
    end script
    
    script go
        on |λ|(xs)
            if (length of xs) > 1 then
                set x to item 1 of xs
                {x} & go's |λ|(filter(notEq's |λ|(x), items 2 thru -1 of xs))
            else
                xs
            end if
        end |λ|
    end script
    
    go's |λ|(xs)
end nubBy
```