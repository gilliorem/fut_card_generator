const resultMonthSpan = document.querySelector("#result-month-span");
let generateCardButton = document.querySelector("#generate-card-button");
let downloadButton = document.querySelector(".download-button");

let objectifVentes = document.querySelector("#objectif-ventes");

let objectifCa = document.querySelector("#objectif-ca");
let ventes = document.querySelector("#ventes");
let ca = document.querySelector("#ca");
let generalN= document.querySelector(".general");
let ventesSpan = document.querySelector("#ventes-span");
let caSpan = document.querySelector("#ca-span");
let spanName = document.querySelector("#span-name");
let spanNumber = document.querySelector("#span-number");
let spanNameTwo = document.querySelector("#span-name-two");
let spanNumberTwo = document.querySelector("#span-number-two");
const cardContainer = document.querySelector('.card-container');
let card = document.querySelector(".card");

let portrait = document.querySelector("#portrait");
const selectList = document.querySelector('#vendeur-select-list');

const postSpan = document.querySelector("#post");
const flagImage = document.querySelector("#flag-image");
const nameSpan = document.querySelector("#name-span");

let angeloProfileImage = "profile_images/Angelo.png";
let arthurProfileImage = "profile_images/Arthur.png";
let emmanuelProfileImage = "profile_images/Manu.png";
let fredericProfileImage = "profile_images/Frederic.png";
let maximeProfileImage = "profile_images/Maxime.png";
let ruddyProfileImage = "profile_images/Ruddy.png";

let arthurProfileImageInForm = "profile_images/Arthur-en-forme.png";
let emmanuelProfileImageInForm = "profile_images/Manu-en-forme.png";
let fredericProfileImageInForm = "profile_images/Frederic-en-forme.png";
let maximeProfileImageInForm = "profile_images/Maxime-en-forme.png";
let ruddyProfileImageInForm = "profile_images/Ruddy-en-forme.png";

const inFormSellers = [];
inFormSellers.push(arthurProfileImageInForm, emmanuelProfileImageInForm, fredericProfileImageInForm, maximeProfileImageInForm, ruddyProfileImageInForm);

const argentineFlagImage = "flags_images/argentine-flag.png";
const camerounFlagImage = "flags_images/cameroun-flag.png";
const frenchFlagImage = "flags_images/french-flag.png";
const germanFlagImage = "flags_images/german-flag.png";
const italianFlagImage = "flags_images/italian-flag.png";
const portugalFlagImage = "flags_images/portugal-flag.png";

const sellers = ["Angelo", "Arthur", "Emmanuel", "Frédéric", "Maxime", "Ruddy"];

const angeloWords = [" PISCINE", " KARTING"];
const angeloWordsTwo = [" BOXE", " DON PAPA"];
let arthurWords = [" BBQ", " IMC", "PDL"];
const arthurWordsTwo = [" VT", " DEVIS"];
const emmanuelWords = [" SQUEEZ", " PAR CONTRE"];
const emmanuelWordsTwo = [" VIVEL DOP"];
const fredericWords = [" PADL", " VT"];
const fredericWordsTwo = [" ONE SHOT", " YÉ LAIDD"]
const maximeWords = [" BDC", " EN CE SENS", "A CESUJET"];
const maximeWordsTwo = [" ABNÉGATION"];
const ruddyWords = [" ISO"];
const ruddyWordsTwo = [" ACDC"];

function generatePost(element)
{
    const date = new Date();
    let month = date.getMonth();
    if (month == 1)
    {
        element.innerText = "JAN";
    }

    else if (month == 2)
    {
        element.innerText = "FEV";
    }
    else if (month == 3)
    {
        element.innerText = "MAR";
    }
    else if (month == 4)
    {
        element.innerText = "AVR";
    }
    else if (month == 5)
    {
        element.innerText = "MAI";
    }
    else if (month == 6)
    {
        element.innerText="JUIN";
    }
    else if (month == 7)
    {
        element.innerText = "JUIL";
    }
    else if (month == 8)
    {
        element.innerText = "AOU";
    }
    else if (month == 9)
    {
        element.innerText = "SEP";  
    }
    else if (month == 10)
    {
        element.innerText = "OCT";
    }
    else if (month == 11)
    {
        element.innerText = "NOV";
    }
    else if (month == 12)
    {
        element.innerText = "DEC";
    }
}   

function displayProfile()
{
    if (selectList.value == "Angelo")
        {
            portrait.src = angeloProfileImage;
            flagImage.src = italianFlagImage;
            nameSpan.innerText = sellers[0].toUpperCase();
            generateRandomWord(angeloWords, spanName);
            generateRandomNumber(spanNumber);
            generateRandomWord(angeloWordsTwo, spanNameTwo);
            generateRandomNumber(spanNumberTwo);
        }
    else if (selectList.value == "Arthur")
        {
            portrait.src = arthurProfileImage;
            flagImage.src = camerounFlagImage;
            nameSpan.innerText = sellers[1].toUpperCase();
            generateRandomWord(arthurWords, spanName);
            generateRandomNumber(spanNumber);
            generateRandomWord(arthurWordsTwo, spanNameTwo);
            generateRandomNumber(spanNumberTwo);
        }
    else if (selectList.value == "Emmanuel")
        {
            portrait.src = emmanuelProfileImage;
            flagImage.src = portugalFlagImage;
            nameSpan.innerText = sellers[2].toUpperCase()
            generateRandomWord(emmanuelWords, spanName);
            generateRandomNumber(spanNumber);
            generateRandomWord(emmanuelWordsTwo, spanNameTwo);
            generateRandomNumber(spanNumberTwo);
        }
    else if (selectList.value == "Frédéric")
        {
            portrait.src = fredericProfileImage;
            flagImage.src = frenchFlagImage;
            nameSpan.innerText = sellers[3].toUpperCase()
            generateRandomWord(fredericWords, spanName);
            generateRandomNumber(spanNumber);
            generateRandomWord(fredericWordsTwo, spanNameTwo);
            generateRandomNumber(spanNumberTwo);
        }
    else if (selectList.value == "Maxime")
        {
            portrait.src = maximeProfileImage;
            flagImage.src = argentineFlagImage;
            nameSpan.innerText = sellers[4].toUpperCase()
            generateRandomWord(maximeWords, spanName);
            generateRandomNumber(spanNumber);
            generateRandomWord(maximeWordsTwo, spanNameTwo);
            generateRandomNumber(spanNumberTwo);
        }
    else if (selectList.value == "Ruddy")
        {
            portrait.src = ruddyProfileImage;
            flagImage.src = germanFlagImage;
            nameSpan.innerText = sellers[5].toUpperCase()
            generateRandomWord(ruddyWords, spanName);
            generateRandomNumber(spanNumber);
            generateRandomWord(ruddyWordsTwo, spanNameTwo);
            generateRandomNumber(spanNumberTwo);
        }
        return selectList.value;
}

selectList.addEventListener("change",()=>
{
    displayProfile();
})

function generateRandomNumber(element)
{
  let randomNumber =  Math.floor(Math.random() * 99);
  element.innerText = randomNumber;
}

function generateRandomWord(array, element)
{
  let max = array.length;
  let number = Math.floor(Math.random(max)*max);
  let value = array[number];
  element.innerText = value;
}

function getIncomeAndSaleValues()
{
   const ventesValue = ventes.value;
   const caValue = ca.value;
  ventesSpan.innerText = ventesValue + " VENTE" ;
  caSpan.innerText = caValue + " CA";
}

function getIncomeRatio()
{
  let incomeValue = parseInt(ca.value);
  let objectifIncomeValue = parseInt(objectifCa.value);
  console.log(incomeValue, objectifIncomeValue);
  
  let incomeRatio=incomeValue/objectifIncomeValue;
  incomeRatio *=100;
  incomeRatio = incomeRatio.toFixed(2);
  incomeRatio = parseFloat(incomeRatio);
  console.log(incomeRatio);
  return incomeRatio;
}

generatePost(resultMonthSpan);

generateCardButton.addEventListener("click", () => {
  card.style.display="block";
	card.classList.add("card-animation");
  downloadButton.classList.add('display');
  generatePost(postSpan);
  getIncomeAndSaleValues();
  let incomeRatio = getIncomeRatio();
  let general =incomeRatio;
  general = incomeRatio.toFixed(0);
    if (general < 50)
    {
        card.style.backgroundImage = "url('card_background/fut_card_bronze.png')"
    }
    else if (general > 49 && general < 75)
    {
        card.style.backgroundImage = "url('card_background/fut_card_silver.png')";
    }
    else if (general > 74 && general < 84)
        {
            card.style.backgroundImage = "url('card_background/gold-rare-background.png')";
        }
    else if (general > 83 && general < 90)
        {
            card.style.backgroundImage = "url('card_background/fut_card_ulc.png')";
            card.classList.add("blue");
        }
    else if (general > 89)
        {
            card.style.backgroundImage = "url('card_background/fut_card_legend.png')";
        }
    let selectedValueFromList = displayProfile();
    if (selectedValueFromList == "Arthur" && general > 80)
    {
        portrait.src = arthurProfileImageInForm; 
    }
    else if (selectedValueFromList == "Emmanuel" && general > 80)
    {
        portrait.src = emmanuelProfileImageInForm;
    }
    else if (selectedValueFromList == "Frédéric" && general > 80)
    {
        portrait.src = fredericProfileImageInForm;
    }
    else if (selectedValueFromList == "Maxime" && general > 80)
    {
        portrait.src = maximeProfileImageInForm;
    }
    else if (selectedValueFromList == "Ruddy" && general > 80)
    {
        portrait.src = ruddyProfileImageInForm;
    }
  generalN.innerText = general;
});
let months = ["JAN","FEV","MAR","AVR","MAI","JUIN","JUIL","AOU","SEP",
"OCT","NOV","DEC"];
function getMonthInLetters()
{
	const date = new Date();
	let month = date.getMonth();
	let monthInLetters = months[month];
	monthInLetters = monthInLetters.toLowerCase();
	return monthInLetters;
}


downloadButton.addEventListener('click', function() {
    html2canvas(cardContainer).then(canvas => {
        // Create a link element
        let link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = selectList.value + "-"+getMonthInLetters() + '-fut-card.png';
        // Append the link to the body
        document.body.appendChild(link);
        // Programmatically click the link to trigger the download
        link.click();
        // Remove the link from the document
        document.body.removeChild(link);
    });
});
