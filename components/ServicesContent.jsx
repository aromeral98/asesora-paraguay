import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import ShareBar from './shared/ShareBar'
import Link from 'next/link'

export default function ServicesContent() {
    return (
        <div className="max-w-7xl mx-auto px-5 bg-white text-center">
            <section className="container space-y-4 lg:space-y-8 py-8 text-center mx-auto px-5 active">
                <h2 className="text-secondaryColor text-xl lg:text-4xl font-medium leading-tight lg:leading-relaxed text-center">
                    Residency
                </h2>
                <p className="text-dark lg:text-lg">
                    Are you <strong>considering a move to South America?</strong> Look no further than Paraguay, a hidden gem that is quickly gaining popularity among <strong>expats and digital nomads</strong> alike.
                </p>
                <p className="text-dark lg:text-lg">
                    Obtaining <strong>residency in Paraguay</strong> is a relatively straightforward process, with clear requirements. To qualify, you&apos;ll need to prove a steady source of income, pass a background check, and provide a few other key documents. Once you&apos;re approved, you&apos;ll have the <strong>freedom to live and work in Paraguay</strong> for as long as you like.
                </p>
                <p className="text-dark lg:text-lg">
                    But residency is just the beginning. Paraguay offers a high quality of life at a low cost, with affordable housing, excellent healthcare, and a laid-back lifestyle that&apos;s hard to beat. Whether you&apos;re looking to retire in a peaceful, picturesque town or start a business in a bustling urban center, Paraguay has something to offer.
                </p>
                <p className="text-dark lg:text-lg">
                    So why not come and live in Paraguay? With its friendly people, rich culture, and stunning natural beauty, it&apos;s a place you won&apos;t soon forget. And with its <strong>affordable cost of living</strong>, you&apos;ll be able to enjoy everything the country has to offer without breaking the bank.
                </p>
                <p className="text-dark lg:text-lg">
                    When it comes to <strong>Paraguay residency requirements</strong>, there are a few key things to keep in mind. Keep reading to get all the details.
                </p>
            </section>
            <Link passHref={'/residency'} >
                    <span className="text-secondaryColor hover:text-red-700 cursor-pointer text-xl lg:text-2xl font-medium leading-tight lg:leading-relaxed text-center p">Go to residency requirements</span>
                </Link>
            <div className="flex justify-end my-8">
                <ShareBar />
            </div>
            <div className='relative block w-full'>
                <div className='flex flex-col sticky top-8'>
                    <div className='h-full w-full relative'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div >
    )
}
