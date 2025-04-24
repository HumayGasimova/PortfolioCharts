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
            icon: "faFileLines",
            color: "rgb(240, 0, 117)"
        },
        {
            id: 2,
            key: "updates",
            header: "Updates Available",
            date: "2 days ago",
            icon: "faGem",
            color: "rgb(72, 0, 201)"
        },
        {
            id: 3,
            key: "orders",
            header: "New Order Received",
            date: "1 hour ago",
            icon: "faPizzaSlice",
            color: "rgb(34, 192, 60)"
        },
        {
            id: 4,
            key: "review",
            header: "New review received",
            date: "1 day ago",
            icon: "faEnvelope",
            color: "rgb(251, 188, 11)"
        },
        {
            id: 5,
            key: "registration",
            header: "22 verified registrations available",
            date: "2 hours ago",
            icon: "faUserCheck",
            color: "rgb(238, 51, 94)"
        },
        {
            id: 6,
            key: "project",
            header: "Project has been approved",
            date: "4 hours ago",
            icon: "faCircleCheck",
            color: "rgb(1, 98, 232)"
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