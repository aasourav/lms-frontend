import { useLayoutEffect, useRef } from "react";

export default function useWindowHeight() {
  const fullHeight = useRef<number>(0);

  useLayoutEffect(() => {
    function calibrate() {
      // setFullHeight(window.innerHeight);
      fullHeight.current = window.innerHeight;
    }
    calibrate();
    window.addEventListener("resize", calibrate);

    return () => {
      window.removeEventListener("resize", calibrate);
    };
  }, []);

  return fullHeight.current;
}
