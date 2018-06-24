```applescript
-- break :: (a -> Bool) -> [a] -> ([a], [a])
on break(p, xs)
    set bln to false
    tell mReturn(p)
        set lng to length of xs
        repeat with i from 1 to lng
            if |λ|(item i of xs) then
                set bln to true
                exit repeat
            end if
        end repeat
    end tell
    if bln then
        if i > 1 then
            Tuple(items 1 thru (i - 1) of xs, items i thru -1 of xs)
        else
            Tuple({}, xs)
        end if
    else
        Tuple(xs, {})
    end if
end break
```

```js
// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = (p, xs) => {
  for (var i = 0, lng = xs.length; (i < lng) && !p(xs[i]); i++) {};
  return Tuple(xs.slice(0, i), xs.slice(i));
};
```