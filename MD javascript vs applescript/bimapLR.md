```applescript
-- bimapLR :: (a -> b) -> (c -> d) -> ֵEither ֵֵa c -> Either b d
on bimapLR(f, g)
    script go
        on |λ|(e)
            if missing value is |Left| of e then
                tell mReturn(g) to |Right|(|λ|(|Right| of e))
            else
                tell mReturn(f) to |Left|(|λ|(|Left| of e))
            end if
        end |λ|
    end script
end bimapLR
```


```javascript
// bimapLR :: (a -> b) -> (c -> d) -> ֵEither ֵֵa c -> Either b d
const bimapLR = f =>
    // Instance of bimap for Either values.
    // Either the application of f to a Left value,
    // or the application of g to a Right value.
    g => lr => lr.Left
        ? Left(f(lr.Left))
        : Right(g(lr.Right));
```