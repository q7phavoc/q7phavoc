import { useEffect } from "react";

export const useInterval = (callback: () => void, duration: number = 1000) => {
  useEffect(() => {
    // setInterval 의 인자로 callback 과 duration 을 세팅
    // clearInterval 을 return으로 호출
    let timer = setInterval(callback, duration);
    // return clearInterval(timer);
  }, [callback, duration]);
};
