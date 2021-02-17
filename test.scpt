(() => {
    "use strict";

    // main :: IO ()
    const main = () => {

        const inner = () =>
            createDirectoryIfMissingLR(true)("~/Desktop/golly/gum/nxt");

        // createDirectoryIfMissingLR :: Bool -> FilePath
        // -> Either String FilePath
        const createDirectoryIfMissingLR = blnParents =>
            dirPath => {
                const fp = filePath(dirPath);

                return doesPathExist(fp) ? (
                    Right(fp)
                ) : (() => {
                    const
                        e = $(),
                        blnOK = $.NSFileManager
                        .defaultManager[
                            "createDirectoryAtPath" + (
                                "WithIntermediateDirectories"
                            ) + "AttributesError"
                        ](fp, blnParents, void 0, e);

                    return blnOK ? (
                        Right(fp)
                    ) : Left(e.localizedDescription);
                })();
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