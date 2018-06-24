```applescript
-- curry :: ((a, b) -> c) -> a -> b -> c
on curry(f)
    script
        on |λ|(a)
            script
                on |λ|(b)
                    |λ|(a, b) of mReturn(f)
                end |λ|
            end script
        end |λ|
    end script
end curry
```

```js
// Flexibly handles two or more arguments, applying
// the function directly if the argument array is complete,
// or recursing with a concatenation of any existing and
// newly supplied arguments, if gaps remain.
```

```js
// curry :: ((a, b) -> c) -> a -> b -> c
const curry = (f, ...args) => {
    const go = xs => xs.length >= f.length ? (
        f.apply(null, xs)
    ) : function () {
        return go(xs.concat(Array.from(arguments)));
    };
    return go(args);
};
```