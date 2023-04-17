const {
  createPoll,
  makeNameTags,
  removeAgents,
} = require("../sections/1-human-resources.js");

const NCFruitBowl = require("../data/poll-data.js");

//Your function should take an array of people objects, and return a new array of people objects whose profession is not mole.

describe('removeAgents tests', () => {
    test('should take an array of objects, and return an array of objects', () => {
      //Arrange
      const input = [
        {},
      ];
      const expectedOutput = [
        {},
      ];
      //Act
      const output = removeAgents(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('the returned array and people objects should be new.', () => {
      //Arrange
      const input = [
        {},
      ];
      const expectedOutput = [
        {},
      ];
      //Act
      const output = removeAgents(input);
      //Assert
      expect(output).not.toBe(expectedOutput);
    });
    test('the returned array should remove all of the employees with the profession of \'mole\'.', () => {
      //Arrange
      const input = [
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "mole" },
        { name: "Derek", profession: "Developer" },
        { name: "Sally", profession: "People Manager" },
        { name: "Rich", profession: "mole" },
        { name: "Bob", profession: "mole" },
      ];
      const expectedOutput = [
        { name: "Sam", profession: "artist" },
        { name: "Derek", profession: "Developer" },
        { name: "Sally", profession: "People Manager" },
      ];
      //Act
      const output = removeAgents(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('the original array and people objects should not be changed', () => {
      //Arrange
      const input = [
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "mole" },
        { name: "Derek", profession: "Developer" },
        { name: "Sally", profession: "People Manager" },
        { name: "Rich", profession: "mole" },
        { name: "Bob", profession: "mole" },
      ];
      const inputCopy = [...input].map((employee) => {
        return {...employee}
      });
      //Act
      removeAgents(input);
      //Assert
      expect(input).toEqual(inputCopy);
      //Act
      const output = removeAgents(input);
      //Assert
      expect(input[0]).not.toBe(output[0]);
    });
});

//Given an array of guest objects containing title, forename, lastname and company keys, your makeNameTags function should return a new array with the text (formatted as <title> <forename> <surname>, <company>) for each name tag.

describe('makeNameTags tests', () => {
    test('returns an array', () => {
      //Arrange
      const input = [
        {},
      ];
      const expectedOutput = [];
      //Act
      const output = makeNameTags(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns a new array', () => {
      //Arrange
      const input = [
        {},
      ];
      const expectedOutput = [];
      //Act
      const output = makeNameTags(input);
      //Assert
      expect(output).not.toBe(expectedOutput);
    });
    test('the array should contain the text (formatted as <title> <forename> <surname>, <company>), for each name tag', () => {
      //Arrange
      const input = [
        { title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
      {
        title: "Mrs",
        forename: "Piggy",
        surname: "The Pig",
        age: 35,
        company: "Jim Henson Studios",
      },
      {
        title: "Ms",
        forename: "Annette",
        surname: "Curtain",
        age: 40,
        company: "Net Curtains 4u",
      },
      ];
      const expectedOutput = [
        'Mr Sam Caine, Northcoders',
        'Mr Kermit The Frog, Jim Henson Studios',
        'Mrs Piggy The Pig, Jim Henson Studios',
        'Ms Annette Curtain, Net Curtains 4u',
      ];
      //Act
      const output = makeNameTags(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('should not mutate the original array', () => {
      //Arrange
      const input = [
        { title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
      ];
      const copyInput = [...input].map((guest) => {
        return {...guest};
      })
      //Act
      makeNameTags(input);
      //Assert
      expect(input).toEqual(copyInput);
    });
  });

  //Given an array of strings, please build a much more useful poll object.

  describe('createPoll tests', () => {
    test('returns an object', () => {
      //Arrange
      const input = [];
      const expectedOutput = {};
      //Act
      const output = createPoll(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('returns an object tallying each item voted for in the poll', () => {
      //Arrange
      const input = NCFruitBowl;
      const expectedOutput = {
        "apple": 276,
        "banana": 263,
        "lonesome plum": 1,
        "orange": 238,
        "pear": 223
      };
      //Act
      const output = createPoll(input);
      //Assert
      expect(output).toEqual(expectedOutput);
    });
    test('should not mutate the original array', () => {
      //Arrange
      const input = NCFruitBowl;
      const inputCopy = [...input];
      //Act
      createPoll(input);
      //Assert
      expect(input).toEqual(inputCopy);
    });
  });