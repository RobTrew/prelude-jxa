```applescript
-- takeCycle :: Int -> [a] -> [a]
on takeCycle(n, xs)
    set lng to length of xs
    if lng ≥ n then
        set cycle to xs
    else
        set cycle to concat(replicate((n div lng) + 1, xs))
    end if
    
    if class of xs is string then
        items 1 thru n of cycle as string
    else
        items 1 thru n of cycle
    end if
end takeCycle
```

```js
// First n members of an infinite cycle of xs
```

```js
// takeCycle :: Int -> [a] -> [a]
const takeCycle = (n, xs) => {
  const lng = xs.length;
  return (lng >= n ? xs : concat(replicate(Math.ceil(n / lng), xs)))
  .slice(0, n)
};
```