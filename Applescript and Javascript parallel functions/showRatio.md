```js
-- showRatio :: Ratio -> Stringon showRatio(r)	(n of r as string) & "/" & (d of r as string)end showRatio
```

```js
// showRatio :: Ratio -> String
const showRatio = nd =>
    nd.n.toString() + '/' + nd.d.toString();
```