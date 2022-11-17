import { useFormikContext } from "formik";
import { MutableRefObject, useMemo } from "react";
import { useMutation } from "react-query";
import { toast, ToastOptions } from "react-toastify";
import RequestFetchError from "../../errors/request-fetch-error/request-fetch-error";
import useResponseErrorStore from "../../stores/response-error/response-error";
import useSelectedFilesStore from "../../stores/selected-files/selected-files";

export type UseSendEmailsArguments = {
  fileRef: MutableRefObject<HTMLInputElement | null>;
  emails?: string[];
};

const toastErrorOption: ToastOptions = {
  type: "error",
};

const useSendEmails = ({
  fileRef,
  emails: propertiesEmails,
}: UseSendEmailsArguments) => {
  const { setSelectedFiles } = useSelectedFilesStore();
  const { values } =
    useFormikContext<{
      emails: string[];
    }>() ?? {};
  const emails = useMemo(() => {
    const { emails: contextEmails } = Object(values);
    return propertiesEmails || contextEmails;
  }, [values, propertiesEmails]);
  const { setResponseError } = useResponseErrorStore();

  return useMutation({
    mutationKey: ["emails", emails],
    mutationFn: async ({
      emails,
      onSuccess,
    }: {
      emails: string[];
      onSuccess?: Function;
    }) => {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL as string,
        {
          method: "POST",
          body: JSON.stringify({ emails }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        const responseContent = await response.json();
        throw new RequestFetchError(responseContent);
      }
      onSuccess && onSuccess();
      return response;
    },
    onError: (error) => {
      if (error instanceof RequestFetchError) {
        setResponseError(error.json);
        toast(error.json.error, toastErrorOption);
      } else {
        toast("Error has occurred", toastErrorOption);
      }
    },
    onSuccess: () => {
      setSelectedFiles(null);
      setResponseError(null);
      if (fileRef.current) {
        fileRef.current.value = "";
      }
      toast("Succesfully sended emails", { type: "success" });
    },
  });
};

export default useSendEmails;
