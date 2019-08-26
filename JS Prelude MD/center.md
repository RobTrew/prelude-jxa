```js
// Size of space -> filler Char -> String -> Centered String
```

```js
// center :: Int -> Char -> String -> String
const center = n => c => s => {
  const
    qr = quotRem(n - s.length)(2),
    q = qr[0];
  return replicateString(q)(c) +
    s + replicateString(q + qr[1])(c);
};
```