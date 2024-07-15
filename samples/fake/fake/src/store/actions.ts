import type { Action } from "redux";

export type SetTodayAction = Action<"setToday"> & {
  today: string;
};

export type Actions = SetTodayAction;
