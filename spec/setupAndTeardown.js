// Jasmine允许在执行测试集/测试用例的开始前/结束后做一些初始化/销毁的操作。
/**
 * Setup 
 * beforeAll 每个suite(即describe) 中所有spec(即it)运行之前运行
 * beforeEach 每个spec(即it)运行之前运行
 */
/**
 * Teardown
 * afterAll 每个suite(即describe) 中所有spec(即it)运行之后运行
 * afterEach 每个spec(即it)运行之后运行
 */
var globalCount;
describe('Setup and Teardown', function(){
    var suiteGlobalCount;
    var eachTestCount;
    beforeAll(function(){
        globalCount = 0;
        suiteGlobalCount = 0;
        eachTestCount = 0;
    });
    // afterAll(function(){
    //     globalCount = 0;
    //     suiteGlobalCount = 0;
    //     eachTestCount = 0;
    // });
    beforeEach(function(){
        globalCount ++;
        suiteGlobalCount ++;
        eachTestCount ++;
    });
    // afterEach(function(){
    //     globalCount = 0;
    //     suiteGlobalCount = 0;
    //     eachTestCount = 0;
    // });
    it('one', function(){
        expect(globalCount).toBe(1);
    });
    it('two', function(){
        expect(globalCount).toBe(2);
    });
});

describe('Setup and Teardown2222', function(){
    beforeEach(function(){
        globalCount ++;
    });
    it('three', function(){
        expect(globalCount).toBe(3);
    });
});

// this
describe('this', function(){
    beforeEach(function(){
        this.count = this.count || 0;
        this.count ++;
    });
    afterEach(function(){
        // this.count ++;
        this.count = 0; //无论是否有这行，结果是一样的，因为this指定的变量只能在每个spec的beforeEach/it/afterEach过程中传递
    });
    it('test this', function(){
        expect(this.count).toBe(1);
    });
    it('test this2', function(){
        expect(this.count).toBe(1);
    });
});