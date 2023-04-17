const {
  deepEntries,
  deeplyEquals,
  flat,
} = require("../sections/4-recursion.js");

describe('deepEntries tests', () => {
    test('Returns an array', () => {
      //Arrange
      const input = {};
      const expectedOutput = [];
      //Act
      const output = deepEntries(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('When passed one non-nested object with a single key-value pair, it returns a nested array containing the key-value pair', () => {
      //Arrange
      const input = { name: "Sam" };
      const expectedOutput = [['name', "Sam"]];
      //Act
      const output = deepEntries(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('When passed one non-nested object with mutliple key-value pair, it returns a nested array containing the key-value pairs', () => {
      //Arrange
      const input = {
        name: "Sam", 
        favBook: "Blood Meridian"
      };
      const expectedOutput = [
        ['name', "Sam"], 
        ['favBook', 'Blood Meridian']
      ];
      //Act
      const output = deepEntries(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('When passed one one layer nested object with mutliple key-value pairs, it returns a nested array containing the key-value pairs nested as deeply as the original object', () => {
      //Arrange
      const input = {
        name: "Sam", 
        favBook: "Blood Meridian",
        pets: {
          name: 'Charlie',
        }
      };
      const expectedOutput = [
        ['name', "Sam"], 
        ['favBook', 'Blood Meridian'],
        ['pets', [['name', 'Charlie']]]
      ];
      //Act
      const output = deepEntries(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('When passed one multi-layered nested object with mutliple key-value pairs, it returns a nested array containing the key-value pairs nested as deeply as the original object', () => {
      //Arrange
      const input = {
        name: "Sam",
        favBook: { 
          title: "Blood Meridian", 
          author: { 
            name: "Cormac McCarthy" 
          } 
        },
        pets: {
          name: 'Charlie',
        }
      };
      const expectedOutput = [
        ["name","Sam"],
        ["favBook", [
          ["title","Blood Meridian"],
          ["author", [
            ["name","Cormac McCarthy"]
          ]]]],
        ['pets', [
          ['name', 'Charlie']
        ]]];
      //Act
      const output = deepEntries(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
  });

  describe('deeplyEquals tests', () => {
    test('returns a boolean value', () => {
      //Assert
      expect(deeplyEquals()).toBe(false);
    });
    test('returns true if passed two values that are equal', () => {
      //Assert
      expect(deeplyEquals(1, 1)).toBe(true);
    });
    test('returns false if passed two values that are not equal', () => {
      //Assert
      expect(deeplyEquals(1, 2)).toBe(false);
    });
    test('When passed an array, it will evaluate the contents of the array', () => {
      //Assert
      expect(deeplyEquals([1], [1])).toBe(true);
    });
    test('When passed an object, it will evaluate the contents of the object', () => {
      //Assert
      expect(deeplyEquals({1: 1}, {1: 1})).toBe(true);
    });
    test('When passed a multi-layered array, it will evaluate the contents of all of the layers of the array', () => {
      //Assert
      expect(deeplyEquals([1, [2, [3]]], [1, [2, [3]]])).toBe(true);
    });
    test('When passed a multi-layered object, it will evaluate the contents of all of the layers of the object', () => {
      //Assert
      expect(deeplyEquals({1: {2: {3: 3}}}, {1: {2: {3: 3}}})).toBe(true);
    });
    test('When passed a multi-type array/object, it will evaluate the contents of all of the layers of the arrays/objects', () => {
      //Assert
      expect(deeplyEquals([ 'Numbers', {1: {2: {3: 3}}}, [4, [5]]], [ 'Numbers', {1: {2: {3: 3}}}, [4, [5]]])).toBe(true);
    });
  });

  //The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
      //const arr1 = [0, 1, 2, [3, 4]];
      // console.log(arr1.flat());
      //    Expected output: Array [0, 1, 2, 3, 4]

      // const arr2 = [0, 1, 2, [[[3, 4]]]]
      // console.log(arr2.flat(2));
      //    Expected output: Array [0, 1, 2, Array [3, 4]]

  describe('flat tests', () => {
    test('Returns an array', () => {
      //Arrange
      const input = [];
      const expectedOutput = [];
      //Act
      const output = flat(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('Returns a new array', () => {
      //Arrange
      const input = [];
      //Act
      const output = flat(input);
      //Assert
      expect(output).not.toBe(input);
    });
    test('Returns an array with the sub-array concatenated into it, if passed an array with one level of nesting', () => {
      //Arrange
      const input = [0, 1, [2, 3,], 4];
      const expectedOutput = [0, 1, 2, 3, 4];
      //Act
      const output = flat(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('Returns an array with the sub-array(s) concatenated into it, if passed an array with one level of nesting, accounting for multiple one-level sub-arrays', () => {
      //Arrange
      const input = [0, 1, [2, 3,], [4, 5]];
      const expectedOutput = [0, 1, 2, 3, 4, 5];
      //Act
      const output = flat(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('If there is no argument given for depth, the flat function will default to concatenating one level deep', () => {
      //Arrange
      const input = [0, 1, [2, 3, [4, 5]]];
      const expectedOutput = [0, 1, 2, 3, [4, 5]];
      //Act
      const output = flat(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('If there is an argument for depth, the flat function will concatenate up to that depth', () => {
      //Arrange
      const input1 = [0, 1, [2, 3, [4, 5]]];
      const input2 = [0, 1, [2, 3, [4, [5, [6, 7]]]]];
      const expectedOutput1 = [0, 1, 2, 3, 4, 5];
      const expectedOutput2 = [0, 1, 2, 3, 4, [5, [6, 7]]]

      //Assert
      expect(flat(input1, 2)).toEqual(expectedOutput1);
      //Assert
      expect(flat(input2, 2)).toEqual(expectedOutput2);
    });
  });