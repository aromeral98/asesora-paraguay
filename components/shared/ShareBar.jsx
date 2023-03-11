import { FacebookIcon, TwitterIcon, TwitterShareButton, WhatsappIcon } from "react-share";

export default function ShareBar() {
    return <div className="flex flex-row space-x-4">
        <FacebookIcon className="cursor-pointer icon" onClick={()=> alert('facebook')} round borderRadius={25} size={45} />
        <WhatsappIcon className="cursor-pointer icon" onClick={()=> alert('whatsapp')} round borderRadius={25} size={45} />
        <TwitterIcon className="cursor-pointer icon" onClick={()=> alert('twitter')} round borderRadius={25} size={45} >
        </TwitterIcon>
    </div>

}
