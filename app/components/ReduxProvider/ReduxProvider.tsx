"use client";
import React from "react";

import {store} from "../../../lib/store";

/* Core */
import {Provider} from "react-redux";

/* Instruments */

export const ReduxProvider = (props: React.PropsWithChildren) => {
    return <Provider store={store}>{props.children}</Provider>;
};