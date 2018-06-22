```applescript
-- mapKeys :: (Key -> Key) -> IntMap a -> IntMap aon mapKeys(f, dct)	script		property g : mReturn(f)		on |λ|(kv)			set {k, v} to kv			{g's |λ|(k), v}		end |λ|	end script	map(result, zip(keys(dct), elems(dct)))end mapKeys
```

```js
// A function mapped over the keys of a record
```

```js
// mapKeys :: (Key -> Key) -> IntMap a -> IntMap a
const mapKeys = (f, dct) =>
    mapFromList(
        map(
            kv => [f(read(kv[0])), kv[1]],
            zip(keys(dct), elems(dct))
        )
    );
```