```applescript
-- e.g. map(randomRInt(1, 10), ft(1, 20))
-- randomRInt :: Int -> Int -> IO () -> Int
on randomRInt(low, high)
    script
        on |λ|(_)
            (low + ((random number) * (1 + (high - low)))) div 1
        end |λ|
    end script
end randomRInt
```


```javascript
// randomRInt :: Int -> Int -> (() -> IO Int)
const randomRInt = low =>
    // The return value of randomRInt is itself
    // a function, which, whenever evaluated,
    // yields a a new pseudo-random integer
    // in the range [low..high].
    high => () => low + Math.floor(
        Math.random() * (1 + (high - low))
    );
```