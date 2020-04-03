'use strict';

function emojify(name) {
    let out = `<img src="images/emojis/` + name + `.png" />`;
    return out;
}

Vue.component('swatch', {
    props: ['active', 'swatch', 'effect'],
    template: `
        <div class="grid-item">
            <div class="grid-cell--top" :style="effect(swatch)">
                <span
                    v-html="swatch.emoji"
                    :class="{ bounce: swatch == active }"
                ></span>
            </div>
        </div>
    `,
    methods: {
        corrected_color: function () {
            return {
                color:
                    this.swatch.color == '#ffffff'
                        ? '#000000'
                        : this.swatch.color,
            };
        },
    },
});

const app = new Vue({
    el: '#app',
    data: {
        active: '',
        swatches: [
            { emoji: emojify('lion'), color: '#ff691f' },
            { emoji: emojify('tiger'), color: '#fab81e' },
            { emoji: emojify('fish'), color: '#7fdbb6' },
            { emoji: emojify('frog'), color: '#19cf86' },
            { emoji: emojify('dolphin'), color: '#91d2fa' },
            { emoji: emojify('whale'), color: '#1b95e0' },
            { emoji: emojify('elephant'), color: '#abb8c2' },
            { emoji: emojify('octopus'), color: '#e81c4f' },
            { emoji: emojify('pig'), color: '#f58ea8' },
            { emoji: emojify('unicorn'), color: '#981ceb' },
            { emoji: emojify('rabbit'), color: '#ffffff' },
            { emoji: emojify('wolf'), color: '#000000' },
        ],
    },
    methods: {
        activate: () => {},
        gradient: () => {},
    },
});
