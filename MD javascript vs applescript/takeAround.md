```javascript
// takeAround :: (a -> Bool) -> [a] -> [a]
const takeAround = p => xs => {
    const ys = takeWhile(p)(xs);
    return ys.length < xs.length ? (
        ys.concat(takeWhileR(p)(xs))
    ) : ys;
};
```


```applescript
-- takeAround :: (a -> Bool) -> [a] -> [a]
on takeAround(p, xs)
    set ys to takeWhile(p, xs)
    if length of ys < length of xs then
        ys & takeWhileR(p, xs)
    else
        ys
    end if
end takeAround
```