const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe('VendingMachine tests', () => {
  describe('VedingMachine Properties', () => {
    test('It must have a credit property, which will be a number representing amount of pence, starting at 0.', () => {
      //Arrange
      const testVendingMachine = new VendingMachine();
      //Assert
      expect(testVendingMachine.credit).toBe(0);
    });
    test('It must have a stock property, an object representing the rows of items in the machine. Individual positions in the machine can then be referenced by the row, either "A", "B" or "C" e.g.', () => {
      //Arrange
      const testVendingMachine = new VendingMachine();
      const output = {
        'A': {},
        'B': {},
        'C': {},
        'D': {},
        'E': {},
        'F': {}
      }
      //Assert
      expect(testVendingMachine.stock).toEqual(output);
    });
  });
  describe('VendingMachine Methods', () => {
    test('It must have an addStock method which will add new stock to the vending machine at the correct position.', () => {
      //Arrange
      const testVendingMachine = new VendingMachine();
      const marsBars = { name: "marsBar", price: 50, quantity: 6 }
      const output = {
        'A': marsBars,
        'B': {},
        'C': {},
        'D': {},
        'E': {},
        'F': {}
      };
      //Act
      testVendingMachine.addStock(marsBars, 'A');
      //Assert
      expect(testVendingMachine.stock).toEqual(output);
    });
    test('It must have an addCredit method which will update the machine credit.', () => {
      //Arrange
      const testVendingMachine = new VendingMachine();
      //Act
      testVendingMachine.addCredit(50);
      //Assert
      expect(testVendingMachine.credit).toBe(50);
      //Act
      testVendingMachine.addCredit(20);
      //Assert
      expect(testVendingMachine.credit).toBe(70);
    });
    test('It must have a purchaseItem method which will stock name, if there is sufficient credit.', () => {
      //Arrange
      const testVendingMachine = new VendingMachine();
      const marsBars = { name: "marsBar", price: 50, quantity: 6 };
      const crisps = { name: "crisps", price: 30, quantity: 6 }
      //Act
      testVendingMachine.addStock(marsBars, 'A');
      testVendingMachine.addStock(crisps, 'B')
      testVendingMachine.addCredit(30);
      //Assert
      expect(testVendingMachine.purchaseItem("B")).toBe('crisps');
      expect(testVendingMachine.purchaseItem("A")).toBe('Insufficient Credit!');
    });
    test('The purchaseItem method will decrease the stock of the item purchased', () => {
      //Arrange
      const testVendingMachine = new VendingMachine();
      const marsBars = { name: "marsBar", price: 50, quantity: 6 };
      //Act
      testVendingMachine.addStock(marsBars, 'A');
      testVendingMachine.addCredit(50);
      testVendingMachine.purchaseItem('A');
      //Assert
      expect(testVendingMachine.stock["A"].quantity).toBe(5);
    });
    test('The purchaseItem method will decrease the credit of the vending machine by the price of the purcahsed item', () => {
      //Arrange
      const testVendingMachine = new VendingMachine();
      const marsBars = { name: "marsBar", price: 50, quantity: 6 };
      //Act
      testVendingMachine.addStock(marsBars, 'A');
      testVendingMachine.addCredit(50);
      testVendingMachine.purchaseItem('A');
      //Assert
      expect(testVendingMachine.credit).toBe(0);
    });
  });
});
