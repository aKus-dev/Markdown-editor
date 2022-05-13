import { Tabs, Markdown, Preview } from '.';
import { useTabActive } from '../global/tabActiveAtom';

export const Desktop = () => {

    const [tabActive] = useTabActive();

    return (
        <main className="hidden lg:flex p-[15px] min-h-screen overflow-x-hidden bg-[#1b1b1b] flex-col gap-[15px]">


            <div className="grid grid-cols-2 gap-4">
                <Markdown />
                <Preview />
            </div>


        </main>
    )
}
