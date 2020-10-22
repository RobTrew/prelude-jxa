```javascript
// Tuple (,) :: a -> b -> (a, b)
const Tuple = a =>
    b => ({
        type: 'Tuple',
        '0': a,
        '1': b,
        length: 2
    });
```


```applescript
-- Tuple (,) :: a -> b -> (a, b)
on Tuple(a, b)
    -- Constructor for a pair of values, possibly of two different types.
    {type:"Tuple", |1|:a, |2|:b, length:2}
end Tuple
```