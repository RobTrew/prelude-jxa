```applescript
-- Lift a binary function to actions.
-- e.g.
-- liftA2(mult, {1, 2, 3}, {4, 5, 6}) 
--> {4, 5, 6, 8, 10, 12, 12, 15, 18}
```

```applescript
-- liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
on liftA2(f, a, b)
    set c to class of a
    if c is list or c is text then
        liftA2List(f, a, b)
    else if c is record and keys(a) contains "type" then
        set t to type of a
        if "Either" = t then
            liftA2LR(f, a, b)
        else if "Maybe" = t then
            liftA2May(f, a, b)
        else if "Tuple" = t then
            liftA2Tuple(f, a, b)
        else if "Node" = t then
            liftA2Tree(f, a, b)
        else
            missing value
        end if
    else
        liftA2List
    end if
end liftA2
```

```js
// Lift a binary function to actions.
// liftA2 f a b = fmap f a <*> b
// const liftA2 = (f, x, y) => ap(fmap(curry(f), x), y);
```

```js
// liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
const liftA2 = (f, a, b) => {
    const t = a.type;
    return (
        undefined !== t ? (
            'Either' === t ? (
                liftA2LR
            ) : 'Maybe' === t ? (
                liftA2May
            ) : 'Tuple' === t ? (
                liftA2Tuple
            ) : 'Node' === t ? (
                liftA2Tree
            ) : liftA2List
        ) : liftA2List
    )(...[f, a, b]);
};
```