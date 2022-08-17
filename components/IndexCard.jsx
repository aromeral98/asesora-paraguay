import Image from "next/image";
import Link from "next/link";

export default function IndexCard({ title, description, href, src }) {
    return (
        <Link passHref href={href}>
        <article className='card mx-auto content cursor-pointer' style={{ maxWidth: 576 }}>
             <div className='content-overlay z-10' />
             <Image width={576} height={432} src={src} alt="Trámites en el consulado" className="card__img" />
            <div className='content-details fadeIn-bottom text-white w-9/12 z-20'>
              <h3 className='uppercase text-2xl mb-5'>{title}</h3>
              <p className='content-text text-md font-thin'>{description}</p>
            </div>
        </article>
        </Link> 
    )
}
