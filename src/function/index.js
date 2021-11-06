export const takeIconCurrency = (str) => {
  switch (str) {
    case ('USD'):
      return "\u0024"
    case ('RUB'):
      return "\u20BD"
    default:
      return ""
  }
}

export const takeCurrency = (str) => {
  switch (str) {
    case ('USD'):
      return { name: 'RUB', icon: "\u20BD" }
    case ('RUB'):
      return {
        name: 'USD', icon: "\u0024"
      }
    default:
      return {
        name: 'USD', icon: "\u0024"
      }
  }
}

export const takeTargetCurrency = (str) => {
  switch (str) {
    case ('USD'):
      return 'RUB'
    case ('RUB'):
      return 'USD'
    default:
      return 'USD'
  }
}

export const takeSourceTarget = (str, ratio) => {
  switch (str) {
    case ('USDUSD'):
      return 1
    case ('USDRUB'):
      return ratio
    case ('RUBUSD'):
      return 1 / ratio
    case ('RUBRUB'):
      return 1
    default:
      return 1
  }
}
