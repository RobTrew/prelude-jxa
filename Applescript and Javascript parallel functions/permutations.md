```applescript
-- permutations :: [a] -> [[a]]
on permutations(xs)
    script firstElement
        on |λ|(x)
            script tailElements
                on |λ|(ys)
                    {{x} & ys}
                end |λ|
            end script
            
            concatMap(tailElements, permutations(|delete|(x, xs)))
        end |λ|
    end script
    
    if length of xs > 0 then
        concatMap(firstElement, xs)
    else
        {{}}
    end if
end permutations
```

```js
// permutations :: [a] -> [[a]]
const permutations = xs =>
    xs.length ? concatMap(x => concatMap(ys => [
            [x].concat(ys)
        ],
        permutations(delete_(x, xs))), xs) : [
        []
    ];
```