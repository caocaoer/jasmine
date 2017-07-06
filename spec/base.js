describe('Frist jasmine test', function(){
    it('equal', function(){
        expect(1).toBe(1);
        expect(2 === 3).toBe(false);
        expect('a').not.toBe('b');
    });
    // toBe
    it('tobe and not tobe', function(){
        expect(true).toBe(true);
        expect(true).not.toBe(false);
    });
    // toEqual
    it('toEqual', function(){
        // 基本数据类型
        expect(1).toEqual(1);
        expect('1').toEqual('1');
        // 引用数据类型
        var obj1 = {
            name: '张三',
            age: 12
        };
        var obj2 = {
            name: '张三',
            age: 12
        };
        var obj3 = {
            name: '张三',
            age: 18
        };
        expect(obj1).toEqual(obj2);
        expect(obj1).not.toEqual(obj3);
    });
    // toMatch 使用正则表达式判断
    it('toMatch', function(){
        var exp = /^1[3|6|5|8|9]{1}$/;
        expect('13').toMatch(exp);
        var str = 'my name is Yvonne';
        expect(str).toMatch(/name/i);
        expect(str).not.toMatch(/age/i);
    });
    // toBeDefine 判断是否是defined; toBeUndefined 判断是否是undefined
    it('toBeDefined and toBeUndefined', function(){
        var name;
        expect(name).not.toBeDefined();
        expect(name).toBeUndefined();
        var obj = {
            age: 12
        };
        expect(obj.age).toBeDefined();
        expect(obj.age).not.toBeUndefined();
    });
    // toBeNull
    it('toBeNull', function(){
        var name = null;
        expect(name).toBeNull();
    });
    // toBeTruthy/toBeFalsy 判断是否能转换成bool型, 判断是否是true; toBeFalsy 判断是否能转换成bool型, 判断是否是false
    it('toBeTruthy and toBeFalsy', function(){
        var name;
        var age = 12;
        expect(name).not.toBeTruthy();
        expect(name).toBeFalsy();
        expect(true).toBeTruthy();
        expect(age).toBeTruthy();
    });
    // toContain 判断集合是否包含
    it('toContain', function(){
        var arr = ['Niya', 'Cindy', 'Yvonne'];
        var arrObj = [{
            name: 'Niya',
            age: 22
        }, {
            name: 'Cindy',
            age: 12
        }];
        var obj = {
            name: 'Niya',
            age: 22
        };
        expect(arr).toContain('Niya');
        expect(arr).not.toContain('Jine');
        expect(arrObj).toContain(obj);
    });
    // toBeLessThan 判断值类型的大小, 结果若小则为True(也可以判断字符及字符串, 以ASCII码的大小为判断依据)
    // toBeGreaterThan 判断值类型的大小, 结果若大则为True(也可以判断字符及字符串, 以ASCII码的大小为判断依据)
    // toBeCloseTo 判断数字是否相似(第二个参数为小数精度, 默认为2位)
    // toThrow 判断是否抛出异常
    it('toThrow', function(){
        var fun = function(){
            return 1 + 1;
        }
        var fun2 = function(){
            return a + b;
        }
        expect(fun).not.toThrow();
        expect(fun2).toThrow();
    });
    // toThrowError 判断是否抛出了指定的错误
    it('toThrowError', function(){
        var fun = function(){
            throw new TypeError('error');
        }
        expect(fun).toThrowError('error');
        expect(fun).not.toThrowError('sss');
        expect(fun).toThrowError(TypeError);
        expect(fun).toThrowError(TypeError, 'error');
        expect(fun).not.toThrowError(TypeError, 'errors');
    });
});

// describe('Frist jasmine test', function(){
//     it('相等', function(){
//         expect(1).toBe(1);
//         expect(2 === 3).toBe(false);
//         expect('a').not.toBe('b');
//     });

//     it('匹配', function(){
//         expect(true).toBe(true);
//     });
// });