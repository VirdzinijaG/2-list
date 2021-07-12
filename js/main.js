import { wordsData } from "./data/wordsData.js";
// rasoma kas norima, kad butu importuojama ir is kur
// gale visada turi buti .js

import { Dictiniory } from "./components/Dictionary.js";

// console.log(wordsData);
// console.log(Dictiniory);


// kuriamas objektas pagal klase Dictionary,kuris yra kitame faile
const zodynas = new Dictiniory('.content', 'Anglų-Lietuvių kalbos žodynas', wordsData);

console.log(zodynas); // ispausdinama, kas yra pats zodynas