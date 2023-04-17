function rememberMe(func) {
    const cache = {};
    return function remembered(...args) {
        if (cache.hasOwnProperty(args.toString())) {
            console.log("The answers coming from here!")
            return cache[args.toString()];
        };
        
        const result = func(...args);
        cache[args.toString()] = result;
        return result;
    };
};

module.exports = rememberMe;