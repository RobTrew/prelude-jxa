```javascript
// Endo :: (a -> a) -> Endo a
const Endo = f =>
    // An endofunction lifted into an Endo object.
    // A wrapper around an (a -> a) function, used as
    // the monoid of endomorphisms under composition.
    ({
        type: "Endo",
        appEndo: f
    });
```