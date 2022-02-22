import { v4 as uuid } from 'uuid';

const {createSlice} = require("@reduxjs/toolkit");

/**
 * Action for adding food
 * @param state The state of the store
 * @param action The action to be dispatched
 */
const addFoodAction = (state, action) =>
{
    state.value.push(action.payload);
};

/**
 * Reducer for food
 *
 * @remark: Unique ids are generated using the uuid package.
 */
const foodSlice = createSlice({
    name: "food",
    initialState: {
        value: [
            {foodID: uuid(), foodName: "White Rice", barcodeNumber: "2EA151", foodUnits: "grams", restockLevel: 1},
            {foodID: uuid(), foodName: "Brown Rice", barcodeNumber: "2EA152", foodUnits: "grams", restockLevel: 1},
            {foodID: uuid(), foodName: "Thrice Washed Lettuce", barcodeNumber: "2EA153", foodUnits: "grams", restockLevel: 1}
        ]
    },
    reducers: {
        addFood: (state, action) => addFoodAction(state, action)
    }
});

export const { addFood } = foodSlice.actions;
export default foodSlice.reducer;