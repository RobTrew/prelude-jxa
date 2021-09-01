```applescript
-- mul (*) :: Num a => a -> a -> a
on mul(a)
    -- Curried multiplication.
    script
        on |λ|(b)
            a * b
        end |λ|
    end script
end mul
```


```javascript
// mul (*) :: Num a => a -> a -> a
const mul = a =>
    b => a * b;
```