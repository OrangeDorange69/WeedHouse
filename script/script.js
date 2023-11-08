console.log(`Funguje!`);

const MINIMUM = 15;

window.alert(`Vítej v naší hře na poctu Yzovi! Tvůrci: Džon, Advy, Dejvis :) v. T-1.0 [JS TESTING] - Džony branch`);
const nameOfPlayer = window.prompt(`Jak se jmenuješ, příteli?` , `Yzo`);
window.alert(`Vítám tě, ${nameOfPlayer}, zajímá tě to, co je neznámé, tajemné, nevysvětlitelné, proto jsi přece tady. A my teď poprvé řekneme celou pravdu o tom, co se stalo. `);

let vekUzivatele = window.prompt('Kolik ti je let?', 69);

if (Number(vekUzivatele) === MINIMUM) {
    window.alert(`Je ti minimální povolený věk, lucky.. Vítej!`);
}

else if (Number(vekUzivatele) > MINIMUM) {
    window.alert(`Můžeš na web moreee, je ti o ${vekUzivatele - MINIMUM} víc než ${MINIMUM} let yoloooo!`);
}

else {
    if (!isNaN(vekUzivatele)) {
        window.alert(`Ty nezbedo! Sem nelez more.. Do dosažení povoleného věku ti zbývá  ${MINIMUM - vekUzivatele} yrs!!11`);      
    }
    else {
        window.alert(`Strouhám strouhám strouhám sýr to je gouda  tohle neni číslo, jdi do piči ty moulo!!!`);
    }
}

console.log(`Rare jako supreme drop`);