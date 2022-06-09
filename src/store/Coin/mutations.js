// export default function () {
//   return {
//     SET_COIN (state, data) {
//       state.coin = data
//     }
//   }
// }

export const SET_COIN = (state, data) => {
  console.log('state', state)
  console.log('data', data)
  state.coin = data
}
