/* this algorithm returns the parity of any binary number*/
function parity(n) {
    let parity = 0;
    /* count the 1 in the binary number */
    while (n > 0) {
        parity = parity ^ (n & 1);
        n = n >> 1;
    }
    /* return 1 if numberof is odd else 0 */
    return parity;
}
function genTable() {
    let table = [];
    for (let i = 0; i <= ((1 << 16)); i++) {
        table.push(parity(i));
    }
    return table;
}
/* */
function bigParity(z) {
    /* slice z into 4 16 bits parts */
    const mask = 0xffffn;
    const hash = genTable();
    const z0 = Number(z & mask);
    const z1 = Number((z >> 16n) & mask);
    const z2 = Number((z >> 32n) & mask);
    const z3 = Number((z >> 48n) & mask);
    return hash[z0] ^ hash[z1] ^ hash[z2] ^ hash[z3];
}
export { parity, genTable, bigParity };
