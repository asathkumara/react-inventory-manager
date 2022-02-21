import { v4 as uuid } from 'uuid';

const {createSlice} = require("@reduxjs/toolkit");

const addFoodAction = (state, action) =>
{
    console.log("Addfoodaction called", action.payload);
    state.value.push(action.payload);
};

const foodSlice = createSlice({
    name: "food",
    initialState: {
        value: [
            {foodID: uuid(), foodName: "White Rice", barcodeNumber: "2EA151", restockLevel: 1},
            {foodID: uuid(), foodName: "Brown Rice", barcodeNumber: "2EA152", restockLevel: 1},
            {foodID: uuid(), foodName: "Thrice Washed Lettuce", barcodeNumber: "2EA153", restockLevel: 1}
        ]
    },
    reducers: {
        addFood: (state, action) => addFoodAction(state, action)
    }
});

export const { addFood } = foodSlice.actions;
export default foodSlice.reducer;