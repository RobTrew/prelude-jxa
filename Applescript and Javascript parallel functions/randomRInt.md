```applescript
-- randomRInt :: Int -> Int -> Int
on randomRInt(low, high)
    floor(low + ((random number) * (1 + (high - low))))
end randomRInt
```

```js
// randomRInt :: Int -> Int -> Int
const randomRInt = (low, high) =>
    low + Math.floor(
        (Math.random() * ((high - low) + 1))
    );
```