```javascript
// nub :: [a] -> [a]
const nub = xs =>
  nubBy(eq)(xs);
```


```applescript
-- nub :: [a] -> [a]
on nub(xs)
    set ca to current application
    unwrap((ca's NSArray's arrayWithArray:xs)'s ¬
        valueForKeyPath:"@distinctUnionOfObjects.self") as list
end nub
```