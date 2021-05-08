```applescript
-- union :: [a] -> [a] -> [a]
on union(xs, ys)
    script flipDelete
        on |λ|(xs, x)
            my |delete|(x, xs)
        end |λ|
    end script
    
    set sx to nub(xs)
    sx & foldl(flipDelete, nub(ys), sx)
end union
```


```javascript
// union :: [a] -> [a] -> [a]
const union = xs => ys =>
  unionBy(a => b => a === b)(
      list(xs)
  )(list(ys));
```