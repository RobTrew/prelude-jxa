```applescript
-- unzipN :: [(a,b,...)] -> ([a],[b],...)
on unzipN(tpls)
    if 0 < length of tpls then
        set xs to replicate(length of item 1 of tpls, {})
        script go
            on |λ|(a, tpl)
                script inner
                    on |λ|(x, i)
                        x & Just of lookupDict(i as string, tpl)
                    end |λ|
                end script
                map(inner, a)
            end |λ|
        end script
        foldl(go, xs, tpls)
    else
        missing value
    end if
end unzipN
```


```javascript
// unzipN :: [(a,b,...)] -> ([a],[b],...)
const unzipN = tpls =>
    TupleN(...tpls.reduce(
        (a, tpl) => a.map(
            (x, i) => x.concat(tpl[i])
        ),
        replicate(
            0 < tpls.length ? (
                tpls[0].length
            ) : 0, []
        )
    ));
```