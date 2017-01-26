new Vue({
    el: '#app',

    data: {
        skills: []
    },

    mounted() {
        // Make an ajax request to our server - /skills
        // Option 1: fetch() --> could be necessary add polyfills
        // for some browsers
        
        
        // Option 2: add jQuery, then $.ajax()
        
        // Option 3: axios lib (very nice and simple browser js http
        // client base on Promises: https://github.com/mzabriskie/axios)   
        axios.get('/skills').then(response => this.skills = response.data);
    }
});