import create from "zustand";

type SelectedFilesStore = {
  selectedFiles: FileList | null;
  emailsCounter: {
    [key: string]: number;
  } | null;
  setSelectedFiles: (
    selectedFiles: SelectedFilesStore["selectedFiles"],
  ) => void;
  setEmailsCounter: (
    emailsCounter: SelectedFilesStore["emailsCounter"],
  ) => void;
};

const useSelectedFilesStore = create<SelectedFilesStore>((set) => {
  return {
    selectedFiles: null,
    emailsCounter: {},
    setSelectedFiles: (selectedFiles: SelectedFilesStore["selectedFiles"]) => {
      set(() => {
        return { selectedFiles };
      });
    },
    setEmailsCounter: (emailsCounter: SelectedFilesStore["emailsCounter"]) => {
      set(() => {
        return { emailsCounter };
      });
    },
  };
});

export default useSelectedFilesStore;
