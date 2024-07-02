import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { useViewPortHeight } from "./hooks/useViewPortHeight";
import { ThemeProvider } from "./providers/ThemeProvider";

const App = () => {

  const viewPortHeight = useViewPortHeight();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div style={{ height: viewPortHeight }} className="max-w-[1440px] flex flex-col px-4 m-auto">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  )
}

export default App;
