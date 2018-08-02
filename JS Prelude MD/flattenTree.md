```js
// The root elements of a tree in pre-order.
```

```js
// flattenTree :: Tree a -> [a]
const flattenTree = t => {
    const
      go = (xs, x) => [x.root]
      .concat(x.nest.reduceRight(go, xs));
    return go([], t);
};
```