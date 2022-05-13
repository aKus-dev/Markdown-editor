import { atom, useAtom } from "jotai";

const tabActiveAtom = atom(1);

export const useTabActive = () => {
    return useAtom(tabActiveAtom);
}