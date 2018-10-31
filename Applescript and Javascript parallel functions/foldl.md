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

-- or

-- foldl :: (a -> b -> a) -> a -> [b] -> a
-- on foldl(f, startValue, xs)
--     script go
--         property mf : mReturn(f)'s |λ|
--         on |λ|(a, xs)
--             if {} ≠ xs then
--                 |λ|(mf(a, item 1 of xs), rest of xs)
--             else
--                 a
--             end if
--         end |λ|
--     end script
--     go's |λ|(startValue, xs)
-- end foldl
```

```js
// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = (f, a, xs) => xs.reduce(f, a);
```