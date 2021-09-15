```applescript
-- subsets :: [a] -> [[a]]
on subsets(xs)
    script go
        on |λ|(ys)
            if 0 < length of ys then
                set h to item 1 of ys
                set zs to |λ|(rest of ys)
                script hcons
                    on |λ|(z)
                        {h} & z
                    end |λ|
                end script
                zs & map(hcons, zs)
            else
                {{}}
            end if
        end |λ|
    end script
    go's |λ|(xs)
end subsets
```


```javascript
// subsets :: [a] -> [[a]]
const subsets = xs => {
    const go = ys =>
        0 < ys.length ? (() => {
            const
                h = ys[0],
                zs = go(ys.slice(1));

            return zs.concat(
                zs.map(z => [h].concat(z))
            );
        })() : [
            []
        ];

    return go(xs);
};
```