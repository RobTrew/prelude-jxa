```applescript
-- fileSize :: FilePath -> Either String Int
on fileSize(fp)
    script fs
        on |λ|(rec)
            |Right|(NSFileSize of rec)
        end |λ|
    end script

    bindLR(my fileStatus(fp), fs)
end fileSize
```


```javascript
// fileSize :: FilePath -> Either String Int
const fileSize = fp =>
    bindLR(fileStatus(fp))(
        dct => Right(ObjC.unwrap(dct.NSFileSize))
    );
```