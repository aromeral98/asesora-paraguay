import { useEffect, useState } from "react";
import { FacebookIcon, TelegramIcon, TwitterIcon, TwitterShareButton, WhatsappIcon } from "react-share";

export default function ShareBar({title = '', description = "We offer advisory services for residency processing in Paraguay to foreigners, especially for digital nomads and freelancers who want to pay less taxes."}) {
    const [shareRoute, setshareRoute] = useState('')
    useEffect(() => {
    if(typeof window !== 'undefined'){
        setshareRoute(window.location.href)
    }
    }, [])
    
    return <div className="flex flex-row space-x-4">
        <a aria-label={'Share on facebook'} href={`https://www.facebook.com/sharer/sharer.php?u=${shareRoute}`} rel="noreferrer" target="_blank" data-action="share/facebook/share">
        <FacebookIcon className="cursor-pointer icon" round borderRadius={25} size={45} />
        </a>
        <a aria-label={'Share on whatsapp'} href={`whatsapp://send?text=${shareRoute}`} rel="noreferrer" target="_blank" data-action="share/whatsapp/share">
        <WhatsappIcon className="cursor-pointer icon" round borderRadius={25} size={45} />
        </a>
        <a aria-label={'Share on twitter'} href={`https://twitter.com/intent/tweet?text=${shareRoute}`} rel="noreferrer" target="_blank" data-size="large">
            <TwitterIcon className="cursor-pointer icon" round borderRadius={25} size={45} >
        </TwitterIcon>
        </a>
        <a aria-label={'Share on telegram'} href={`https://t.me/share/url?url=${shareRoute}&text=${(title)}`} rel="noreferrer" target="_blank" data-size="large">

        <TelegramIcon className="cursor-pointer icon" round borderRadius={25} size={45}></TelegramIcon>
        </a>

    </div>

}
