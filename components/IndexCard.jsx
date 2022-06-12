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
                <div className='card__data'>
                    <h2 className='card__title text-secondaryColor'>{title}</h2>
                    <p className='card__description'>{description}</p>
                    <button className='card__btn absolute bottom-6 right-6'>Ver más ...</button>
                </div>
            </Link>
        </article>
    )
}
