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

```js
// permutations :: [a] -> [[a]]
const permutations = xs =>
    xs.reduceRight(
        (a, x) => a.flatMap(
            xs => Array.from({
                length: 1 + xs.length
            }, (_, i) => i)
            .map(n => xs.slice(0, n)
                .concat(x)
                .concat(xs.slice(n))
            )
        ),
        [[]]
    );
```