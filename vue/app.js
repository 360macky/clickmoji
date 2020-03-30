'use strict';

function emojify(name) {
    let out = `<img src="emojis/` + name + `.png" />`;
    return out;
}

Vue.component('swatch', {
    props: [],
    template: ``,
    methods: {},
});

const app = new Vue({
    el: '#app',
    data: {},
    methods: {},
});
