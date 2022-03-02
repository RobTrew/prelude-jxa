```javascript
// constant :: a -> b -> a
const constant = k =>
    () => k;
```


```applescript
-- constant :: a -> b -> a
on |constant|(k)
    script
        on |λ|(_)
            k
        end |λ|
    end script
end |constant|
```