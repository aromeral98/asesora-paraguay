import Image from "next/image";
import Link from "next/link";

export default function IndexCard({ title, description, href, src }) {
    return (
        <div className="p-5 rounded-xl shadow-lg bg-white">
            <div className="">
                <picture >
                    <Image width={576} height={432} src={src} alt="Trámites en el consulado" className="rounded-xl" />
                </picture>
            </div>

            <div className="flex flex-col space-y-5 px-5 pt-5">
                <h3 className="text-dark text-2xl font-medium text-secondaryColor">
                    {title}
                </h3>
                <p className="lg:text-lg leading-relaxed flex-grow">
                    {description}
                </p>
                <Link passHref href={href}>
                    <button className="text-primaryColor hover:text-secondaryColor hover:underline -mr-4 rounded-2xl border-2 p-2 px-4 hover:border-secondaryColor border-primaryColor decoration-primary items-center font-medium justify-end buttonTransition self-end flex flex-row" >Ver más
                    <svg className="ml-2" width="24" height="20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}
