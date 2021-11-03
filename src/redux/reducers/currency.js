import axios from 'axios'

const initialState = {
  ratio: 1,
  currency: 'RUB'
}

const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

export const currency = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_CURRENCY: {
      return { ...state, ratio: action.ratio, currency: action.currency }
    }
    default: return state
  }
}

// export function changeCurrency(currency) {
//   return (dispatch) => {
//     axios(`/api/v1/ratio/${currency}`).then(({ data: ratio }) => {
//       dispatch({ type: CHANGE_CURRENCY, ratio, currency });
//     });
//   };
// }