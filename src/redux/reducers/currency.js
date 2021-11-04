import axios from "axios";

const CURRENCY_DATA = "CURRENCY_DATA";

const initialState = {
  value: "USD",
};

export const currency = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_DATA: {
      return {
        ...state,
        value: action.currencyValue,
        valueRUB: action.RUB,
        valueEUR: action.EUR,
        valueCAD: action.CAD,
      };
    }
    default:
      return state;
  }
};

export function getCurrencyData(currencyValue) {
  return (dispatch, getState) => {
    const store = getState();
    const { value: oldValue } = store.currency;
    axios(
      "http://api.exchangeratesapi.io/v1/latest?access_key=0a5213897f7f52e12c31f92ac0854a3f&base=USD&symbols=RUB,EUR,CAD"
    )
      .then((response) => {
        dispatch({
          type: CURRENCY_DATA,
          currencyValue,
          RUB: response.data.rates.RUB,
          EUR: response.data.rates.USD,
          CAD: response.data.rates.CAD,
        });
      })
      .catch(() => console.log("Что-то пошло не так"));

    if (oldValue !== currencyValue) {
      axios({
        method: "post",
        url: "/api/v1/logs",
        data: {
          time: +new Date(),
          action: `change currency from ${oldValue} to ${currencyValue}`,
        },
      }).catch((err) => console.log(err));
    }
  };
}
