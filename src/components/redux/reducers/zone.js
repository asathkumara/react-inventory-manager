import { v4 as uuid } from 'uuid';

const {createSlice} = require("@reduxjs/toolkit");

const addZoneAction = (state, action) =>
{
    state.value.push(action.payload);
};

const removeZoneAction = (state, action) =>
{
    state.value = state.value.filter((zone) => zone.zoneID !== action.payload.zoneID);
};


const zoneSlice = createSlice({
    name: "zones",
    initialState: {
        value: [
            {zoneID: uuid(), zoneName: "Left Cabinet", zoneColor: "#FFFFFF"},
            {zoneID: uuid(), zoneName: "Pantry - Top Shelf", zoneColor: "#F2F2F2"}
        ]
    },
    reducers: {
        addZone: (state, action) => addZoneAction(state, action),
        removeZone: (state, action) => removeZoneAction(state, action)
    }
});

export const { addZone, removeZone} = zoneSlice.actions;
export default zoneSlice.reducer;