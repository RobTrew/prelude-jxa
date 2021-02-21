```applescript
-- take N Members of an infinite cycle of xs, starting from index I
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


```javascript
// takeDropCycle :: Int -> [a] -> [a]
const takeDropCycle = n =>
    // N Members of an infinite cycle of xs, starting from index I
    i => xs => drop(i)(
        take(n + i)(cycle(xs))
    );
```