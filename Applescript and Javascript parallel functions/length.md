```applescript
-- length :: [a] -> Int
on |length|(xs)
    length of xs
end |length|
```

```js
// Returns Infinity over objects without finite length
// this enables zip and zipWith to choose the shorter
// argument when one non-finite like cycle, repeat etc
```

```js
// length :: [a] -> Int
const length = xs => xs.length || Infinity;
```