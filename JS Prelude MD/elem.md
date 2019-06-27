```js
// elem :: Eq a => a -> [a] -> Bool
const elem = (x, xs) => xs.some(eq(x))

// OR for primitive data types:
// xs.includes(x)
```