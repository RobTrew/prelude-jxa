```javascript
// nub :: [a] -> [a]
const nub = xs =>
  nubBy(eq)(xs);
```


```applescript
-- nub :: [a] -> [a]
on nub(xs)
    nubBy(eq, xs)
end nub
```