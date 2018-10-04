const blacklist = [
    "0x6b9B3e47C4C73DB44f6a34064B21DA8C62692a8c",
];

export const checkAddress = (address: string) => {
    if (blacklist.map(x => x.toLowerCase()).indexOf(address.toLowerCase()) >= 0) {
        throw new Error("blacklisted address");
    }
};
