import {atom} from "recoil"


export const countAtom = atom({
    key: "countAtom",
    default: 0,
})

export const evenSelector = atom({
    key:"evenSelector",
    get:({get}) => {
        const count = get(countAtom);
        return count % 2 ;
    } 
})