const datum = new Date();

const narozeni = window.prompt(`Dneska je ${datum.getDate()}. ${datum.getMonth() + 1}. ${datum.getFullYear()}, zadej své datum narození ve formátu YYYY-MM-DD`, `YYYY-MM-DDDD`);

let tah = `Souhrn losovaných čísel Yzovo loterie jsou: `;
let verifikace = false;
let verifikacniCislo;


function generujVerifikacniCislo() {
  return Math.floor(Math.random() * 1000 + 1);
}

verifikacniCislo = generujVerifikacniCislo();

while (!verifikace) {
  const uzivatelskeCislo = window.prompt(`Proveď verifikaci zadáním následujícího čísla: ${verifikacniCislo}`);

  if (uzivatelskeCislo && Number(uzivatelskeCislo) === verifikacniCislo) {
    window.alert(`Verifikace úspěšná! Pokračujeme.`);
    verifikace = true;
  } else {
    window.alert(`Verifikace selhala. Zkus to znovu.`);
    verifikacniCislo = generujVerifikacniCislo();
  }
}

window.alert(`Jsi na živu už ${Math.floor((Date.parse(datum) - Date.parse(new Date(narozeni))) / (1000 * 60 * 60 * 24))} dní. Tvoje šťastné číslo pro dnešní den je ${Math.floor(Math.random() * 100 + 1)}.`);


console.log(`Funguje!`);

const MINIMUM = 15;
const MAXIMUM = 100;

window.alert(`Vítej v naší hře na poctu Yzovi! Tvůrci: Džon, Advy, Dejvis :) v. T-1.0 [JS TESTING] - Džony branch`);
const nameOfPlayer = window.prompt(`Jak se jmenuješ, příteli?`, `Yzo`);
window.alert(`Vítám tě, ${nameOfPlayer}, zajímá tě to, co je neznámé, tajemné, nevysvětlitelné, proto jsi přece tady. A my teď poprvé řekneme celou pravdu o tom, co se stalo.`);

const jeZena = window.confirm(`Jsi žena?`);
if (jeZena) {
    let birthYear = window.prompt(`V kterém roce jsi se narodila?`);
    let vekUzivatele = 2023 - birthYear;

    const narozeniny = !window.confirm(`Měla jsi už tenhle rok narozeniny? :SMIRK:`);
    if (!narozeniny) {
        vekUzivatele--;
    }

    if (vekUzivatele >= MINIMUM && vekUzivatele < MAXIMUM) {
        window.alert(`VÍTEJ ŽENO`);
    } else {
        if (!isNaN(vekUzivatele)) {
            window.alert(`Hej ale ty sem nelez, to bys psychicky nemusela zvládnout`);
        } else {
            window.alert(`Hej ${vekUzivatele} naughty naughty!! Tohle není číslo, za trest tě pošlu na google `);
            window.location.replace(`https://google.com`);
        }
    }
} else {
    window.alert(`VÍTEJ MUŽI, JELIKOŽ JSI MUŽ, TAK NEMUSÍŠ NIC ZADÁVAT :-)`);
}

let vekUzivatele2 = window.prompt('Kolik ti je let?', 69);

if (Number(vekUzivatele2) >= MINIMUM) {
    window.alert(`Můžeš na web moreee, je ti o ${vekUzivatele2 - MINIMUM} víc než ${MINIMUM} let yoloooo!`);
} else {
    if (!isNaN(vekUzivatele2)) {
        window.alert(`Ty nezbedo! Sem nelez more.. Do dosažení povoleného věku ti zbývá  ${MINIMUM - vekUzivatele2} let!!11`);
    } else {
        window.alert(`Strouhám strouhám strouhám sýr to je gouda  tohle není číslo, jdi do piči ty moulo!!!`);
    }
}

window.alert(`Před tím, než tě pustím, zahlásíme výsledky Yzovo loterie!!!`)

for (let index = 0; index < 6; index++) {
    const cislo = Math.floor(Math.random() * 60);
    window.alert (`A čísla Yzovo loterie jsou: ${index + 1}: ${cislo}`);
    tah += `${cislo}, `;
}

window.alert(tah);

console.log(`Rare jako supreme drop`);
