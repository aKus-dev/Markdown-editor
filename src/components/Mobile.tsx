import { Tabs, Markdown, Preview } from '../components';
import { useTabActive } from '../global/tabActiveAtom';

export const Mobile = () => {

    const [tabActive] = useTabActive();

    return (
        <main className="lg:hidden p-[15px] min-h-screen overflow-x-hidden dark:bg-[#1b1b1b] flex flex-col gap-[15px]">
            <Tabs />

            {
                tabActive === 1
                    ? <Markdown />
                    : <Preview />
            }

        </main>
    )
}
