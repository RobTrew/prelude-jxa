```applescript
-- foldlTree :: (b -> a -> b) -> b -> Tree a -> b
on foldlTree(f, acc, tree)
    script go
        property g : |λ| of mReturn(f)
        on |λ|(a, x)
            set xs to nest of x
            if xs ≠ {} then
                foldl(go, g(a, root of x), xs)
            else
                g(a, root of x)
            end if
        end |λ|
    end script
    |λ|(acc, tree) of go
end foldlTree
```

```js
// foldlTree :: (b -> a -> b) -> b -> Tree a -> b
const foldlTree = (f, acc, node) => {
  const go = (a, x) =>
    x.nest.reduce(go, f(a, x));
  return go(acc, node);
};
```