Vue.component('coupon', {
    template: `
        <input placehoder="Enter your code" @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {
            //alert('applied!');
            this.$emit('coupon-was-applied');
        }
    } 
});

var app = new Vue({
    el: '#root',
    
    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied() {
            //alert('It was applied');
            this.couponApplied = true;
        }
    }
});