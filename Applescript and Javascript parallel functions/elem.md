```applescript
-- elem :: Eq a => a -> [a] -> Bool
on elem(x, xs)
    considering case
        xs contains x
    end considering
end elem
```

```js
// elem :: Eq a => a -> [a] -> Bool
const elem = (x, xs) => xs.some(eq(x))

// OR for primitive data types:
// xs.includes(x)
```