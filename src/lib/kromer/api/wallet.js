
// Constants
export const walletMap = {};

// Classes
export class Wallet {
    
    /**
     * Wallet UUID.
     * @param {string} id
     * 
     * Wallet label.
     * @param {string} [label]
     * 
     * Wallet category.
     * @param {string} [category]
     * 
     * Wallet password.
     * @param {string} password
     * 
     * Wallet address.
     * @param {string} [address]
     * 
     * Wallet balance.
     * @param {number} [balance]
     * 
     * Wallet names.
     * @param {Array<string>} [names]
     * 
     * Wallet first seen timestamp.
     * @param {string} [firstSeen] 
    */

    constructor(id, label = undefined, category = undefined, password, address = undefined, balance = undefined, names = undefined, firstSeen = undefined) {
        this.id = id;
        this.label = label;
        this.category = category;
        this.password = password;
        this.address = address;
        this.balance = balance;
        this.names = names;
        this.firstSeen = firstSeen;
    }
}