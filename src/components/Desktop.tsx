import { Tabs, Markdown, Preview } from '.';
import { useTabActive } from '../global/tabActiveAtom';

export const Desktop = () => {

    const [tabActive] = useTabActive();

    return (
        <main className="hidden lg:flex p-[15px] min-h-screen overflow-x-hidden bg-[#1b1b1b] flex-col gap-[15px]">

            <div className="grid grid-cols-2 gap-4 h-[45px]">
                <div className="flex-grow px-4 py-2 rounded-t-[8px] text-white border border-white">
                    <p>Markdown</p>
                </div>
                <div className="flex-grow px-4 py-2 rounded-t-[8px] text-white border border-white">
                    <p>Preview</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Markdown />
                <Preview />
            </div>
        </main>
    )
}
