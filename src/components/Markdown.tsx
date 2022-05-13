import { useText } from '../global/markdownAtom';

export const Markdown = () => {

    const [text, setText] = useText();

    return (
        <textarea
            className="dark:text-white resize-none outline-none h-[calc(100vh-90px)]  p-4 dark:bg-[#111111] border border-[#ced0d3]  dark:border-white rounded-[5px]"
            value={text}
            onChange={e => setText(e.target.value)}
        >

        </textarea>
    )
}
