```applescript
-- nub :: [a] -> [a]
on nub(xs)
    script
        on |λ|(a, b)
            a = b
        end |λ|
    end script
    nubBy(result, xs)
end nub
```

```js
// nub :: [a] -> [a]
const nub = xs => nubBy(eq, xs);
```