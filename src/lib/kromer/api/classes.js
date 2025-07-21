// Constants
export const KromerConstants = {
    NameCost: 500,
}

export const KromerDefaultCurrency = {
    address_prefix: "k",
    name_suffix: "kro",
    currency_name: "Kromer",
    currency_symbol: "KRO"
}

// MINED is out of the scope, as Kromer does not support mining.
export const KromerTransactionType = Object.freeze({
  UNKNOWN: "unknown",
  NAME_PURCHASE: "name_purchase",
  NAME_A_RECORD: "name_a_record",
  NAME_TRANSFER: "name_transfer",
  TRANSFER: "transfer"
})


// Classes
export class KromerAddress {
   /**
   * Kromer wallet address.
   * @param {string} address
   * 
   * Kromer wallet balance.
   * @param {number} balance
   * 
   * Kromer wallet first seen date.
   * @param {string} firstseen
   * 
   * Kromer wallet total input amount.
   * @param {number} [totalin]
   * 
   * Kromer wallet total output amount.
   * @param {number} [totalout]
   */
  constructor(address, balance, firstseen, totalin = undefined, totalout = undefined) {
    this.address = address;
    this.balance = balance;
    this.firstseen = firstseen;
    this.totalin = totalin;
    this.totalout = totalout;
  }
}

export class KromerTransaction {

    /**
    * Kromer transaction ID
    * @param {string} id
    * 
    * Transaction sender address.
    * @param {string} [from]
    * 
    * Transaction recipient address.
    * @param {string} to
    * 
    * Transaction value.
    * @param {number} value
    * 
    * Transaction timestamp.
    * @param {string} time
    * 
    * Transaction name.
    * @param {string} [name]
    * 
    * Transaction metadata.
    * @param {string} [metadata]
    * 
    * Transaction sent name.
    * @param {string} [sent_name]
    * 
    * Transaction sent metaname name. 
    * [no idea what the fuck this is]
    * 
    * @param {string} [sent_metaname]
    * 
    * Type of transaction.
    * @param {KromerTransactionType}
    */ 

    constructor(id, from = null, to, value, time, name = undefined, metadata = undefined, sent_name = undefined, sent_metaname = undefined, type) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.value = value;
        this.time = time;
        this.name = name;
        this.metadata = metadata;
        this.sent_name = sent_name;
        this.sent_metaname = sent_metaname;
        this.type = type;
    }
}

export class KromerName {
    /**
    * Name.
    * @param {string} name
    * 
    * Name owner.
    * @param {string} owner
    * 
    * Original owner.
    * @param {string} [original_owner]
    * 
    * Registered date.
    * @param {string} registered
    * 
    * Updated date.
    * @param {string} [updated]
    * 
    * Transferred date.
    * @param {string} [transferred]
    * 
    * Unpaid status.
    * @param {boolean} unpaid
    * 
    */
    constructor(name, owner, original_owner = undefined, registered, updated = null, transferred = null, unpaid) {
        this.name = name;
        this.owner = owner;
        this.original_owner = original_owner;
        this.registered = registered;
        this.updated = updated;
        this.transferred = transferred;
        this.unpaid = unpaid;
    }
}

