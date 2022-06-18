import Image from "next/image";
import Link from "next/link";

export default function IndexCard({ title, description, href, src }) {
    return (
        <article className='card mx-auto' style={{ maxWidth: 576 }}>
            <Image width={576} height={432} src={src} alt="Trámites en el consulado" className="card__img" />
            <div className="absolute z-50 top-0 rounded card__img flex justify-center">
                <h2 className='text-secondaryColor absolute bottom-10 mx-auto bg-white w-fit p-2 px-5 border-2 border-secondaryColor' style={{ borderRadius: '12px' }}>{title}</h2>
            </div>
            <Link passHref href={href}>
                <div className='card__data flex flex-col justify-between items-end'>
                    <div>
                        <h2 className='card__title text-secondaryColor mt-4 md:mt-8'>{title}</h2>
                        <p className='card__description'>{description}</p>
                    </div>
                    <p className='title text-xl absolute bottom-6 right-6' style={{ '--duration': '.5s' }}>
                        <span style={{ '--delay': '.5s' }}>Ver mas...</span>
                    </p>
                </div>
            </Link>
        </article>
    )
}
