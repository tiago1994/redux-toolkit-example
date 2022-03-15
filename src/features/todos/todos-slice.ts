import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { request } from "http";

interface TodoType {
    userId: number;
    id: number;
    title: string;
    completed: false;
}

interface TodosType {
    todos: TodoType[];
    loading: boolean;
}

// Exemplo de createAsyncThunk, caso queira ler mais sobre: https://redux-toolkit.js.org/api/createAsyncThunk
export const getList = createAsyncThunk("todos/getList", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
});

const initialState: TodosType = {
    todos: [],
    loading: false
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Aqui sao os gatilhos para cada momento da request pending, fulfilled e rejected
        builder.addCase(getList.pending, (state) => {
            state.loading = true
        })
        // Aqui sao os gatilhos para cada momento da request pending, fulfilled e rejected
        builder.addCase(getList.fulfilled, (state, action) => {
            state.todos = action.payload
            state.loading = false
        })
    }
});

export default todosSlice.reducer;
