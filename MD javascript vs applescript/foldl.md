```javascript
// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = f => 
    a => xs => [...xs].reduce(
        (x, y) => f(x)(y),
        a
    );
```


```applescript
-- foldl :: (a -> b -> a) -> a -> [b] -> a
on foldl(f, startValue, xs)
    tell mReturn(f)
      set v to startValue
      set lng to length of xs
      repeat with i from 1 to lng
          set v to |λ|(v, item i of xs, i, xs)
      end repeat
      return v
      end tell
end foldl
```