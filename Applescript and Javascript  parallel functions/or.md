```applescript
-- or :: [Bool] -> Boolon |or|(ps)	repeat with p in ps		if p then return true	end repeat	return falseend |or|
```

```js
// or :: [Bool] -> Bool
const or = xs => {
    let i = xs.length;
    while (i--)
        if (xs[i]) return true;
    return false;
};
```