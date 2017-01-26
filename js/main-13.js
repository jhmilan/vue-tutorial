/**
 * Remember JS classes are part of EcmaScript2015 review browser compatibility
 * You will probably want to use a webpack/npm/babel combo in your real projects
 * to ensure ES5 compatibility.
 * 
 * https://leanpub.com/setting-up-es6/read#sec_webpack-babel
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 */
window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire (event, data = null) {
        this.vue.$emit(event, data);
    }

    listen (event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
    template: `
        <input placehoder="Enter your code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            Event.fire('coupon-was-applied');
        }
    } 
});

var app = new Vue({
    el: '#root',
    
    data: {
        couponApplied: false
    },
    created() {
        Event.listen('coupon-was-applied', () => alert('Handling it!'));
    }
});