class Dictiniory {
    constructor(selector, pavadinims, list) {
        // console.log('zodynas pasileido..');
        // console.log(pavadinims);
        this.selector = selector;
        this.name = pavadinims;
        this.dictinioryList = list;

        // tai elemntas, kuriame gerneruosime visa turini
        this.DOM = null;
    }
    init() {
        // patikriname, jog validus this.selector
        // patikriname jog validus this.dictinioryList
        // randam this.DOM
        if(!this.isValidSelector() ||
        !this.isValidDictionary() ||
        !this.findTargetElement()) {
            return false;
        }
        
        this.render();
        // generuojame turini
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
        this.selector === '') {
            console.error('ERROR: selector turi buti ne tuscias tekstas(string)');
            return false;
        }
        return true;
    }
    isValidDictionary() {
        if (!Array.isArray(this.dictinioryList) ||
        this.dictinioryList.length === 0) {
            console.error('ERROR: zodynas turi buti ne tuscias array');
            // console.warn(); ispejimas
            return false;
        }
        return true;
    }
    // atliekam paieska
    findTargetElement() {
        // console.log('ieskome elemento');
        // console.log('ieskome elemento pagal: ', this.selector); // this.selector yra .content

        // const elementDOM = document.querySelector(this.selector);
        // console.log(elementDOM);
        // if (elementDOM) {
        //     console.log(elementDOM);
        // } else {
        //     console.log('elemento rasti nepavyko');
        // }
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('Pagal pateikta selector, norimo elemento nepavyko rasti');
            return false;
        }
        return true;
    }

    // turinio generavimas
    render() {
        console.log('piesiam turini');
        console.log(this.DOM); // elementas, kuriame nugili informacija
        console.log(this.dictinioryList); // info, kuria naudojant sugeneruojamas turinys

        // const HTML = '<div class="rytas" >Labas</div>'
        // this.DOM.innerText = HTML; nuskato kaip teksta ir visa atvaizduoja

        // this.DOM.innerText = 'Labas rytas' // ikeliamas tekstas

        const HTML = '<div class="rytas" >Labas</div>'
        this.DOM.innerHTML = HTML; // ikelia tik labas
    }
}

export { Dictiniory }