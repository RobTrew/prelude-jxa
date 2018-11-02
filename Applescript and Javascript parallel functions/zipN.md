```applescript
-- Arbitrary number of lists to zip
-- all enclosed in an argument vector list
```

```applescript
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

```js
// zipN :: [a] -> [b] -> ... -> [(a, b ...)]
function zipN() {
    const args = Array.from(arguments);
    return 1 < args.length ? map(
        (x, i) => TupleN(...map(y => y[i], args)),
        take(
            Math.min(...map(length, args)),
            args[0]
        )
    ) : args;
}
```