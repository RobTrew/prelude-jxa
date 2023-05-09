```javascript
// replicate :: Int -> a -> [a]
const replicate = n =>
    // A list of n copies of x.
    x => Array.from({
        length: n
    }, () => x);
```


```applescript
-- Egyptian multiplication - progressively doubling a list, appending
-- stages of doubling to an accumulator where needed for binary 
-- assembly of a target length
-- replicate :: Int -> String -> String
on replicate(n, s)
    -- Egyptian multiplication - progressively doubling a list, 
    -- appending stages of doubling to an accumulator where needed 
    -- for binary assembly of a target length
    script p
        on |λ|({n})
            n ≤ 1
        end |λ|
    end script
    
    script f
        on |λ|({n, dbl, out})
            if (n mod 2) > 0 then
                set d to out & dbl
            else
                set d to out
            end if
            {n div 2, dbl & dbl, d}
        end |λ|
    end script
    
    set xs to |until|(p, f, {n, s, ""})
    item 2 of xs & item 3 of xs
end replicate
```