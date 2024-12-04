```javascript
// zipN :: [a] -> [b] -> ... -> [(a, b ...)]
const zipN = (...xss) =>
    0 < xss.length
        ? Array.from(
            { length: Math.min(...xss.map(xs => xs.length)) },
            (_, i) => TupleN(...xss.map(xs => xs[i]))
        )
        : [];
```


```applescript
-- Arbitrary number of lists to zip
-- all enclosed in an argument vector list
-- zipN :: [a] -> [b] -> ... -> [(a, b ...)]
on zipN(argv)
    if 1 < length of argv then
        script go
            on |λ|(x, i)
                script peers
                    on |λ|(y)
                        item i of y
                    end |λ|
                end script
                tupleFromList(map(peers, argv))
            end |λ|
        end script
        map(go, take(minimum(map(my |length|, argv)), ¬
            item 1 of argv))
    else
        argv
    end if
end zipN
```