/* eslint-disable no-new-func */
(() => {
    "use strict";

// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    const
        rows = args.slice(1).map(xs => Array.from(xs)),
        n = Math.min(...rows.map(x => x.length)),
        f = uncurryN(args[0]);

    return 0 < n ? (
        take(n)(rows[0]).map(
            (x, i) => f(TupleN(
                rows.flatMap(v => v[i])
            ))
        )
    ) : [];
};

// uncurryN :: Curry a b => b -> a
const uncurryN = f =>
    // A function over a tuple of values, derived from
    // a curried function of any number of arguments.
    (...args) => (
        xs => xs.slice(1).reduce(
            (a, x) => a(x),
            f(xs[0])
        )
    )([...(
        1 < args.length ? (
            args
        ) : args[0]
    )]);

    // main :: IO ()
    const main = () => {

        const inner = () =>
            zipWithN(x => y => z => `${x} -> ${y} -> ${z}`,
                enumFromToChar("P")("Z"),
                enumFromTo(0)(10),
                enumFromTo(50)(70)
            );

        return sj(inner());
    };

    // ----------------- LIBRARY IMPORT ------------------

    // Evaluate a function f :: (() -> a)
    // in the context of the JS libraries whose source
    // filePaths are listed in fps :: [FilePath]

    // Evaluate a function f :: (() -> a)
    // in the context of the JS libraries whose source
    // filePaths are listed in fps :: [FilePath]
    // usingLibs :: [FilePath] -> (() -> a) -> a
    const usingLibs = fps =>
        f => {
            const gaps = fps.filter(fp => !doesFileExist(fp));

            return 1 > gaps.length ? Function(
                `"use strict";
                    ${fps.map(readFile).join("\n\n")}
                    return (${f})();`
            )() : `Library not found at: ${gaps.join("\n")}`;
        };

    // doesFileExist :: FilePath -> IO Bool
    const doesFileExist = strPath => {
        const ref = Ref();

        return $.NSFileManager.defaultManager
            .fileExistsAtPathIsDirectory(
                $(strPath)
                .stringByStandardizingPath, ref
            ) && 1 !== ref[0];
    };

    // readFile :: FilePath -> IO String
    const readFile = fp => {
        const
            e = $(),
            ns = $.NSString.stringWithContentsOfFileEncodingError(
                $(fp).stringByStandardizingPath,
                $.NSUTF8StringEncoding,
                e
            );


        return ObjC.unwrap(
            ns.isNil() ? (
                e.localizedDescription
            ) : ns
        );
    };

    // ---------------------- MAIN -----------------------
    return usingLibs([
        "~/prelude-jxa/jsPrelude.js",
        "~/prelude-jxa/jxaSystemIO.js",
        "~/jsParserCombinators/parserCombinators.js"
    ])(main);
})();