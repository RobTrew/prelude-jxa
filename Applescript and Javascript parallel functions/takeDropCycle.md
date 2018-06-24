```applescript
-- take N Members of an infinite cycle of xs, starting from index I
```

```applescript
-- takeDropCycle :: Int -> [a] -> [a]
on takeDropCycle(n, i, xs)
    set lng to length of xs
    set m to n + i
    
    if lng ≥ m then
        set ys to xs
    else
        set ys to concat(replicate(ceiling(m / lng), xs))
    end if
    
    drop(i, take(m, ys))
end takeDropCycle
```

```js
// take N Members of an infinite cycle of xs, starting from index I
```

```js
// takeDropCycle :: Int -> [a] -> [a]
const takeDropCycle = (n, i, xs) => {
    const
        lng = xs.length,
        m = n + i;
    return drop(i,
        take(m,
            (lng >= m ? xs : concat(replicate(Math.ceil(m / lng), xs)))
        )
    );
};
```