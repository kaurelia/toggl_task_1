import { useEffect } from "react";
import { rootElement } from "../..";

const usePreventDragEvent = () => {
  useEffect(() => {
    ["drop", "dragenter", "dragleave", "dragover"].forEach((eventName) => {
      rootElement.addEventListener(eventName, (event) => {
        event.preventDefault();
      });
    });
  }, []);
};

export default usePreventDragEvent;
