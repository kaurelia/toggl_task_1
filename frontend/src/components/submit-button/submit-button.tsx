import { useFormikContext } from "formik";
import { Wrapper } from "./submit-button.styles";

const SubmitButton = () => {
  const { submitForm } = useFormikContext<{
    emails: string[];
  }>();

  return (
    <Wrapper role="button" onClick={submitForm}>
      Upload files
    </Wrapper>
  );
};

export default SubmitButton;
