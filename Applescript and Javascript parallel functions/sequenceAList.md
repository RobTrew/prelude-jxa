```applescript
-- sequenceAList :: Applicative f => [f a] -> f [a]
on sequenceAList(us)
    script |id|
        on |λ|(x)
            x
        end |λ|
    end script
    traverseList(|id|, us)
end sequenceAList
```

```js
// sequenceAList :: Applicative f => [f a] -> f [a]
const sequenceAList = xs =>
    traverseList(x => x, xs);
```