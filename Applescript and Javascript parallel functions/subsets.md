```applescript
-- subsets :: [a] -> [[a]]
on subsets(xs)
    script go
        on |λ|(ys)
            if 0 < length of ys then
                set subs to |λ|(rest of ys)
                set y to item 1 of ys
                script ycons
                    on |λ|(zs)
                        {y} & zs
                    end |λ|
                end script
                subs & map(ycons, subs)
            else
                {{}}
            end if
        end |λ|
    end script
    go's |λ|(xs)
end subsets
```

```js
// subsets :: [a] -> [[a]]
const subsets = xs => {
    const go = ys =>
        0 < ys.length ? (() => {
            const subs = go(ys.slice(1));
            return subs.concat(
                subs.map(zs => [ys[0]].concat(zs))
            );
        })() : [
            []
        ];
    return go(xs);
};
```