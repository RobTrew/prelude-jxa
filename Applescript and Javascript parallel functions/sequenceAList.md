```applescript
-- sequenceAList :: Applicative f => [f a] -> f [a]
on sequenceAList(us)
    if length of us > 0 then
        script
            on |λ|(u, v)
                script cons
                    on |λ|(x)
                        script
                            on |λ|(xs)
                                {x} & xs
                            end |λ|
                        end script
                    end |λ|
                end script
                ap(fmap(cons, u), v)
            end |λ|
        end script
        foldr(result, mReturn(pureT(item 1 of us))'s |λ|({}), us)
    else
        us
    end if
end sequenceAList
```

```js
// sequenceAList :: Applicative f => [f a] -> f [a]
const sequenceAList = us =>
    us.length > 0 ? (
        us.reduceRight(
            (v, u) => ap(fmap(x => xs => [x, ...xs], u), v),
            pureT(us[0])([])
        )
    ) : us;
```