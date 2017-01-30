<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
        <div id="app">
            {{--
                1. Using Vue model is equivalent to
                <input type="text" v-model="coupon">

                2. binding value and adding input event logic
                <input type="text" :value="coupon" @input="coupon = $event.target.value">

                Using the second approach we can create custom component that autovalidates 
                input or such (see js/app.js)
            --}}
            <coupon v-model="coupon"></coupon>
        </div>
        <script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>
