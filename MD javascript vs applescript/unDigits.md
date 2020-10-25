```applescript
-- unDigits :: [Int] -> Int
on unDigits(ds)
    -- The integer with the given digits.
    script go
        on |λ|(a, x)
            10 * a + x
        end |λ|
    end script
    foldl(go, 0, ds)
end unDigits
```


```javascript
// unDigits :: [Int] -> Int
const unDigits = ds =>
    // The integer with the given digits.
    ds.reduce((a, x) => 10 * a + x, 0);
```