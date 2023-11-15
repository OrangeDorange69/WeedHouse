console.log(`Funguje!`);

const MINIMUM = 15;
const MAXIMUM = 100;


window.alert(`Vítej v naší hře na poctu Yzovi! Tvůrci: Džon, Advy, Dejvis :) v. T-1.0 [JS TESTING] - Džony branch`);
const nameOfPlayer = window.prompt(`Jak se jmenuješ, příteli?` , `Yzo`);
window.alert(`Vítám tě, ${nameOfPlayer}, zajímá tě to, co je neznámé, tajemné, nevysvětlitelné, proto jsi přece tady. A my teď poprvé řekneme celou pravdu o tom, co se stalo. `);

const jeZena = window.confirm(`Jsi ženaa?`);
if (jeZena) {
    let vekUzivatele = 2023 - window.prompt(`jakej rok ses narodila?`);
    console.log(vekUzivatele);
    const narozeniny = (!window.confirm(`melas uz tenhle rok narozky? :SMIRK:`));
    if (!narozeniny) {
        vekUzivatele --;
    }
    if (vekUzivatele >= MINIMUM && vekUzivatele < MAXIMUM) {
    window.alert(`VÍTEJ ŽENO`);
    }
    else {
        if (!isNaN (vekUzivatele)) {
            window.alert(`hej ale ty sem nelez, to bys psychicky nemusela zvládnout`);
        }
     else {
        window.alert(`hej ${vekUzivatele} naughty naughty!! tohle neni číslo, za trest tě pošlu na google `);
        window.location.replace(`https://google.com`);
     }
    }
}

else {
    window.alert(`VÍTEJ MUŽI, JELIKOŽ JSI MUŽ, TAK NEMUSÍŠ NIC ZADÁVAT :-)`);
}


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
