```javascript
// bool :: a -> a -> Bool -> a
const bool = f =>
    t => p => p ? t : f;
```


```applescript
-- bool :: a -> a -> Bool -> a
on bool(ff, tf)
    -- The evaluation of either tf or ff, 
    -- depending on a boolean value.
    script
        on |λ|(bln)
            if bln then
                set e to tf
            else
                set e to ff
            end if
            set c to class of e
            if {script, handler} contains c then
                |λ|() of mReturn(e)
            else
                e
            end if
        end |λ|
    end script
end bool
```