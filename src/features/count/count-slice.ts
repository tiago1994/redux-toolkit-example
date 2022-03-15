import { createSlice } from '@reduxjs/toolkit';

interface CountType {
  count: number;
}

const initialState: CountType = {
  count: 0
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    //Aqui tem um exemplo de reducers, podemos ter N possibilidades aqui, exemplo, uma funcao que limpa todo o teu initalState, ou somente alguns campos
    //Podemos te alguns helperzinhos aqui, podemos ter funcoes para popular inputs e etc
    // Aqui um exemplo de um reducer que utilizamos bastante
    // setField: (state, { payload }) => ({
    //   ...state,
    //   [payload.path]: payload.value
    // }),
    incrementCount(state) {
      state.count++;
    },
    decrementCount(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const { incrementCount, decrementCount, reset } = countSlice.actions;
export default countSlice.reducer;