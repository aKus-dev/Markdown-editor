import { Tabs, Markdown, Preview } from './components';
import { useTabActive } from './global/tabActiveAtom';

const App = () => {

  const [tabActive] = useTabActive();

  return (
    <main className="p-[15px] min-h-screen overflow-x-hidden bg-[#1b1b1b] flex flex-col gap-[15px]">
      <Tabs />

      {
        tabActive === 1
          ? <Markdown />
          : <Preview />
      }

    </main>
  )
}

export default App;
