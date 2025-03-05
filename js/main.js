/*

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale
del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

*/

const inputForm = document.getElementById('ticket-price');

inputForm.addEventListener('submit', function(event) {
  event.preventDefault();


  const userAge = Number(document.getElementById('user-age').value);
  const userTravelLength = Number(document.getElementById('user-travel-length').value);

  const alertDiv = document.getElementById('alert');
  if (isNaN(userAge) || isNaN(userTravelLength)) {
    alertDiv.innerHTML = 'I dati che hai inserito non sono validi. Per favore inserisci solo numeri.'

    return alertDiv.style.display = 'block';
  };


  const grossPrice = userTravelLength * 0.21;
  
  const discountCalc =
    userAge < 18 ? 0.8 :
    userAge > 65 ? 0.6 : 1;

  const netPrice = grossPrice * discountCalc;

  let completeMessage;

  if (discountCalc < 1) {
    completeMessage = `Prezzo: <s>${formatToEuro(grossPrice)}</s>  ${formatToEuro(netPrice)} Sconto: ${(discountCalc * 100) - 100}%`;
  } else {
    completeMessage = `Prezzo: ${formatToEuro(netPrice)}`;
  };

  alertDiv.innerHTML = completeMessage;

  return alertDiv.style.display = 'block';
});


function formatToEuro(num) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR'
  }).format(num);
};