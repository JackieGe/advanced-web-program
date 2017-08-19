console.log('calc1 loading begin')

function add(...args) {
    return args.reduce((currentTotal, i) => currentTotal + i, 0);
}

console.log('calc1 loading end')