```applescript
-- drop :: Int -> [a] -> [a]
-- drop :: Int -> String -> String
on drop(n, xs)
    if class of xs is not string then
        if n < length of xs then
            items (1 + n) thru -1 of xs
        else
            {}
        end if
    else
        if n < length of xs then
            text (1 + n) thru -1 of xs
        else
            ""
        end if
    end if
end drop
```

```js
// drop :: Int -> [a] -> [a]
// drop :: Int -> String -> String
const drop = (n, xs) => xs.slice(n);
```