```applescript
-- find :: (a -> Bool) -> [a] -> Maybe aon find(p, xs)	tell mReturn(p)		set lng to length of xs		repeat with i from 1 to lng			if |λ|(item i of xs) then return Just(item i of xs)		end repeat		Nothing()	end tellend find
```

```js
// find :: (a -> Bool) -> [a] -> Maybe a
const find = (p, xs) => {
    for (let i = 0, lng = xs.length; i < lng; i++) {
        let x = xs[i];
        if (p(x)) return Just(x);
    }
    return Nothing();
};
```