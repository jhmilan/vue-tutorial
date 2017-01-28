class Errors {
    /**
     * Create a new Errors instance.
     */
    constructor() {
        this.errors = {};
    }

    /**
     * Determine if an error exists for a given field.
     * 
     * @param {string}
     * 
     * @return {Boolean}
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    /**
     * Determine if we have any errors.
     * 
     * @return {Boolean}
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Retrieve the error message for a field.
     * 
     * @param  {string} field
     * 
     * @return {string}
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    /**
     * Record the new errors.
     * 
     * @param  {object} errors
     */
    record(errors) {
        this.errors = errors;
    }

    /**
     * Clear one or all error fields.
     * 
     * @param  {string} field
     */
    clear(field) {
        if (field) {
            delete this.errors[field];
            
            return;  
        }

        this.errors = {};
    }
}

export default Errors;