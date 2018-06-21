```applescript
-- use framework "Foundation"-- use scripting additions
```

```applescript
-- newUUID :: () -> IO UUID Stringon newUUID()	current application's NSUUID's UUID's UUIDString as stringend newUUID
```

```js
// newUUID :: () -> IO UUID String
const newUUID = () =>
    ObjC.unwrap($.NSUUID.UUID.UUIDString);
```