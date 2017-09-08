/* Sizzle  */
(function(window) {
    var i, support,
        Expr,
        getText,
        isXML,
        tokensize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,

        // Local document vars
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,

        // Instance-specific data.
        expando = "sizzle" + 1 * new Date(),
        pregerredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache();

    function createCache() {
        var keys = [];

        function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[(keys.shift())];
            }
            return (cache[key + " "] = value);
        }
        return
    }
})(window);