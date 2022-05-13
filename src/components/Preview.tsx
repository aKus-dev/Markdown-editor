import { useEffect, useRef, useState } from 'react';
import Markdoc from '@markdoc/markdoc';

import { useText } from '../global/markdownAtom';

export const Preview = () => {

    const [text] = useText();
    const mdRef = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            const doc = text;
            const ast = Markdoc.parse(doc);
            const content = Markdoc.transform(ast);
            const html = Markdoc.renderers.html(content);

            const mdContainer = mdRef.current;
            mdContainer!.innerHTML = html;

        }, [text]
    )

    return (
        <div ref={mdRef} className="markdown-container overflow-auto overflow-x-hidden text-white resize-none outline-none h-[calc(100vh-30px)] p-4 bg-[#111111] border border-white rounded-[5px]">

        </div>
    )
}
