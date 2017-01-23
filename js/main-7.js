Vue.component('task', {
    template: '<li><slot></slot> {{ message }}</li>',

    data() {
        return {
            message: 'Foobar'
        }
    }
});
var app = new Vue({
    el: '#root'
});