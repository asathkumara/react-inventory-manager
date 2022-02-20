import { v4 as uuid } from 'uuid';

const {createSlice} = require("@reduxjs/toolkit");

const addZoneAction = (state, action) =>
{
    state.value.push(action.payload);
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
        addZone: (state, action) => addZoneAction(state, action)
    }
});

export const { addZone } = zoneSlice.actions;
export default zoneSlice.reducer;