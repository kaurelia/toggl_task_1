import useSelectedFilesStore from "../../stores/selected-files/selected-files";
import {
  Counter,
  FileIcon,
  FilenameWrapper,
  Wrapper,
} from "./attached-file.styles";

const AttachedFiles = () => {
  const { selectedFiles, emailsCounter } = useSelectedFilesStore();
  return (
    selectedFiles && (
      <>
        {[...selectedFiles].map(({ name }, index) => {
          return (
            <Wrapper key={`${name}-${index}`}>
              <FileIcon className="material-symbols-outlined">
                description
              </FileIcon>
              <FilenameWrapper>
                {name} <Counter>{emailsCounter?.[name] || 0}</Counter>
              </FilenameWrapper>
            </Wrapper>
          );
        })}
      </>
    )
  );
};

export default AttachedFiles;
