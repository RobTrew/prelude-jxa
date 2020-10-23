```applescript
-- Tuple3 (,,) :: a -> b -> c -> (a, b, c)
on Tuple3(x, y, z)
    {type:"Tuple3", |1|:x, |2|:y, |3|:z, length:3}
end Tuple3
```


```javascript
// Tuple3 (,,) :: a -> b -> c -> (a, b, c)
const Tuple3 = a => b => c => ({
  type: 'Tuple3',
  '0': a,
  '1': b,
  '2': c,
  length: 3
});
```