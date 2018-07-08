```applescript
-- sequenceA :: (Applicative f, Traversable t) => t (f a) -> f (t a)
on sequenceA(tfa)
    script |id|
        on |λ|(x)
            x
        end |λ|
    end script
    traverse(|id|, tfa)
end sequenceA
```

```js
// sequenceA :: (Applicative f, Traversable t) => t (f a) -> f (t a)
const sequenceA = tfa =>
    traverse(x => x, tfa);
```