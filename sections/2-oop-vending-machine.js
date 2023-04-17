class VendingMachine {
    #credit;
    #stock;
    constructor() {
        this.#credit = 0;
        this.#stock = {
            'A': {},
            'B': {},
            'C': {},
            'D': {},
            'E': {},
            'F': {} 
        };
    };

    get credit() {
        return this.#credit
    };
    get stock() {
        return this.#stock;
    };

    //Methods
    addStock(newStock, row) {
        return this.#stock[row] = newStock;
    };

    addCredit(addedCredit) {
        return this.#credit += addedCredit;
    };

    purchaseItem(rowOfItem) {
        if (this.#credit >= this.#stock[rowOfItem].price) {
            this.#stock[rowOfItem].quantity--;
            this.#credit -= this.#stock[rowOfItem].price;
            return this.#stock[rowOfItem].name;
        } else {
            return 'Insufficient Credit!';
        };
    };
};

module.exports = VendingMachine;
