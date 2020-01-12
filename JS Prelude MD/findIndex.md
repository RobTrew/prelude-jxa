```js
// findIndex(isSpace)("hello world")
//-> {"type":"Maybe","Nothing":false,"Just":5}

// findIndex(even)([3, 5, 7, 8, 9])
//-> {"type":"Maybe","Nothing":false,"Just":3}

// findIndex(isUpper)("all lower case")
//-> {"type":"Maybe","Nothing":true}
```

```js
// findIndex :: (a -> Bool) -> [a] -> Maybe Int
const findIndex = p =>
    //  Just the index of the first element in
    //  xs for which p(x) is true, or 
    //  Nothing if there is no such element.
    xs => {
        const
            i = (
                'string' !== typeof xs ? (
                    xs
                ) : xs.split('')
            ).findIndex(p);
        return -1 !== i ? (
            Just(i)
        ) : Nothing();
    };
```