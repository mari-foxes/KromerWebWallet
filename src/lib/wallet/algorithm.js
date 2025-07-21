import { KromerDefaultCurrency } from "$lib/api/kromer/classes";
import { sha256 } from "js-sha256";

export function doubleSha256(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    const firstHash = sha256.create();
    firstHash.update(input);
    const firstDigest = firstHash.hex();

    const secondHash = sha256.create();
    secondHash.update(firstDigest);
    const secondDigest = secondHash.hex();

    return secondDigest;
}

export function hexToBase36(input) {
    if (typeof input !== 'number') {
        throw new Error('Input must be a number');
    }

    const byte = 48 + Math.floor(input / 7);
    return String.fromCharCode(byte + 39 > 122 ? 101 : byte > 57 ? byte + 39 : byte);  
} 

export async function makeAddress(key) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }

    const chars = ["", "", "", "", "", "", "", "", ""];
    let chain = KromerDefaultCurrency.address_prefix;
    let hash = await doubleSha256(key);

    for (let i = 0; i <= 8; i++) {
        chars[i] = hash.substring(0,2);
        hash = await doubleSha256(hash);
    }

    for (let i = 0; i <= 8;) {
        const index = parseInt(hash.substring(2 * i, 2 + (2 * i)), 16) % 9;

        if (chars[index] === "") {
            hash = await sha256(hash);
        } else {
            chain += hexToBase36(parseInt(chars[index], 16));
            chars[index] = "";
            i++;
        }
    }

    return chain;
}