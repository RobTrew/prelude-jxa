```applescript
-- Tuple (,) :: a -> b -> (a, b)
on Tuple(a, b)
    {type:"Tuple", |1|:a, |2|:b}
end Tuple
```

```js
// Tuple (,) :: a -> b -> (a, b)
const Tuple = (a, b) => ({
  type: 'Tuple',
  '0': a,
  '1': b,
  length: 2
});
```