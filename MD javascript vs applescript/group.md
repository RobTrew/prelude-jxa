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


```javascript
// group :: [a] -> [[a]]
const group = xs =>
    // A list of lists, each containing only
    // elements equal under (===), such that the
    // concatenation of these lists is xs.
    groupBy(a => b => a === b)(xs);
```