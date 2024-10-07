import { AppContext } from "./context/AppContext";
import { useLanguageStorage } from "./hooks/useLanguage/useLanguageStorage";
import { PortfolioPage } from "./pages/PortfolioPage";

function App() {
  return (
    <AppContext.Provider value={{ language: useLanguageStorage() }}>
      <PortfolioPage />
    </AppContext.Provider>
  );
}

export default App;
