Vue.component('progress-view', {
    data() {
        return { completionRate: 0 };
    }
});

var app = new Vue({
    el: '#root'
});