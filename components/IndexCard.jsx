
export default function IndexCard({ title, description }) {
    return (
        <div className="p-5 rounded-xl shadow-lg bg-white">
            <div className="aspect-w-16 aspect-h-6">
                <picture>
                    <img loading="lazy" src="https://tramiteitalia.com/images/web/flags.jpg" alt="Trámites en el consulado" className="w-full h-full object-cover rounded-xl" />
                </picture>
            </div>

            <div className="flex flex-col space-y-5 px-5 pt-5">
                <h3 className="text-dark text-2xl font-medium">
                    {title}
                </h3>
                <p className="lg:text-lg leading-relaxed">
                    {description}
                </p>
                <a className="text-primary hover:text-secondary underline decoration-primary font-medium" href="https://tramiteitalia.com/es/consulado-italiano">Ver más</a>
            </div>
        </div>
    )
}
