let button_generator = document.getElementById('generator');
button_generator.addEventListener("click", generar);

let button_show = document.getElementById('mostrar');
button_show.addEventListener("click", mostrar);

let container = document.getElementById('container__caracteres');
let container__romaji = document.getElementById('container__caracteres-romaji')

let valor_select = document.getElementById("n_caracter");

const caracteresHiragana = [
                            "あ", "い", "う", "え", "お",
                            "か", "き", "く", "け", "こ",
                            "さ", "し", "す", "せ", "そ",
                            "た", "ち", "つ", "て", "と",
                            "な", "に", "ぬ", "ね", "の",
                            "は", "ひ", "ふ", "へ", "ほ",
                            "ま", "み", "む", "め", "も",
                            "や",       "ゆ",       "よ",
                            "ら", "り", "る", "れ", "ろ",
                            "わ", "ゐ",       "ゑ", "を",
                            "ん",
                            "が", "ぎ", "ぐ", "げ", "ご",
                            "ざ", "じ", "ず", "ぜ", "ぞ",
                            "だ", "ぢ", "づ", "で", "ど",
                            "ば", "び", "ぶ", "べ", "ぼ",
                            "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"
                           ];

const caracteresRomaji = [
                            "A", "I", "U", "E", "O",
                            "KA", "KI", "KU", "KE", "KO",
                            "SA", "SHI", "SU", "SE", "SO",
                            "TA", "CHI", "TSU", "TE", "TO",
                            "NA", "NI", "NU", "NE", "NO",
                            "HA", "HI", "FU", "HE", "HO",
                            "MA", "MI", "MU", "ME", "MO",
                            "YA",       "YU",       "YO",
                            "RA", "RI", "RU", "RE", "RO",
                            "WA", "WI",       "WE", "WO",
                            "N",
                            "GA", "GI", "GU", "GE", "GO",
                            "ZA", "ZI", "ZU", "ZE", "ZO",
                            "DA", "DI", "DU", "DE", "DO",
                            "BA", "BI", "BU", "BE", "BO",
                            "PA", "PI", "PU", "PE", "PO"
                           ];
var activador = 0;
var caracteresShow = [];
var caracteresShowRomaji = [];
var num_select;

function generar()
{
    container__romaji.style.display = "none";
    var traductionHiragana = "";
    var aleatorio;
    if(activador == 1)
    {
        for(var j = 0; j < num_select; j++)
        {
            container.removeChild(caracteresShow[j]);
        }
        for(var k = 0; k < num_select; k++)
        {
            container__romaji.removeChild(caracteresShowRomaji[k]);
        }
    }
    
    num_select = valor_select.value;
    console.log("El número de caracteres seleccionado es " + num_select);
        
    for(var i = 0; i < num_select; i++)
    {   
        aleatorio = randomNum();

        caracteresShow[i] = document.createElement("div");
        caracteresShow[i].id = "letra";
        caracteresShow[i].textContent = caracteresHiragana[aleatorio];

        caracteresShowRomaji[i] = document.createElement("div");
        caracteresShowRomaji[i].id = "letrasToTraduction";
        caracteresShowRomaji[i].textContent = caracteresRomaji[aleatorio];

        container.appendChild(caracteresShow[i]);
        container__romaji.appendChild(caracteresShowRomaji[i])

        activador = num_select > 0 ? activador = 1 : activador = 0;

        traductionHiragana =  traductionHiragana + caracteresShow[i].textContent;
    }
    console.log(traductionHiragana);
    
    
}

function mostrar()
{
    console.log("Mostrar")
    container__romaji.style.display = "flex";
}

function randomNum  () 
{
    return Math.floor(Math.random() * 74);
}
