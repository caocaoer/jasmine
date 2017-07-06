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