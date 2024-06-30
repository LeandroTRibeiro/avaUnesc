import { ThemeProvider } from "./providers/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        Hello World!

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis eius in voluptatem maiores pariatur eveniet, odio nulla totam et, culpa repellat! Minima dolor quos vitae eaque ut tempora repudiandae recusandae?
      </div>
    </ThemeProvider>
  )
}

export default App;
