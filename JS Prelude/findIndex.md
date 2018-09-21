```js
//  Takes a predicate function and a list and
//  returns Just( the 0-based index of the first
//  element ) in the list satisfying the predicate
//  or Nothing if there is no such element.
```

```js
// findIndex(isSpace, "hello world")
//-> {"type":"Maybe","Nothing":false,"Just":5}

// findIndex(even, [3, 5, 7, 8, 9])
//-> {"type":"Maybe","Nothing":false,"Just":3}

// findIndex(isUpper, "all lower case")
//-> {"type":"Maybe","Nothing":true}
```

```js
// findIndex :: (a -> Bool) -> [a] -> Maybe Int
const findIndex = (p, xs) => {
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