import { useEffect } from "react";

const usePreventScroll = (signal: boolean) => {
  useEffect(() => {
    if (signal) {
      const preventDefault = (event: any) => event.preventDefault();
      const options = { passive: false } as EventListenerOptions;

      document.body.addEventListener("wheel", preventDefault, options);
      document.body.addEventListener("touchmove", preventDefault, options);
      document.body.addEventListener("mouseWheel", preventDefault, options);
      document.body.addEventListener("DOMMouseScroll", preventDefault, options);

      // Cleanup function
      return () => {
        document.body.removeEventListener("wheel", preventDefault, options);
        document.body.removeEventListener("touchmove", preventDefault, options);
        document.body.removeEventListener(
          "mouseWheel",
          preventDefault,
          options
        );
        document.body.removeEventListener(
          "DOMMouseScroll",
          preventDefault,
          options
        );
      };
    }

    // No need for the else return; statement
  }, [signal]);
};

export default usePreventScroll;
