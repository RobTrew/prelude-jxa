```applescript
-- traverseTuple :: Functor f => (t -> f b) -> (a, t) -> f (a, b)
on traverseTuple(f, tpl)
    fmap(curry(my Tuple)'s |λ|(|1| of tpl), ¬
        mReturn(f)'s |λ|(|2| of tpl))
end traverseTuple
```


```javascript
// traverseTuple :: Functor f => (t -> f b) -> (a, t) -> f (a, b)
const traverseTuple = f => tpl =>
    fmap(Tuple(tpl[0]))(
        f(tpl[1])
    );
```