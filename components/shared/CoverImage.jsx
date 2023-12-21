import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import cover from '../../public/img/coverimage.webp'

export default function CoverImage() {
    const { t } = useTranslation('global')
  const router = useRouter()
  const titles = [
    {title: "Freelancers' Guide to Moving to Paraguay: Benefits and requiriments", subtitle: t('freelance'), path: '/[lang]/move-to-paraguay-as-a-freelancer'},
    {title: 'Certificados', subtitle: 'Certificados', path: '/[lang]/certificates'},
    {title: 'Obtener Ciudadania en Paraguay', subtitle: 'Ciudadania', path: '/[lang]/citizenship'},
    {title: "Available services on Asesora Paraguay", subtitle: 'Services', path: '/[lang]/services'},
    {title: "Obtaining Residency in Paraguay: Requirements and Process", subtitle: t('residence'), path: '/[lang]/residency'},
    {title: 'Tramites', subtitle: 'Tramites en Paraguay', path: '/[lang]/procedures'},
    {title: "Contact Asesora Paraguay's Team", subtitle: t('contact.form.contact'), path: '/[lang]/contact'}
  ]
  const caption = titles.find(routes => router.route === routes.path)
  return (
    <div className="aspect-w-16 aspect-h-6 lg:aspect-h-3 relative">
      <div className="absolute w-full h-full bg-black/70 z-10"></div>
      <picture className="absolute w-full h-full">
        <Image src={cover} layout='fill' alt="Trámite Paraguay" className="h-full w-full object-cover" />
      </picture>
      <section className="text-center h-full w-full flex items-center justify-center flex-col z-20 py-28">
        <h1 className="text-xl lg:text-3xl text-white px-8 font-medium uppercase lg:max-w-3xl z-10">{caption?.title}</h1>
        <div className="flex text-white text-sm lg:text-base space-x-2 mt-4 font-normal z-10">
          <p>
            <Link passHref href='/'>
              <span className="cursor-pointer underline">{t('home')}</span>
            </Link>
            <meta content="1" />
          </p>
          <span>/</span>
          <p>
            <h1 className="underline cursor-default">{caption?.subtitle}</h1>
            <meta content="2" />
          </p>
        </div>
      </section>
    </div>
  )
}
