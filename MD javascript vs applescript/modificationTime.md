```applescript
-- modificationTime :: FilePath -> Either String Date
on modificationTime(fp)
    script fs
        on |λ|(rec)
            |Right|(NSFileModificationDate of rec)
        end |λ|
    end script
    bindLR(my fileStatus(fp), fs)
end modificationTime
```


```javascript
// modificationTime :: FilePath -> Either String Date
const modificationTime = fp =>
    bindLR(fileStatus(fp))(
        dct => Right(ObjC.unwrap(dct.NSFileModificationDate))
    );
```