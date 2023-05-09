```javascript
// ne :: a -> a -> Bool
const ne = a =>
    b => a !== b;
```


```applescript
-- ne :: a -> a -> Bool
on ne(a)
    script
        on |λ|(b)
            a ≠ b
        end |λ|
    end script
end ne
```