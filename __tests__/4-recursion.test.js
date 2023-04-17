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