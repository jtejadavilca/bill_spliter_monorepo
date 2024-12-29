import { IoExitOutline, IoHomeOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { MdHistory } from "react-icons/md";

import { IconType } from "react-icons/lib";

interface MenuOption {
    title: string;
    className?: string;
    to?: string;
    onClick?: (callback?: Function) => void;
    icon: IconType;
}

export const menuOptions: MenuOption[] = [
    {
        title: "Home",
        to: "/",
        icon: IoHomeOutline,
    },
    {
        title: "Groups",
        to: "/groups",
        icon: GrGroup,
    },
    {
        title: "History",
        to: "/history",
        icon: MdHistory,
    },
    {
        title: "Logout",
        className: "last:!mt-20 pt-4 border-t-2 border-gray-200 dark:border-gray-700",
        icon: IoExitOutline,
        onClick: (callback) => {
            if (callback) {
                callback();
            }
        },
    },
];
