function getUserInput(promptMessage) {
    return window.prompt(promptMessage).trim();
}

function showAlert(message) {
    window.alert(message);
}

function generateVerificationCode() {
    return Math.floor(Math.random() * 1000 + 1);
}

function verifyCode(code) {
    return window.prompt(`Proveď ověření zadáním následujícího čísla: ${code}`);
}

function calculateDaysAlive(birthDate) {
    const currentDate = new Date();
    return Math.floor((currentDate - Date.parse(birthDate)) / (1000 * 60 * 60 * 24));
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function generateRandomWord() {
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

    const consonants = "bcčdďfghjklmnňpqrřsštťvwxzž";
    const vowels = "aeiouyáéěíóúý";

    const getRandomConsonant = () => getRandomElement(consonants.split(''));
    const getRandomVowel = () => getRandomElement(vowels.split(''));

    let wordLength;

    do {
        const userInput = prompt("Představuji generátor náhodných rap slov, napiš jak dlouhé má být tvé slovo:");

        if (userInput === null) {
            return;
        }

        wordLength = parseInt(userInput, 10);

    } while (isNaN(wordLength) || wordLength <= 0);

    let randomWord = "";

    for (let i = 0; i < wordLength; i++) {
        randomWord += i % 2 === 0 ? getRandomConsonant() : getRandomVowel();
    }

    showAlert(`Generátor náhodných rap slov vybral slovo: ${randomWord}`);
}

let uzivatel = getUserInput(`Zadej svoje uživatelské jméno, vole?`);
if (uzivatel.includes(` `) || uzivatel.length === 0) {
    showAlert(`Uživatelské jméno nesmí mít mezery nebo být prázdné, moulo.`);
}

let email = getUserInput(`Jaký máš mail, HMM?`);
if (email.indexOf(`@`) < 1 || email.indexOf(`@`) === email.length - 1 || email.length === 0) {
    showAlert(`Email není platný.`);
}

let heslo = getUserInput(`Zadejte heslo!`);
let hesloCislo = false;
for (let i = 0; i <= 9; i++) {
    if (heslo.includes(i)) {
        hesloCislo = true;
    }
}
if (heslo.length < 6) {
    showAlert(`Heslo musí mít alespoň 6 znaků mrtko!!`);
} else if (!hesloCislo) {
    showAlert(`Heslo musí obsahovat číslici!`);
}

const datum = new Date();
console.log(`Funguje!`);

showAlert(`Vítej v naší hře na poctu Yzovi! Tvůrci: Džon, Advy, Dejvis :) v. T-1.0 [JS TESTING] - Džony branch`);

const narozeni = getUserInput(`Dneska je ${datum.getDate()}. ${datum.getMonth() + 1}. ${datum.getFullYear()}, zadej své datum narození ve formátu YYYY-MM-DD`, `YYYY-MM-DD`);

let tah = `Souhrn losovaných čísel Yzovo loterie jsou: `;
let verifikace = false;
let verifikacniCislo;

verifikacniCislo = generateVerificationCode();

while (!verifikace) {
    const uzivatelskeCislo = verifyCode(verifikacniCislo);

    if (uzivatelskeCislo && Number(uzivatelskeCislo) === verifikacniCislo) {
        showAlert(`Verifikace úspěšná! Pokračujeme.`);
        verifikace = true;
    } else {
        showAlert(`Verifikace selhala. Zkus to znovu.`);
        verifikacniCislo = generateVerificationCode();
    }
}

showAlert(`Jsi na živu už ${calculateDaysAlive(narozeni)} dní. Tvoje šťastné číslo pro dnešní den je ${getRandomNumber(1, 100)}.`);

const MINIMUM = 15;
const MAXIMUM = 100;

let nameOfPlayer = getUserInput(`Jak se jmenuješ, příteli?`, `Yzo`).trim();
showAlert(`Vítám tě, ${nameOfPlayer}, zajímá tě to, co je neznámé, tajemné, nevysvětlitelné, proto jsi přece tady. A my teď poprvé řekneme celou pravdu o tom, co se stalo.`);

const jeZena = window.confirm(`Jsi žena?`);
if (jeZena) {
    let birthYear = getUserInput(`V kterém roce jsi se narodila?`).trim();
    if (isNaN(birthYear) || birthYear.length !== 4) {
        showAlert(`Zadej platný rok narození.`);
    } else {
        let vekUzivatele = 2023 - parseInt(birthYear, 10);

        const narozeniny = !window.confirm(`Měla jsi už tenhle rok narozeniny? :SMIRK:`);
        if (!narozeniny) {
            vekUzivatele--;
        }

        if (vekUzivatele >= MINIMUM && vekUzivatele < MAXIMUM) {
            showAlert(`VÍTEJ ŽENO`);
        } else {
            showAlert(`Hej ale ty sem nelez, to bys psychicky nemusela zvládnout`);
        }
    }
} else {
    showAlert(`VÍTEJ MUŽI, JELIKOŽ JSI MUŽ, TAK NEMUSÍŠ NIC ZADÁVAT :-)`);
}

let vekUzivatele2 = getUserInput('Kolik ti je let?', 69).trim();
if (isNaN(vekUzivatele2) || vekUzivatele2.length === 0) {
    showAlert(`Zadej platný věk.`);
} else if (Number(vekUzivatele2) >= MINIMUM) {
    showAlert(`Můžeš na web moreee, je ti o ${vekUzivatele2 - MINIMUM} víc než ${MINIMUM} let yoloooo!`);
} else {
    showAlert(`Strouhám strouhám strouhám sýr to je gouda tohle není číslo, jdi do piči ty moulo!!!`);
}

showAlert(`Před tím, než tě pustím, zahlásíme výsledky Yzovo loterie!!!`);

for (let index = 0; index < 6; index++) {
    const cislo = getRandomNumber(1, 60);
    showAlert(`A čísla Yzovo loterie jsou: ${index + 1}: ${cislo}`);
    tah += `${cislo}, `;
}

showAlert(tah);

const itemsData = {
    randomItems: ["VVS Chain", "Gold Chain", "Lowe na kapse", "Medical", "LV Pants", "Coco", "Hash", "Číčko"],
    selectedRandomItem: getRandomItem(itemsData.randomItems),
};

let processedItems = "";
itemsData.randomItems.forEach((element, index) => {
    processedItems += `Itemy ${index + 1}: ${element}\n`;
});

showAlert(`Vybrali jsme pro tebe random Yzovo item:\n${itemsData.selectedRandomItem}\n\nItemy co můžeš dostat:\n${processedItems}`);

generateRandomWord();

console.log(`Rare jako supreme drop`);
