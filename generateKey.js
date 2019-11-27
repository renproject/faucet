const { AES, enc, SHA256 } = require("crypto-js");
const crypto = require("crypto");
var fs = require('fs');

const encode = (password) => {

    if (!password) {
        console.error("Usage: node generateKey.js password");
    }

    const privateKey = crypto.randomBytes(32).toString("hex");

    // This doesn't improve the encryption security, but slows down password
    // attempts in the front-end.
    for (let i = 0; i < 100000; i++) {
        password = SHA256(password);
    }
    password = password.toString();

    // Decrypt
    let cipher;
    try {
        console.log(privateKey);
        cipher = AES.encrypt(privateKey, password).toString();
    } catch (err) {
        console.error(err);
        return;
    }
    return cipher;
}

const decode = (cipher, password) => {

    if (!cipher || !password) {
        console.error("Usage: node generateKey.js cipher password");
    }

    for (let i = 0; i < 100000; i++) {
        password = SHA256(password);
    }
    password = password.toString();

    // Decrypt
    let privateKey;
    try {
        console.log(privateKey);
        privateKey = AES.decrypt(cipher.toString(), password).toString(enc.Utf8);
    } catch (err) {
        console.error(err);
        return;
    }
    return privateKey;
}


const main = (argv) => {
    const cipher = encode(...argv.slice(2));

    // Append to .env
    fs.appendFile(
        '.env',
        `\nREACT_APP_PRIVATE_KEY_CIPHER="${cipher}"`,
        'utf8',
        function (error) {
            if (error) throw error;
            console.log("Private key cipher stored in `.env`");
        }
    );
}

main(process.argv);
