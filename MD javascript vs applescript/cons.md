```javascript
// cons :: a -> [a] -> [a]
const cons = x =>
// A list constructed from the item x,
// followed by the existing list xs.
    xs => Array.isArray(xs) ? (
        [x].concat(xs)
    ) : "GeneratorFunction" !== xs.constructor.constructor.name ? (
        x + xs
    ) : (
        function *() {
            yield x;
            let nxt = xs.next();

            while (!nxt.done) {
                yield nxt.value;
                nxt = xs.next();
            }
        }());
```


```applescript
-- cons :: a -> [a] -> [a]
on cons(x, xs)
    set c to class of xs
    if list is c then
        {x} & xs
    else if script is c then
        script
            property pRead : false
            on |λ|()
                if pRead then
                    |λ|() of xs
                else
                    set pRead to true
                    return x
                end if
            end |λ|
        end script
    else
        x & xs
    end if
end cons
```