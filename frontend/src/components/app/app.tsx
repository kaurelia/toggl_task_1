import AppProvider from "../app-provider/app-provider";
import AppWrapper from "../app-wrapper/app-wrapper";

const App = () => {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
};

export default App;
