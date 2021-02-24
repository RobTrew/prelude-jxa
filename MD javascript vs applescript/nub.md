```applescript
-- nub :: [a] -> [a]
on nub(xs)
    nubBy(eq, xs)
end nub
```


```javascript
// nub :: [a] -> [a]
const nub = xs =>
  nubBy(eq)(xs);
```