```javascript
// permutations :: [a] -> [[a]]
const permutations = xs => (
    ys => ys.reduceRight(
        (a, y) => a.flatMap(
            zs => Array.from({
                length: 1 + zs.length
            }, (_, i) => i)
            .map(n => zs.slice(0, n)
                .concat(y)
                .concat(zs.slice(n))
            )
        ), [[]]
    )
)(list(xs));
```


```applescript
-- permutations :: [a] -> [[a]]
on permutations(xs)
    script go
        on |λ|(x, a)
            script
                on |λ|(ys)
                    script infix
                        on |λ|(n)
                            if ys ≠ {} then
                                take(n, ys) & x & drop(n, ys)
                            else
                                {x}
                            end if
                        end |λ|
                    end script
                    map(infix, enumFromTo(0, (length of ys)))
                end |λ|
            end script
            concatMap(result, a)
        end |λ|
    end script
    foldr(go, {{}}, xs)
end permutations
```