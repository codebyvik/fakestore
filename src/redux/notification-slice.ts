import { notificationStateType } from "@/types/utils/notification.types";
import { createSlice } from "@reduxjs/toolkit";

const initialNotificationState: notificationStateType = {
  open: false,
  message: "",
  severity: "info",
};

const notificationSlice = createSlice({
  name: "products",
  initialState: initialNotificationState,
  reducers: {
    showToastNotification: (state, action) => {
      state.open = true;
      state.message = action?.payload?.message;
      state.severity = action?.payload?.severity;
    },

    hideToastNotification: (state) => {
      state.open = false;
      state.message = "";
      state.severity = "info";
    },
  },
});

export const { showToastNotification, hideToastNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
