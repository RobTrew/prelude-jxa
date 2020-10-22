```javascript
// bindTuple (>>=) :: Monoid a => (a, a) -> (a -> (a, b)) -> (a, b)
const bindTuple = tpl =>
    f => {
        const t2 = f(tpl[1]);
        return Tuple(mappend(tpl[0])(t2[0]))(
            t2[1]
        );
    };
```