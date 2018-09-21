```js
// randomRInt :: Int -> Int -> Int
const randomRInt = (low, high) =>
    low + Math.floor(
        (Math.random() * ((high - low) + 1))
    );
```