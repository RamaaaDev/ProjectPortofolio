const txtType = ['g-mail', 'whatsapp', 'id line', 'Telegram'];
let i = 0;
let typeIndex = 0;
let typeNow = '';
let wordType = '';

(function typing(){
    if(i == txtType.length){
        i = 0;
    }
    typeNow = txtType[i];
    wordType = typeNow.slice(0, ++typeIndex);
    document.querySelector('.txt').textContent = wordType;
    if(wordType.length == typeNow.length){
        i++;
        typeIndex = 0;
    }
    setTimeout(typing, 470);
})()