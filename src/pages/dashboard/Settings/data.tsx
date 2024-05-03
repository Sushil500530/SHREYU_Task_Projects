

export interface SettingMenuType {
    id?: number;
    label?: string;
    icon?: string;
}

// list of chat users
const MENU: SettingMenuType[] = [
    {
        id: 1,
        label: "General",
        icon: "settings",
    },
    {
        id: 2,
        label: "Emails",
        icon: "email",
    },
    {
        id: 3,
        label: "Reports",
        icon: "",
    },
    {
        id: 4,
        label: "SMS",
        icon: "",
    },
    {
        id: 5,
        label: "Whatsapp",
        icon: "",
    },
    {
        id: 6,
        label: "Api Keys",
        icon: "",
    },

];


export { MENU };
