/* eslint-disable no-new-func */
(() => {
    "use strict";

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