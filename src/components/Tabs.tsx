import { Reorder } from 'framer-motion';
import { useState } from 'react';
import { useTabActive } from '../global/tabActiveAtom';

export const Tabs = () => {

    const [tabs, setTabbs] = useState([1, 2])

    //* Controlan que no cambie a pestaña activa cuando esta haciendo drag
    const [tabActive, setTabActive] =  useTabActive();
    const [isDragging, setIsDragging] = useState(false);

    return (
        <Reorder.Group
            className="flex items-center gap-[15px] h-[45px]"
            axis="x"
            values={tabs}
            onReorder={setTabbs}
        >
            {
                tabs.map(tab => (
                    <Reorder.Item
                        key={tab}
                        value={tab}
                        className={`${tab === tabActive ? 'bg-[#111111]' : 'bg-[#2c2c2c]'} flex-grow px-4 py-2 rounded-t-[8px] text-white border border-white`}
                        whileDrag={{ cursor: 'grab' }}
                        whileHover={{ cursor: 'pointer' }}
                        onClick={() => {
                            if (isDragging) return;
                            setTabActive(tab)
                        }}
                        onDragStart={() => {
                            setIsDragging(true);
                        }}
                        onDragEnd={() => {
                            setTimeout(() => {
                                setIsDragging(false);
                            })
                        }}
                    >
                        {
                            tab === 1 ? 'Markdown' : 'Preview'
                        }
                    </Reorder.Item>
                ))
            }
        </Reorder.Group>
    )
}
