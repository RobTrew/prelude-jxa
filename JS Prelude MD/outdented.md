```js
// All lines in the string outdented by the same amount
// (just enough to ensure that the least indented lines 
//  have no remaining indent)
// All relative indents are left unchanged
```

```js
// outdented :: String -> String
const outdented = s => {
    const
        rgx = /^ */, // Leading space characters.
        xs = lines(s),
        n = length(minimumBy( // size of minimum indent
            comparing(length),
            map(txt => rgx.exec(txt)[0], xs)
        ));
    return unlines(map(curry(drop)(n), xs));
};
```