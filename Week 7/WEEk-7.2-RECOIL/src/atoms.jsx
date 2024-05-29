import {atom, selector} from "recoil";
import { j } from "vite/dist/node/types.d-aGj9QkWt";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});


export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});


export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
});


export const messagingAtom = atom({
    key: "messagingAtom",
    default: 10
});

export const notificationSelector = selector({
    key: "notificationSelector",
    get: ({get}) =>{
        const networkAtom = get(networkAtom);
        const jobsAtom = get(jobsAtom);
        const messagingAtom = get(messagingAtom);
        const notificationsAtom = get(notificationsAtom);

        return networkAtom + jobsAtom + messagingAtom + notificationsAtom;
        
    }
})