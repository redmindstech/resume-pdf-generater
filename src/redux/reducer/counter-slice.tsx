import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import rootReducer from "./reducers";


type EduType = {
    heading: string;
    name: string;
    location: string;
    degree: string;
    major: string;
    gpa: string;
    start_date: string;
    end_date: string;
};

const initialState: EduType = {
    heading: "",
    name: "",
    location: "",
    degree: "",
    major: "",
    gpa: "",
    start_date: "",
    end_date: "",
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            // state.education
        },
        amountAdded(state, action: PayloadAction<EduType>){
            console.log('payload', action.payload)
            state = action.payload 
        }
    }
})


export const {increment, amountAdded} = counterSlice.actions
export default counterSlice.reducer
