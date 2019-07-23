```applescript
-- flatten :: NestedList a -> [a]
on flatten(t)
    if list is class of t then
        concatMap(my flatten, t)
    else
        t
    end if
end flatten
```

```js
// flatten :: NestedList a -> [a]
const flatten = nest => nest.flat(Infinity);
```