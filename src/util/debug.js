export const logger = {
    error: (err) => {
        if (process.env.DEBUG) console.error(err);
    },
    log: (val) => {
        if (process.env.DEBUG) console.log(val);
    },
};
