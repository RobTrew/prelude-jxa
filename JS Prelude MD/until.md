```js
// until :: (a -> Bool) -> (a -> a) -> a -> a
const until = p => f => x => {
    let v = x;
    while (!p(v)) v = f(v);
    return v;
};
```