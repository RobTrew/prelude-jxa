```applescript
-- group :: Eq a => [a] -> [[a]]
on group(xs)
    script eq
        on |λ|(a, b)
            a = b
        end |λ|
    end script
    
    groupBy(eq, xs)
end group
```

```js
// group :: Eq a => [a] -> [[a]]
const group = xs => groupBy((a, b) => a === b, xs);
```