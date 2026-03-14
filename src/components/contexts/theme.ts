import IconSun from "../../../public/images/icon-sun.svg"
import MoonIcon from "../../../public/images/icon-moon.svg"

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: "theme-light",
            backgroundColor: "bg-gray-300" ,
            textColor: "text-navy-850"
        },
        todo: {
            backgroundColor: "bg-gray-50",
            borderColor: "border-gray-600" ,
            textColor: "text-navy-850"
        },
        Icon: MoonIcon
    },
    dark: {
        name: 'dark',
        layout: {
            heroClass: "theme-dark",
            backgroundColor: "bg-navy-950" ,
            textColor: "text-gray-50"
        },
        todo: {
            backgroundColor: "bg-navy-900",
            borderColor: "border-purple-700" ,
            textColor: "text-gray-50"
        },
        Icon: IconSun
    }
}