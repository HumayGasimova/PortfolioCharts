import { createSlice } from "@reduxjs/toolkit";

type messagesListItem = {
    id: number,
    key: string,
    fullName: string,
    message: string,
    date: string,
    photo: string,
    action: string
  }

const initialState: any = {
    messagesList: [
        {
            id: 1,
            key: "person",
            fullName: "Peter Cruiser",
            message: "I'm sorry but I'm not sure how to help you with that problem",
            date: "Mar 15 3:55 PM",
            photo: "personPhoto1",
            action: "online"
        },
        {
            id: 2,
            key: "person",
            fullName: "Jimmy Changa",
            message: "All set! Now, text-[11px] font-normal to get to you now",
            date: "Mar 06 01:12 AM",
            photo: "personPhoto2",
            action: "offline"
        },
        {
            id: 3,
            key: "person",
            fullName: "Graham Cracker",
            message: "Are you ready to pickup your Delivery",
            date: "Feb 25 10:35 AM",
            photo: "personPhoto3",
            action: "online"
        },
        {
            id: 4,
            key: "person",
            fullName: "Donatella Nobatti",
            message: "Here are some products",
            date: "Feb 12 05:12 PM",
            photo: "personPhoto4",
            action: "online"
        },
        {
            id: 5,
            key: "person",
            fullName: "Anne Fibbiyon",
            message: "I'm sorry but I'm not sure how to set time.",
            date: "Jan 29 03:16 PM",
            photo: "personPhoto5",
            action: "offline"
        }
    ]
}

const meessagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        readAllMessages: (state) => {
            state.messagesList = []
        }
    }
});

export const { readAllMessages } = meessagesSlice.actions;
export default meessagesSlice.reducer;