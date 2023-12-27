{
  const calculateResult = (amount, currency) => {
    constRateUSD = 4.405;
    constRateEUR = 3.5;
    constRateGBP = 6.65;
    constRatePLN = 1;
    constRateCHF = 4.8;
    constRateCZK = 0.2;
    constRateDKK = 0.6;
    constRateNOK = 0.5;
    constRateSEK = 0.5;

    switch (currency) {
      case "USD":
        return amount / constRateUSD;

      case "EUR":
        return amount / constRateEUR;

      case "GBP":
        return amount / constRateGBP;
      
      case "PLN":
        return amount / constRatePLN;

      case "CHF":
        return amount / constRateCHF;

      case "CZK":
        return amount / constRateCZK;

      case "DKK":
        return amount / constRateDKK;

      case "NOK":
        return amount / constRateNOK;

      case "SEK":
        return amount / constRateSEK;

      default:
        result = "Please select currency";
    }
  };

  const upadateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".currency-converter__result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(
      2
    )} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const inputElement = document.querySelector(".currency-converter__input");
    const selectElement = document.querySelector(".currency-converter__select");

    const amount = +inputElement.value;
    const currency = selectElement.value;

    const result = calculateResult(amount, currency);

    upadateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".currency-converter__form");
    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}
