xdescribe('xdescribe', function(){
    it('test 1', function(){
        expect(1).toBe(1);
    });
    it('test 2', function(){
        expect(1).toBe(2);
    });
});

describe('describe', function(){
    it('test 1', function(){
        expect(1).toBe(1);
    });
    it('test 2', function(){
        expect(1).toBeTruthy(true);
    });
});