```applescript
-- take :: Int -> [a] -> [a]
-- take :: Int -> String -> String
on take(n, xs)
    if class of xs is string then
        if 0 < n then
            text 1 thru min(n, length of xs) of xs
        else
            ""
        end if
    else
        if 0 < n then
            items 1 thru min(n, length of xs) of xs
        else
            {}
        end if
    end if
end take
```

```js
// take :: Int -> [a] -> [a]
// take :: Int -> String -> String
const take = (n, xs) => xs.slice(0, n);
```