// import Link from "next/link"; // Nicht mehr benötigt
// import { Button } from "@/components/ui/button"; // Nicht mehr benötigt

export default function LegalNoticePage() {
    return (
        <div className="max-w-2xl w-full space-y-6 pb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Legal Notice</h1>
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto dark:prose-invert">
            <h2 className="text-2xl font-semibold">Information according to § 5 TMG</h2>
            <p>
                Ghulammustafa Kakar<br />
                Karlstraße 6A<br />
                38300 Wolfenbüttel
            </p>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p>
                E-mail: ghulammustafa@kakar.dev
            </p>
            <h2 className="text-2xl font-semibold">Disclaimer</h2>
            <p>We are responsible for the content of our Internet pages according to the provisions of general law, in particular according to Section 7 (1) of the German Telemedia Act. All contents are created with due care and to the best of our knowledge. Insofar as we refer to the Internet pages of third parties by means of hyperlinks on our Internet pages, we cannot assume any guarantee for the continuous topicality, correctness and completeness of the linked contents, as these contents are outside our area of responsibility and we have no influence on the future design. If, in your opinion, any content violates applicable law or is inappropriate, please let us know.</p>
            <p>The legal information on this page as well as all questions and disputes in connection with the design of this website are subject to the laws of the Federal Republic of Germany.</p>
            <h2 className="text-2xl font-semibold">Copyright notice</h2>
            <p>The texts, images, photos, videos or graphics available on our website are generally subject to copyright protection. Any unauthorized use (especially copying, editing or distribution) of this copyright-protected content is therefore prohibited. If you intend to use this content or parts thereof, please contact us in advance using the details above. If we are not the owner of the required copyrighted rights of use ourselves, we will endeavor to arrange contact with the entitled party.</p>
        </div>
    </div>
    );
} 

// TODO: One page (english route) with Next.js-i18n translation