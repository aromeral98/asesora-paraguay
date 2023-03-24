import Image from "next/image";
import Link from "next/link";

export default function IndexCard({ title, description, href, src }) {
    return (
        <article className='card mx-auto content cursor-pointer lg:hover:scale-105 transition-all duration-300' style={{ maxWidth: 576 }}>
        <Link passHref href={href}>
             <div className='content-overlay z-10' />
        </Link> 
             <Image width={576} height={432} src={src} alt="Trámites en el consulado" className="card__img" />
        <Link passHref href={href}>
            <div className='content-details fadeIn-bottom text-white w-9/12 z-20'>
              <h3 className='uppercase text-lg md:text-2xl mb-5'>{title}</h3>
              <p className='content-text text-md font-thin hidden md:block'>{description}</p>
            </div>
        </Link> 
        </article>
    )
}
