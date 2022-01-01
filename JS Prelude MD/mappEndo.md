```javascript
// mappEndo (<>) :: Endo a -> Endo a -> Endo a
const mappEndo = a =>
    // mappend is defined as composition
    // for the Endo type.
    b => Endo(x => a.appEndo(b.appEndo(x)));
```