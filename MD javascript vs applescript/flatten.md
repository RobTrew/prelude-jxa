```javascript
// flatten :: NestedList a -> [a]
const flatten = nest =>
    nest.flat(Infinity);
```


```applescript
-- flatten :: NestedList a -> [a]
on flatten(t)
    -- A flat list derived from a nested list.
    if list is class of t then
        concatMap(my flatten, t)
    else
        t
    end if
end flatten
```