```js
// Default value (v) if m.Nothing, or f(m.Just)
```

```js
// maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = (v, f, m) =>
    m.Nothing ? v : f(m.Just);
```