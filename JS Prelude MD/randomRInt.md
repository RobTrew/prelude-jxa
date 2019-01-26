```js
-- e.g. map(randomRInt(1, 10), ft(1, 20))
```

```js
// randomRInt :: Int -> Int -> IO () -> Int 
const randomRInt = (low, high) => () =>
    low + Math.floor(
        (Math.random() * ((high - low) + 1))
    );
```