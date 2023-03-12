import { FacebookIcon, TwitterIcon, TwitterShareButton, WhatsappIcon } from "react-share";

export default function ShareBar({title, description}) {
    return <div className="flex flex-row space-x-4">
        <FacebookIcon className="cursor-pointer icon" onClick={()=> alert('facebook')} round borderRadius={25} size={45} />
        <WhatsappIcon className="cursor-pointer icon" onClick={()=> alert('whatsapp')} round borderRadius={25} size={45} />
        <a aria-label={'Share on twitter'} href={`https://twitter.com/intent/tweet?text=${description}`} rel="noreferrer" target="_blank" data-size="large">
            <TwitterIcon className="cursor-pointer icon" round borderRadius={25} size={45} >
        </TwitterIcon>
        </a>
    </div>

}
