Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.description}}</task></div>',
    data() {
        return {
            tasks: [
                { description: 'Go to step 1', completed: true},
                { description: 'Go to step 2', completed: true},
                { description: 'Go to step 3', completed: false},
                { description: 'Go to step 4', completed: false},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

var app = new Vue({
    el: '#root'
});