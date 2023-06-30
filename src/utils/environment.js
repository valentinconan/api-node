export default class Environment {
    /**
     * Get the Env value (String), the default value or undefined
     * @param {String} value
     * @param {*} defaultValue
     */
    static get(value, defaultValue) {
        if (value && process.env[value]) {
            return process.env[value];
        } else {
            return defaultValue;
        }
    };
}