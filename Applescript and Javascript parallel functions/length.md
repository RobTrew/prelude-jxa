```applescript
-- length :: [a] -> Int
on |length|(xs)
    set c to class of xs
    if list is c or string is c then
        length of xs
    else
        2 ^ 30 -- (simple proxy for non-finite)
    end if
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