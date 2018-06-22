(() => {
    'use strict';

    // main :: IO ()
    const main = () => {
        const
            uuidPrelude = '81A78C99-B16A-492F-B963-ACED8BB3A487',
            strJSPreludePath =
            `~/Quiver/Quiver.qvlibrary/${uuidPrelude}.qvnotebook`;

        // partitionedBookNotes :: (Dict -> Bool) -> PathString
        //                          -> Maybe String -> [(String, String)]
        const partitionedBookNotes = (p, strFolderPath) => {
            const
                tpl = partition(
                    tpl => p(tpl[1]),
                    concatMap(
                        x => {
                            const fpNote = `${strFolderPath}/${x}/`;
                            return doesFileExist(
                                fpNote + 'content.json'
                            ) ? [
                                Tuple(
                                    ...map(
                                        k => JSON.parse(
                                            readFile(`${fpNote}${k}.json`)
                                        ), ['content', 'meta']
                                    )
                                )
                            ] : [];
                        },
                        listDirectory(strFolderPath)
                    )
                );
            return map(
                xs => map(
                    dct => unlines(
                        map(x => x.data,
                            dct.cells
                        )
                    ),
                    sortBy(
                        comparing(x => x.title),
                        map(fst, xs)
                    )
                ), [tpl[0], tpl[1]]
            );
        };

        // listings :: (String, String)
        const [strSystem, strPrelude] = zipWith(
            (k, strFns) => '// ' + k + '\n\n' + strFns, [
                'JXA SYSTEMIO GENERIC FUNCTIONS',
                'JS PRELUDE – GENERIC FUNCTIONS'
            ],
            map(
                xs => xs.join('\n\n'),
                doesPathExist(
                    strJSPreludePath
                ) ? partitionedBookNotes(
                    dctMeta => elem('jxa', dctMeta.tags),
                    strJSPreludePath
                ) : [
                    [],
                    []
                ]
            )
        );

        return (
            writeFile('~/Preludes/jxaSystemIO.js', strSystem),
            writeFile('~/Dropbox/Preludes/jxaSystemIO.js', strSystem),
            writeFile('~/Dropbox/Preludes/jsPrelude.js', strPrelude),
            writeFile('~/Preludes/jsPrelude.js', strPrelude),
            //
            writeFile('~/prelude-jxa/jxaSystemIO.js', strSystem),
            writeFile('~/prelude-jxa/jsPrelude.js', strPrelude),
            Tuple(strSystem, strPrelude)
        );
    };

    // LIBRARY IMPORT --------------------------------------

    // Evaluate a function f :: (() -> a)
    // in the context of the JS libraries whose source
    // filePaths are listed in fps :: [FilePath]

    // Evaluate a function f :: (() -> a)
    // in the context of the JS libraries whose source
    // filePaths are listed in fps :: [FilePath]
    // usingLibs :: [FilePath] -> (() -> a) -> a
    const usingLibs = (fps, f) =>
        fps.every(doesFileExist) ? (
            eval(`(() => {
                'use strict';
                ${fps.map(readFile).join('\n\n')}
                return (${f})();
            })();`)
        ) : 'Library not found at: ' + [].concat(...fps.map(
            fp => doesFileExist(fp) ? [] : [fp]
        )).join('\n');

    // doesFileExist :: FilePath -> IO Bool
    const doesFileExist = strPath => {
        const ref = Ref();
        return $.NSFileManager.defaultManager
            .fileExistsAtPathIsDirectory(
                $(strPath)
                .stringByStandardizingPath, ref
            ) && ref[0] !== 1;
    };

    // readFile :: FilePath -> IO String
    const readFile = strPath => {
        let error = $(),
            str = ObjC.unwrap(
                $.NSString.stringWithContentsOfFileEncodingError(
                    $(strPath)
                    .stringByStandardizingPath,
                    $.NSUTF8StringEncoding,
                    error
                )
            );
        return Boolean(error.code) ? (
            ObjC.unwrap(error.localizedDescription)
        ) : str;
    };

    // MAIN ------------------------------------------------
    return usingLibs(
        [
            '~/preludes/jsPrelude.js',
            '~/preludes/jxaSystemIO.js'
        ],
        main
    );
})();
