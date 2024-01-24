let uzivatel = window.prompt(`Zadej svoje uživatelské jméno, vole?`).trim();
if (uzivatel.includes(` `) || uzivatel.length === 0) {
    window.alert(`Uživatelské jméno nesmí mít mezery nebo být prázdné, moulo.`);
}

let email = window.prompt(`Jaký máš mail, HMM?`).trim();
if (email.indexOf(`@`) < 1 || email.indexOf(`@`) === email.length - 1 || email.length === 0) {
    window.alert(`Email není platný.`);
}

let heslo = window.prompt(`Zadejte heslo!`).trim();
let hesloCislo = false;
for (let i = 0; i <= 9; i++) {
    if (heslo.includes(i)) {
        hesloCislo = true;
    }
}
if (heslo.length < 6) {
    window.alert(`Heslo musí mít alespoň 6 znaků mrtko!!`);
} else if (!hesloCislo) {
    window.alert(`Heslo musí obsahovat číslici!`);
}

const datum = new Date();
console.log(`Funguje!`);

window.alert(`Vítej v naší hře na poctu Yzovi! Tvůrci: Džon, Advy, Dejvis :) v. T-1.0 [JS TESTING] - Džony branch`);

const narozeni = window.prompt(`Dneska je ${datum.getDate()}. ${datum.getMonth() + 1}. ${datum.getFullYear()}, zadej své datum narození ve formátu YYYY-MM-DD`, `YYYY-MM-DD`);

let tah = `Souhrn losovaných čísel Yzovo loterie jsou: `;
let verifikace = false;
let verifikacniCislo;

function generujVerifikacniCislo() {
    return Math.floor(Math.random() * 1000 + 1);
}

verifikacniCislo = generujVerifikacniCislo();

while (!verifikace) {
    const uzivatelskeCislo = window.prompt(`Proveď ověření zadáním následujícího čísla: ${verifikacniCislo}`);

    if (uzivatelskeCislo && Number(uzivatelskeCislo) === verifikacniCislo) {
        window.alert(`Verifikace úspěšná! Pokračujeme.`);
        verifikace = true;
    } else {
        window.alert(`Verifikace selhala. Zkus to znovu.`);
        verifikacniCislo = generujVerifikacniCislo();
    }
}

window.alert(`Jsi na živu už ${Math.floor((Date.parse(datum) - Date.parse(new Date(narozeni))) / (1000 * 60 * 60 * 24))} dní. Tvoje šťastné číslo pro dnešní den je ${Math.floor(Math.random() * 100 + 1)}.`);

const MINIMUM = 15;
const MAXIMUM = 100;

let nameOfPlayer = window.prompt(`Jak se jmenuješ, příteli?`, `Yzo`).trim();
window.alert(`Vítám tě, ${nameOfPlayer}, zajímá tě to, co je neznámé, tajemné, nevysvětlitelné, proto jsi přece tady. A my teď poprvé řekneme celou pravdu o tom, co se stalo.`);

const jeZena = window.confirm(`Jsi žena?`);
if (jeZena) {
    let birthYear = window.prompt(`V kterém roce jsi se narodila?`).trim();
    if (isNaN(birthYear) || birthYear.length !== 4) {
        window.alert(`Zadej platný rok narození.`);
    } else {
        let vekUzivatele = 2023 - parseInt(birthYear, 10);

        const narozeniny = !window.confirm(`Měla jsi už tenhle rok narozeniny? :SMIRK:`);
        if (!narozeniny) {
            vekUzivatele--;
        }

        if (vekUzivatele >= MINIMUM && vekUzivatele < MAXIMUM) {
            window.alert(`VÍTEJ ŽENO`);
        } else {
            window.alert(`Hej ale ty sem nelez, to bys psychicky nemusela zvládnout`);
        }
    }
} else {
    window.alert(`VÍTEJ MUŽI, JELIKOŽ JSI MUŽ, TAK NEMUSÍŠ NIC ZADÁVAT :-)`);
}

let vekUzivatele2 = window.prompt('Kolik ti je let?', 69).trim();
if (isNaN(vekUzivatele2) || vekUzivatele2.length === 0) {
    window.alert(`Zadej platný věk.`);
} else if (Number(vekUzivatele2) >= MINIMUM) {
    window.alert(`Můžeš na web moreee, je ti o ${vekUzivatele2 - MINIMUM} víc než ${MINIMUM} let yoloooo!`);
} else {
    window.alert(`Strouhám strouhám strouhám sýr to je gouda tohle není číslo, jdi do piči ty moulo!!!`);
}

window.alert(`Před tím, než tě pustím, zahlásíme výsledky Yzovo loterie!!!`);

for (let index = 0; index < 6; index++) {
    const cislo = Math.floor(Math.random() * 60);
    window.alert (`A čísla Yzovo loterie jsou: ${index + 1}: ${cislo}`);
    tah += `${cislo}, `;
}

window.alert(tah);


const randomShit = ["VVS Chain", "Gold Chain", "Lowe na kapse", "Medical", "LV Pants", "Coco", "Hash", "Číčko"];

let processedItems = "";
randomShit.forEach((element, index) => {
    processedItems += `Itemy ${index + 1}: ${element}\n`;
});

const randomVec = randomShit[Math.floor(Math.random() * randomShit.length)];

window.alert(`Vybrali jsme pro tebe random Yzovo item:\n${randomVec}\n\nItemy co můžeš dostat:\n${processedItems}`);

const generateRandomWord = () => {
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

    const consonants = "bcčdďfghjklmnňpqrřsštťvwxzž";
    const vowels = "aeiouyáéěíóúý";

    const getRandomConsonant = () => getRandomElement(consonants.split(''));
    const getRandomVowel = () => getRandomElement(vowels.split(''));

    const wordLength = parseInt(validateInput(
        "Představuji generátor náhodných rap slov, napiš jak dlouhé má být tvé slovo:",
        (input) => !isNaN(input) && input > 0,
        "PROSÍM, DEJ SEM KLADNÉ ČÍSLO VOLE!!!."
    ), 10);

    let randomWord = "";

    for (let i = 0; i < wordLength; i++) {
        randomWord += i % 2 === 0 ? getRandomConsonant() : getRandomVowel();
    }

    window.alert(`Generátor náhodných rap slov vybral slovo: ${randomWord}`);
};

generateRandomWord();

console.log(`Rare jako supreme drop`);
