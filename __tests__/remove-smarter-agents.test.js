const removeSmarterAgents = require('../sections/remove-smarter-agents.js');

describe('removeSmarterAgents tests', () => {
    test('should take an array of objects, and return an array of objects', () => {
        //Arrange
        const input = [];
        const expectedOutput = [];
        //Act
        const output = removeSmarterAgents(input);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('the returned array and people objects should be new.', () => {
        //Arrange
        const input = [];
        const expectedOutput = [];
        //Act
        const output = removeSmarterAgents(input);
        //Assert
        expect(output).not.toBe(expectedOutput);
      });
      test('Will return the same array content if there are no moles', () => {
        //Arrange
        const input = [
            {
                name: 'Mitch',
                age: 29,
                aboutMe: 'I am a human being!',
                interests: ['Tudor hymns', 'dancing']
              }
        ];
        const expectedOutput = [
            {
                name: 'Mitch',
                age: 29,
                aboutMe: 'I am a human being!',
                interests: ['Tudor hymns', 'dancing']
              }
        ];
        //Act
        const output = removeSmarterAgents(input);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('can detect and remove an agent if the word mole is in their "aboutMe".', () => {
        //Arrange
        const input = [
            {
                name: 'Mitch',
                age: 29,
                aboutMe: 'I am not a mole - I am a human being!',
                interests: ['Tudor hymns', 'dancing']
              }
        ];
        const expectedOutput = [];
        //Act
        const output = removeSmarterAgents(input);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('can detect and remove an agent if the word mole is in their "interests".', () => {
        //Arrange
        const input = [
            {
                name: 'Mitch',
                age: 29,
                aboutMe: 'I am a human being!',
                interests: ['Tudor hymns', 'dancing', 'moles']
              }
        ];
        const expectedOutput = [];
        //Act
        const output = removeSmarterAgents(input);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('can detect and remove an agent if the word mole is in their "interests" or "aboutMe", even if the word isn\'t in isolation.', () => {
        //Arrange
        const input = [
            {
                name: 'Mitch',
                age: 29,
                aboutMe: 'I am a human being!',
                interests: ['Tudor hymns', 'dancing', 'guacamole']
              }
        ];
        const expectedOutput = [];
        //Act
        const output = removeSmarterAgents(input);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('can detect and remove an agent if the word mole is in their "interests" or "aboutMe", even if the word is separated.', () => {
        //Arrange
        const input = [
            {
                name: 'Mitch',
                age: 29,
                aboutMe: 'I\'m a father of two girls - it\'s great!',
                interests: ['Tudor hymns', 'dancing']
              }
        ];
        const expectedOutput = [];
        //Act
        const output = removeSmarterAgents(input);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('can detect and remove mutliple agents from an array of multiple employees', () => {
        //Arrange
        const input = [
            {
                name: 'Michael',
                age: 31,
                aboutMe: 'I\'m a father of two girls - it\'s great!',
                interests: ['Bass', 'Coding']
              },
              {
                name: 'Mitch',
                age: 29,
                aboutMe: 'I am a human being!',
                interests: ['Tudor hymns', 'dancing', 'guacamole']
              },
              {
                name: 'Eliza',
                age: 31,
                aboutMe: 'I am a human being!',
                interests: ['Table Tennis', 'Gardening']
              }
        ];
        const expectedOutput = [
            {
                name: 'Eliza',
                age: 31,
                aboutMe: 'I am a human being!',
                interests: ['Table Tennis', 'Gardening']
              }
        ];
        //Act
        const output = removeSmarterAgents(input);
        //Assert
        expect(output).toEqual(expectedOutput);
      });
      test('the original array and people objects should not be changed', () => {
        //Arrange
        const input = [
            {
                name: 'Michael',
                age: 31,
                aboutMe: 'I\'m a father of two girls - it\'s great!',
                interests: ['Bass', 'Coding']
              },
              {
                name: 'Mitch',
                age: 29,
                aboutMe: 'I am a human being!',
                interests: ['Tudor hymns', 'dancing', 'guacamole']
              },
              {
                name: 'Eliza',
                age: 31,
                aboutMe: 'I am a human being!',
                interests: ['Table Tennis', 'Gardening']
              }
        ];
        const inputCopy = input.map((employee) => {
          return {...employee}
        });
        //Act
        removeSmarterAgents(input);
        //Assert
        expect(input).toEqual(inputCopy);
      });
  });