import { useReducer } from "react";
import type { AppState } from "../store";
import type { SetTodayAction } from "../store/actions";
import { Div, Title, Subtitle } from "../components";
import { useInterval } from "../hooks";

export default function UseReducerClock() {
  const [{ today }, dispatch] = useReducer(
    (state: AppState, action: SetTodayAction) => {
      switch (action.type) {
        case "setToday":
          return { ...state, today: new Date().toLocaleTimeString() };
      }
      return state;
    },
    {
      today: new Date().toLocaleTimeString(),
    }
  );
  useInterval(() => {
    dispatch({ type: "setToday", today: new Date().toLocaleTimeString() });
  });
  return (
    <Div className="flex flex-col items-center justify-center mt-16">
      <Title className="text-5xl">UseReducerClock</Title>
      <Title className="mt-4 text-3xl">{today}</Title>
      <Subtitle className="mt-4 text-3xl">{today}</Subtitle>
    </Div>
  );
}
