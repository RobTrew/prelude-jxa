(() => {
    "use strict";

    // main :: IO ()
    const main = () => {

        const inner = () =>
            sj(
                elemAtMay(3)({
                    alpha: 1,
                    beta: 2,
                    gamma: 3,
                    zeta: 4,
                    delta: 5,
                    epsilon: 6
                })
            );

        // elemAtMay :: Int -> Dict -> Maybe (String, a)
        // elemAtMay :: Int -> [a] -> Maybe a
        const elemAtMay = i =>
            // Just the item at the indexed position in an array,
            // or in the lexically sorted key-values of a dict,
            // or Nothing, if the index is out of range.
            obj => {
                const
                    vs = Array.isArray(obj) ? (
                        obj
                    ) : Object.entries(obj).sort(
                        (a, b) => b[0].localeCompare(a[0])
                    );

                return (0 <= i) && (i < vs.length) ? (
                    Just(vs[i])
                ) : Nothing();
            };

        return inner();
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