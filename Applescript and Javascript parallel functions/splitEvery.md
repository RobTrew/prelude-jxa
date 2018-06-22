```applescript
-- splitEvery :: Int -> [a] -> [[a]]on splitEvery(n, xs)	if length of xs ≤ n then		{xs}	else		set grp_t to splitAt(n, xs)		{|1| of grp_t} & splitEvery(n, |2| of grp_t)	end ifend splitEvery
```

```js
// splitEvery :: Int -> [a] -> [[a]]
const splitEvery = (n, xs) => {
    if (xs.length <= n) return [xs];
    const [h, t] = [xs.slice(0, n), xs.slice(n)];
    return [h].concat(splitEvery(n, t));
};
```