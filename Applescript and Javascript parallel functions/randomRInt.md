```applescript
-- e.g. map(randomRInt(1, 10), ft(1, 20))
```

```applescript
-- randomRInt :: Int -> Int -> IO () -> Int
on randomRInt(low, high)
    script
        on |λ|(_)
            (low + ((random number) * (1 + (high - low)))) div 1
        end |λ|
    end script
end randomRInt
```

```js
// e.g. map(randomRInt(1, 10), ft(1, 20))
```

```js
// randomRInt :: Int -> Int -> IO () -> Int
const randomRInt = (low, high) => () =>
    low + Math.floor(
        (Math.random() * ((high - low) + 1))
    );
```