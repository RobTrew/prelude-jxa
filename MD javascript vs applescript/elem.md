```javascript
// elem :: Eq a => a -> [a] -> Bool
const elem = x =>
    // True if xs contains an instance of x.
    xs => {
        const t = xs.constructor.name;

        return "Array" !== t
            ? xs["Set" !== t
                ? "includes"
                : "has"](x)
            : xs.some(eq(x));
    };
```


```applescript
-- elem :: Eq a => a -> [a] -> Bool
on elem(x, xs)
    considering case
        xs contains x
    end considering
end elem
```