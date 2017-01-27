class Errors {
    constructor() {
        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        if (field) {
            delete this.errors[field];
            
            return;  
        }

        this.errors = {};
    }
}

class Form {
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();

        this.isLoading = false;
    }

    data() {
        let data = Object.assign({}, this);

        delete data.originalData;
        delete data.errors;

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
    }
    
    post(url) {
        this.submit('post', url);
    }

    submit(requestType, url) {
        this.isLoading = true;
        //don't forget to bind this in the promise's handlers (then/catch)
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this));
        this.isLoading = false;
    }

    onSuccess(response) {
        alert(response.data.message);
        this.errors.clear();
        this.reset();
    }

    onFail(error) {
        this.errors.record(error.response.data);
    }
}

var app = new Vue({
    el: '#app',

    data: {
        form: new Form({
            name: '',
            description: ''
        })
    },

    methods: {
        onSubmit() {
            this.form.post('/projects');
        },

        onSuccess(response) {
            form.reset();
        }
    }
});