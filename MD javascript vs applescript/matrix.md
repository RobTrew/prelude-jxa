```javascript
// matrix Int -> Int -> (Int -> Int -> a) -> [[a]]
const matrix = nRows => nCols =>
    // A matrix of a given number of columns and rows,
    // in which each value is a given function of its
    // (zero-based) column and row indices.
    f => Array.from({
        length: nRows
    }, (_, iRow) => Array.from({
        length: nCols
    }, (__, iCol) => f(iRow)(iCol)));
```


```applescript
-- matrix :: Int -> Int -> ((Int, Int) -> a) -> [[a]]on matrix(nRows, nCols, f)    -- A matrix of a given number of columns and rows,    -- in which each value is a given function of its    -- (zero-based) column and row indices.    script go        property g : mReturn(f)'s |λ|        on |λ|(iRow)            set xs to {}            repeat with iCol from 1 to nCols                set end of xs to g(iRow, iCol)            end repeat            xs        end |λ|    end script        map(go, enumFromTo(1, nRows))end matrix
```