let text = prompt("zadej text: ");
function delkaTextu(text){
    let delka = 0;
 
    for (let i = 0; text[i] !== undefined; i++){
        delka++;
 
    }
    return delka;
}