Vue.component('coupon', {
    props: ['code'],

    template: `
        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
    `, 

    data() {
        return { 
            invalids: ['ALLFREE', 'SOMETHINGELSE']
        }
    },

    methods: {
        updateCode(code) {
            //realisticly we would call ajax or so
            if (this.invalids.includes(code)) {
                alert('This coupon is no longer valid. Sorry!');

                this.$refs.input.value = code = '';
            }

            this.$emit('input', code);
        }
    }
});

new Vue({
    el: '#app',

    data: { 
        coupon: '10% OFF'
    }
});