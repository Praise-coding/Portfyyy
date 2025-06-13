import {contactInfoType} from "@/app/Types";

export const DemoData = () : Promise<contactInfoType[]> => {
    return new Promise((resolve)=>{
        const data = [{
            contactType: "WhatsApp",
            contactDetails: "09038383838"
        },{
            contactType: "Email",
            contactDetails: "jackiechan@gmail.com"
        },{
            contactType: "Telegram",
            contactDetails: "9843834948"
        },]
        resolve(data)
    })
}