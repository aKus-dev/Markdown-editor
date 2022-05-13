import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

const textAtom = atomWithStorage('markdown-text', '');


export const useText = () => {
    return useAtom(textAtom);
}