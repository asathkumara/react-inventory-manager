import { v4 as uuid } from 'uuid';

const {createSlice} = require("@reduxjs/toolkit");

/**
 * Action for adding zones
 * @param state The state of the store
 * @param action The action to be dispatched
 */
const addZoneAction = (state, action) =>
{
    state.value.push(action.payload);
};

/**
 * Discards all the zone items from the given zone
 * @param state
 * @param zoneToBeRemoved
 */
const discardZoneItems = (state, zoneToBeRemoved) => {
    state.value.map((zone) => {
        if (zone.zoneName === "Unassigned")
        {
            debugger;
            if (zone.zoneItems.length !== 0)
            {
                zone.zoneItems.forEach((zoneItem, index) => {
                    zoneItem.quantity = Number(zoneItem.quantity) + Number(zoneToBeRemoved.zoneItems[index].quantity);
                });
            }
            else
            {
                zoneToBeRemoved.zoneItems.forEach((zoneItem) => zone.zoneItems.push(zoneItem));
            }
        }
    });
}

/**
 * Action for removing zones
 * @param state The state of the store
 * @param action The action to be dispatched
 */
const removeZoneAction = (state, action) =>
{
    debugger;
    let zoneToBeRemoved = state.value.filter((zone) => zone.zoneID == action.payload.zoneID)[0];
    discardZoneItems(state, zoneToBeRemoved)
    state.value = state.value.filter((zone) => zone.zoneID !== action.payload.zoneID);
};

/**
 * Action for editing zones
 * @param state The state of the store
 * @param action The action to be dispatched
 */
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

/**
 * Action for editing zone items
 * @param state The state of the store
 * @param action The action to be dispatched
 * @remark: If the zone item does not exist, it will be created. Otherwise, it'll just be modified.
 */
const editZoneItemsAction = (state, action) =>
{
    state.value.map((zone) => {
        if (zone.zoneID === action.payload.zoneID)
        {
            let zonesContainingFood = zone.zoneItems.filter((zoneItem) => zoneItem.foodID === action.payload.foodID);

            if (zonesContainingFood.length !== 0)
            {
                zonesContainingFood[0].quantity = action.payload.quantity;
            }
            else
            {
                zone.zoneItems.push({foodID: action.payload.foodID, quantity: action.payload.quantity});
            }
        }
    });
};

/**
 * Reducer for zone
 *
 * @remark: Unique ids are generated using the uuid package.
 */
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