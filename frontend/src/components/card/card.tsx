import { MutableRefObject } from "react";
import useTransformFiles from "../../hooks/use-transform-files/use-transform-files";
import AttachedFiles from "../attached-files/attached-files";
import DropArea from "../drop-area/drop-area";
import FailedEmails from "../failed-emails/failed-emails";
import Header from "../header/header";
import SubmitButton from "../submit-button/submit-button";
import { Wrapper } from "./card.styles";

type CardProperties = {
  fileRef: MutableRefObject<HTMLInputElement | null>;
};

const Card = ({ fileRef }: CardProperties) => {
  useTransformFiles();
  return (
    <Wrapper>
      <Header />
      <DropArea fileRef={fileRef} />
      <AttachedFiles />
      <SubmitButton />
      <FailedEmails />
    </Wrapper>
  );
};
export default Card;
