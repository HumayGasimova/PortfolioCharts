import { createSlice } from "@reduxjs/toolkit";

type notificationsListItem = {
    id: 1,
    key: string,
    header: string,
    date: string,
    icon: string,
    color: string
  }

const initialState: any = {
    notificationsList: [
        {
            id: 1,
            key: "doc",
            header: "New files available",
            date: "10 hours ago",
            icon: "",
            color: ""
        },
        {
            id: 2,
            key: "updates",
            header: "Updates Available",
            date: "2 days ago",
            icon: "",
            color: ""
        },
        {
            id: 1,
            key: "orders",
            header: "New Order Received",
            date: "1 hour ago",
            icon: "",
            color: ""
        },
        {
            id: 1,
            key: "review",
            header: "New review received",
            date: "1 day ago",
            icon: "",
            color: ""
        },
        {
            id: 1,
            key: "registration",
            header: "22 verified registrations available",
            date: "2 hours ago",
            icon: "",
            color: ""
        },
        {
            id: 1,
            key: "project",
            header: "Project has been approved",
            date: "4 hours ago",
            icon: "",
            color: ""
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