const rememberMe = require('../sections/remember-me.js');

// Write a higher-order function called rememberMe, which takes a function as it's only argument.

// It should do the following:

    // It should return a new function.

    // The new function should work in exactly the same way as the old one

    // If the new function has not previously been called with those arguments, it should return the output of the original function, but store it in a cache

    // If the function has been called with those arguments, it should return the output of the original function WITHOUT having to execute the functionality

describe('rememberMe tests', () => {
    test('should return a function', () => {
      //Act
      const output = rememberMe();
      //Assert
      expect(typeof output).toBe('function');
    });
    test('the returned function should do the same as the passed function', () => {
        //Arrange
        const testFunc = (a, b) => a + b;
        const myFunc = rememberMe(testFunc);
        //Assert
        expect(myFunc(1, 2)).toBe(testFunc(1, 2));
      });
    //   test('if the returned function has not been previously called with the arguments passed to it, it should return the output, but also store it in a cache', () => {
    //     //Arrange
    //     const testFunc = (a, b) => a + b;
    //     const myFunc = rememberMe(testFunc);
    //     const testFuncSpy = jest.spyOn(testFunc, 'call')
    //     //Act
    //     myFunc(1, 2);
    //     //Assert
    //     expect(testFuncSpy).toHaveBeenCalled();
    //   });
  });