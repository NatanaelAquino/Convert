//cotação de moedas do dia 
const USD = 5.41
const EUR = 5.61
const GBP = 6.08
// Obetendo os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')
// Minupulando o input amount para receber somente numero
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})
// capturado o evento de submid do formulario
form.onsubmit = (event) => {
  event.preventDefault()
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}
//função para converter a moeda 
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1  = ${formatCurrencyBRL(price)}`
    // calcula o resultado total 
    let total = amount * price
     if(isNaN(total)){
      return alert("Por favor, digite o valor corretamente para converter")
     }
    total = formatCurrencyBRL(total).replace("R$", "")
    // Exibe o resultado total
    result.textContent = `${total} Reais`
    // Aplica a classe que exibe o footer para mostrar o resultado 
    footer.classList.add('show-result')
  } catch (error) {
    console.log(error)
    // Remove a classe do footer removendo ele da tela 
    footer.classList.remove('show-result')
    alert("Não foi possivel converter. tente novamente mais tarde")
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  // converte para numero para utilizar o tolocaleString
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}