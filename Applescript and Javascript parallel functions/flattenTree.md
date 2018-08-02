```applescript
-- The root elements of a tree in pre-order.
```

```applescript
-- flattenTree :: Tree a -> [a]
on flattenTree(node)
    script go
        on |λ|(x, xs)
            {root of x} & foldr(go, xs, nest of x)
        end |λ|
    end script
    go's |λ|(node, {})
end flattenTree
```

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