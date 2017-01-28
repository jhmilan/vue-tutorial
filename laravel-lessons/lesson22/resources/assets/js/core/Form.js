import Errors from './Errors.js';

class Form {
    /**
     * Create a new Form instance.
     * 
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();

        this.isLoading = false;
    }

    /**
     * Fetch all relevant data for the form.
     * 
     * @return {object}
     */
    data() {
        let data = Object.assign({}, this);

        delete data.originalData;
        delete data.errors;

        return data;
    }

    /**
     * Reset the form fields
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }
    
    /**
     * Shortcut to (post) submit the form
     * 
     * @param  {string} url
     */
    post(url) {
        return this.submit('post', url);
    }

    /**
     * Submit the form
     * 
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            this.isLoading = true;
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data); 
                });
            this.isLoading = false;
        });
    }

    /**
     * Handle a successful form submission
     * 
     * @param {object} data
     */
    onSuccess(data) {
        alert(data.message);

        this.reset();
    }

    /**
     * Handle a failed form submission
     * 
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.record(errors);
    }
}

export default Form;