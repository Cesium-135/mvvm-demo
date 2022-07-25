const add = require('./index');
// MVVM = require('../js/mvvm');

// 对应js文件中export相应组件会导致mvvm.html里无法正常解析


describe('add 方法测试', () => {
    test('1 + 1 = 2', () => {
        const res = add(1, 1);
        expect(res).toBe(2);
    })

    test('1 + 2 = 3', () => {
        const res = add(1, 2);
        expect(res).toBe(3);
    })
})

describe('mvvm测试', () => {
    test('mvvm创建', () => {

        // 此处无法成功创建
        let vm = new MVVM({
            el: '#mvvm-app',
            data: {
                word: 'Hello World!'
            },
            methods: {
                sayHi: function() {
                    this.word = 'Hi, everybody!';
                }
            }
        });

    })
})