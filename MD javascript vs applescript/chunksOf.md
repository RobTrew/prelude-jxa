```javascript
// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = n => {
    // xs split into sublists of length n.
    // The last sublist will be short if n
    // does not evenly divide the length of xs .
    const go = xs => {
        const chunk = xs.slice(0, n);

        return 0 < chunk.length ? (
            [chunk].concat(
                go(xs.slice(n))
            )
        ) : [];
    };

    return go;
};
```


```applescript
-- chunksOf :: Int -> [a] -> [[a]]
on chunksOf(k, xs)
    script
        on go(ys)
            set ab to splitAt(k, ys)
            set a to item 1 of ab
            if {} ≠ a then
                {a} & go(item 2 of ab)
            else
                a
            end if
        end go
    end script
    result's go(xs)
end chunksOf
```