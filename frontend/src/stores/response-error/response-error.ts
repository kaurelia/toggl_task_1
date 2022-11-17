import create from "zustand";
import ResponseError from "../../types/respons-error/response-error";

type ResponseErrorStore = {
  responseError: ResponseError | null;
  setResponseError: (
    responseState: ResponseErrorStore["responseError"],
  ) => void;
};

const useResponseErrorStore = create<ResponseErrorStore>((set) => {
  return {
    responseError: null,
    setResponseError: (responseError: ResponseErrorStore["responseError"]) => {
      set(() => {
        return { responseError };
      });
    },
  };
});

export default useResponseErrorStore;
