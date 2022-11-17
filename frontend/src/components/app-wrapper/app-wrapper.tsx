import { useRef } from "react";
import Card from "../card/card";
import useSendEmails from "../../hooks/use-send-emails/use-send-emails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import GlobalStyles from "../global-styles/global-styles";
import usePreventDragEvent from "../../hooks/use-prevent-drag-event/use-prevent-drag-event";

const AppWrapper = () => {
  const fileRef = useRef<null | HTMLInputElement>(null);
  const { isLoading, mutate: sendEmails } = useSendEmails({
    fileRef,
  });
  usePreventDragEvent();

  return (
    <>
      <GlobalStyles />
      {isLoading ? (
        <>Please wait...</>
      ) : (
        <>
          <Formik<{ emails: string[] }>
            initialValues={{ emails: [] }}
            onSubmit={({ emails }, { resetForm }) => {
              sendEmails({ emails, onSuccess: resetForm });
            }}
          >
            <Card fileRef={fileRef} />
          </Formik>
          <ToastContainer />
        </>
      )}
    </>
  );
};
export default AppWrapper;
