import useResponseErrorStore from "../../stores/response-error/response-error";
import { FailedEmailWrapper, FailedIcon, Header } from "./faild-emails.styles";

const FailedEmails = () => {
  const { responseError } = useResponseErrorStore();

  return (
    (responseError?.emails && (
      <>
        <Header>Failed emails</Header>
        {responseError.emails.map((email, index) => {
          return (
            <FailedEmailWrapper key={`${email}-${index}`}>
              <FailedIcon className="material-symbols-outlined">
                cancel
              </FailedIcon>
              <span>{email}</span>
            </FailedEmailWrapper>
          );
        })}
      </>
    )) ?? <></>
  );
};

export default FailedEmails;
