import { v4 as uuid } from 'uuid';

const {createSlice} = require("@reduxjs/toolkit");

const addZoneAction = (state, action) =>
{
    state.value.push(action.payload);
};

const addZoneItemAction = (state, action) =>
{
    state.value.map((zone) => {
        if (zone.zoneID === action.payload.zoneID)
        {
            zone.zoneItems = [...action.payload.zoneItems];
        }
    });
};

const removeZoneAction = (state, action) =>
{
    state.value = state.value.filter((zone) => zone.zoneID !== action.payload.zoneID);
};

const editZoneAction = (state, action) =>
{
    state.value.map((zone) => {
        if (zone.zoneID === action.payload.zoneID)
        {
            zone.zoneName = action.payload.zoneName;
            zone.zoneColor = action.payload.zoneColor;
        }
    });
};

const editZoneItemsAction = (state, action) =>
{
    state.value.map((zone) => {
        if (zone.zoneID === action.payload.zoneID)
        {
            let filteredZoneItems = zone.zoneItems.filter((zoneItem) => zoneItem.foodID === action.payload.foodID);

            if (filteredZoneItems.length !== 0)
            {
                filteredZoneItems[0].quantity = action.payload.quantity;
            }
            else
            {
                zone.zoneItems.push({foodID: action.payload.foodID, quantity: action.payload.quantity});
            }
        }
    });
};

const zoneSlice = createSlice({
    name: "zones",
    initialState: {
        value: [
            {zoneID: uuid(), zoneName: "Left Cabinet", zoneColor: "#FFFFFF", zoneItems: []},
            {zoneID: uuid(), zoneName: "Pantry - Top Shelf", zoneColor: "#F2F2F2", zoneItems: []},
            {zoneID: uuid(), zoneName: "Unassigned", zoneColor: "#a8a1a1", zoneItems: []},
        ]
    },
    reducers: {
        addZone: (state, action) => addZoneAction(state, action),
        removeZone: (state, action) => removeZoneAction(state, action),
        editZone: (state, action) => editZoneAction(state, action),
        editZoneItems: (state, action) => editZoneItemsAction(state, action)
    }
});

export const { addZone, removeZone, editZone, editZoneItems} = zoneSlice.actions;
export default zoneSlice.reducer;