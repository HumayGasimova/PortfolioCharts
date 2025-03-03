import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    employersList: [{name: "ssdsd", surname: "sdsd"}]
}

const employersSlice = createSlice({
    name: "employers",
    initialState,
    reducers: {
        addEmployer: (state, action) => {
            state.employersList.push(action.payload)
            
            console.log("ss",state.employersList)

        }
    }
});

export const { addEmployer } = employersSlice.actions;
export default employersSlice.reducer;