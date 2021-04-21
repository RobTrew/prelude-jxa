```javascript
// add (+) :: Num a => a -> a -> a
const add = a =>
    // Curried addition.
    b => a + b;
```


```applescript
-- add (+) :: Num a => a -> a -> a
on add(a)
    -- Curried addition.
    script
        on |λ|(b)
            a + b
        end |λ|
    end script
end add
```