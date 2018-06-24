```applescript
-- dropWhile :: (a -> Bool) -> [a] -> [a]
on dropWhile(p, xs)
    set lng to length of xs
    set i to 1
    tell mReturn(p)
        repeat while i ≤ lng and |λ|(item i of xs)
            set i to i + 1
        end repeat
    end tell
    if i ≤ lng then
        if class of xs ≠ string then
            items i thru lng of xs
        else
            text i thru lng of xs
        end if
    else
        {}
    end if
end dropWhile
```

```js
// dropWhile :: (a -> Bool) -> [a] -> [a]
const dropWhile = (p, xs) => {
  let i = 0;
  for (let lng = xs.length;
    (i < lng) && p(xs[i]); i++) {}
  return xs.slice(i);
};
```