function getSecret(file, secretPassword) {
    file.opened += 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Invalid password";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

let superSecretFile = {
    level: "Classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel has a secret daughter."
};

let secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel is also secretly a Grandpa.");

secret = getSecret(superSecretFile, 2);
console.log(secret);
