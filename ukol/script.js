/* ============================================
   🔵 ÚKOLY 31–40: Funkce, události a práce s DOM
   ============================================ */

/* 31) Po kliknutí na tlačítko zobraz alert „Ahoj světe!“.
      - Vytvoř funkci, která zobrazí alert.
      - Použij událost onclick nebo addEventListener.
*/
document.getElementById('btn31').onclick = function() {
    alert("Ahoj světe!");
};


/* 32) Po kliknutí na tlačítko změň text vybraného HTML elementu.
      - Napiš funkci, která změní .textContent nebo .innerText.
      - Vyzkoušej použití arrow funkce.
*/
document.getElementById('btn32').addEventListener('click', () => {
    document.getElementById('text32').textContent = "Text byl změněn!";
});


/* 33) Vypiš do <div> aktuální čas, který se bude každou sekundu aktualizovat.
      - Použij setInterval a vlastní funkci pro získání času.
      - Funkce by měla vracet formátovaný čas (HH:MM:SS).
*/
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock33').textContent = timeString;
}

setInterval(updateTime, 1000);

/* 34) Po kliknutí na tlačítko změň barvu pozadí celé stránky.
      - Vytvoř funkci s parametrem (barva).
      - Vyzkoušej nastavit hodnotu přes document.body.style.
*/
document.getElementById('btn34').onclick = function() {
    document.body.style.backgroundColor = "lightblue";
};

/* 35) Po najetí myší na obrázek ho zvětši.
      - Použij eventy mouseover a mouseout.
      - Změnu proveď pomocí třídy v CSS nebo style.width v JS.
*/
const image = document.getElementById('img35');

image.addEventListener('mouseover', () => {
    image.style.width = '300px'; 
});

image.addEventListener('mouseout', () => {
    image.style.width = '200px'; 
});

/* 36) Po odeslání formuláře vypiš hodnoty inputů do konzole.
      - Zakázat přirozené odeslání formuláře pomocí event.preventDefault().
      - Použij funkci, která načte hodnoty inputů.
*/

/* 37) Vytvoř jednoduché „počítadlo kliknutí“.
      - Po každém kliknutí zvýší číslo o 1 a zobraz ho v HTML.
      - Proměnná se musí nacházet ve správném scope.
*/

/* 38) Po kliknutí na tlačítko skryj nebo zobraz text.
      - Můžeš použít classList.toggle().
      - Zvaž použití anonymní nebo arrow funkce.
*/

/* 39) Validuj formulář – zkontroluj, jestli je vyplněné jméno a e-mail.
      - Pokud není validní, zobraz chybovou hlášku.
      - Použij jednoduchou podmínku a funkci validateForm().
*/

/* 40) Pomocí slideru (input type="range") měň velikost písma textu.
      - Po změně hodnoty aktualizuj style.fontSize.
      - Hodnota ze slideru bude vstupním parametrem funkce.
*/


/* =====================================================
   Práce s formuláři a uživatelskými daty – obecné úkoly
   ===================================================== */

/* - Nauč se načíst hodnoty z inputů pomocí .value.
   - Vytvoř funkci, která validuje hodnoty podle podmínek.
   - Dynamicky aktualizuj HTML podle vstupních dat
     (např. okamžitý výpočet ceny, filtrování seznamu apod.).
*/

