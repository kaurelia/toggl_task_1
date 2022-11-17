import { useFormikContext } from "formik";
import { useEffect } from "react";
import useSelectedFilesStore from "../../stores/selected-files/selected-files";

const useTransformFiles = () => {
  const { selectedFiles, setEmailsCounter } = useSelectedFilesStore();
  const { setFieldValue } = useFormikContext<{
    emails: string[];
  }>();

  useEffect(() => {
    (async () => {
      if (selectedFiles) {
        const { emails: allEmails, emailsCounter } = await [
          ...selectedFiles,
        ].reduce(
          async (accumulatorPromise, file) => {
            const emailsPromise = file.text();
            const [emails, { emails: accumulatorEmails, emailsCounter }] =
              await Promise.all([emailsPromise, accumulatorPromise]);
            const splittedEmails = emails.split(/\r?\n/).filter(Boolean);
            emailsCounter[file.name] = splittedEmails.length;
            return {
              emails: [...accumulatorEmails, ...splittedEmails],
              emailsCounter,
            };
          },
          Promise.resolve({
            emails: [] as string[],
            emailsCounter: {} as {
              [key: string]: number;
            },
          }),
        );
        setEmailsCounter(emailsCounter);
        setFieldValue("emails", allEmails);
      }
    })();
  }, [selectedFiles]);
};

export default useTransformFiles;
