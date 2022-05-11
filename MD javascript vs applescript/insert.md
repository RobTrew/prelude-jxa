```javascript
// insert :: Ord a => a -> [a] -> [a]
const insert = x =>
    xs => {
        const i = xs.findIndex(y => y >= x);

        return [
            ...xs.slice(0, i),
            x,
            ...xs.slice(i)
        ];
    };
```


```applescript
-- insert :: Ord a => a -> [a] -> [a]
on insert(x, ys)
    insertBy(my compare, x, ys)
end insert
```