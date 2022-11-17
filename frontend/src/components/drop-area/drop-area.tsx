import { FileIcon, Input, Wrapper } from "./drop-area.styles";
import Text from "../text/text";
import { LegacyRef, MutableRefObject } from "react";
import useSelectedFilesStore from "../../stores/selected-files/selected-files";

type DropAreaProperties = {
  fileRef: MutableRefObject<HTMLInputElement | null>;
};

const DropArea = ({ fileRef }: DropAreaProperties) => {
  const { setSelectedFiles } = useSelectedFilesStore();
  return (
    <>
      <Input
        ref={fileRef as LegacyRef<HTMLInputElement> | undefined}
        multiple
        type="file"
        accept=".txt"
        id="emails"
        onChange={({ target: { files } }) => {
          setSelectedFiles(files);
        }}
      />
      <Wrapper
        onClick={() => {
          fileRef.current?.click();
        }}
        onDrop={(event) => {
          event.preventDefault();
          const { dataTransfer } = event;
          if (dataTransfer) {
            const { files } = dataTransfer;
            setSelectedFiles(files);
          }
        }}
      >
        <FileIcon className="material-symbols-outlined">description</FileIcon>
        <Text>Drag & Drop or click to upload files</Text>
      </Wrapper>
    </>
  );
};

export default DropArea;
