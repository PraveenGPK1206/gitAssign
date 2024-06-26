const ArrayList = require('../src/ArrayList');

describe('ArrayList', () => {
    let arrayList;

    beforeEach(() => {
        arrayList = new ArrayList();
    });

    test('should add and get elements correctly', () => {
        arrayList.add(1);
        arrayList.add(2);
        expect(arrayList.get(0)).toBe(1);
        expect(arrayList.get(1)).toBe(2);
    });

    test('should throw error when accessing index out of bounds', () => {
        arrayList.add(1);
        expect(() => arrayList.get(1)).toThrow(RangeError);
        expect(() => arrayList.get(-1)).toThrow(RangeError);
    });

    test('should remove elements correctly', () => {
        arrayList.add(1);
        arrayList.add(2);
        expect(arrayList.remove(0)).toBe(1);
        expect(arrayList.size()).toBe(1);
        expect(arrayList.get(0)).toBe(2);
    });

    test('should throw error when removing index out of bounds', () => {
        arrayList.add(1);
        expect(() => arrayList.remove(1)).toThrow(RangeError);
        expect(() => arrayList.remove(-1)).toThrow(RangeError);
    });

    test('should return correct size', () => {
        expect(arrayList.size()).toBe(0);
        arrayList.add(1);
        expect(arrayList.size()).toBe(1);
        arrayList.add(2);
        expect(arrayList.size()).toBe(2);
    });

    test('should handle empty list', () => {
        expect(() => arrayList.get(0)).toThrow(RangeError);
        expect(() => arrayList.remove(0)).toThrow(RangeError);
    });

    test('should allow adding null values', () => {
        arrayList.add(null);
        expect(arrayList.get(0)).toBeNull();
    });

    test('should handle large number of elements', () => {
        for (let i = 0; i < 1000; i++) {
            arrayList.add(i);
        }
        expect(arrayList.get(999)).toBe(999);
        expect(() => arrayList.get(1000)).toThrow(RangeError);
    });
});
