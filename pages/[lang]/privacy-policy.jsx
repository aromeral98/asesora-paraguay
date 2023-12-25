import { generateMetaData } from '../../utils/generateMetaData'

export default function privacyPolicy() {
    const seoData = {
        seoUrl: `https://asesoraparaguay.com/en/privacy-policy/`,
        metaTitle: "Asesora Paraguay - Privacy Policy",
        metaDescription: "Asesora Paraguay Priv",
      }
    
      return (
        <>
        {generateMetaData({ seo: seoData })}
        <article className="container mx-auto p-12 bg-white">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy for Asesora Paraguay</h1>
            <p className="mb-6">Effective Date: {new Date().toLocaleDateString()}</p>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
                <div className="pl-4">
                    <p className="mb-2">1.1 Information You Provide</p>
                    <p className="mb-2">We collect information you provide directly when using our services, such as filling out contact forms, subscribing to our newsletter, or interacting with our online platforms.</p>

                    <p className="mb-2">1.2 Automatic Information</p>
                    <p className="mb-2">When you visit our website, we automatically collect certain information about your device and online behavior using cookies and similar technologies. This information may include your IP address, browser type, visited pages, and other usage data.</p>
                </div>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">2. Use of Information</h2>
                <p className="mb-2">We use the collected information to:</p>

                <ul className="pl-4 list-disc">
                    <li>Provide and maintain our services.</li>
                    <li>Personalize and enhance the user experience.</li>
                    <li>Send promotional communications and newsletters (only with your explicit consent).</li>
                    <li>Comply with legal obligations.</li>
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">3. Sharing of Information</h2>
                <p className="mb-2">We do not sell or share your personal information with third parties without your explicit consent, except when necessary to provide our services or comply with legal obligations.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">4. Storage and Security</h2>
                <p className="mb-2">Your information is securely stored, and we take measures to protect it against unauthorized access, alteration, or destruction.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">5. Your Rights</h2>
                <p className="mb-2">You have the right to access, correct, or delete your personal information. You can exercise these rights by emailing us at <a href="mailto:ferrus95@gmail.com" className="text-blue-500">ferrus95@gmail.com</a>.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">6. Changes to the Privacy Policy</h2>
                <p className="mb-2">We reserve the right to update this Privacy Policy at any time. We will notify you of significant changes through postings on our website.</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">7. Contact</h2>
                <p className="mb-2">If you have questions about this Privacy Policy, contact us at <a href="mailto:ferrus95@gmail.com" className="text-blue-500">ferrus95@gmail.com</a>.</p>
            </section>
        </article>
        </>
    )
}
