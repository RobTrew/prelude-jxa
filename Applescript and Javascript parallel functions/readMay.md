```applescript
-- readMay :: Read a => String -> Maybe a
on readMay(s)
    try
      Just(run script s)
    on error e
        Nothing()
    end try
end readMay
```

```js
// readMay :: Read a => String -> Maybe a
const readMay = s => {
    try {
        return Just(JSON.parse(s))
    } catch (e) {
        return Nothing();
    };
};
```