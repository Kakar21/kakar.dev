"use client";

import { useLanguage } from "@/contexts/language-context";

export default function ImpressumPage() {
    const { language } = useLanguage();

    return (
        <div className="max-w-2xl w-full space-y-6 pb-12">
            {language === "de" ? (
                <>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-10">Impressum</h1>
                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto dark:prose-invert">
                        <h2 className="text-2xl font-semibold !mb-0">Angaben gem. § 5 TMG</h2>
                        <p>
                            Ghulammustafa Kakar<br />
                            Karlstraße 6A<br />
                            38300 Wolfenbüttel
                        </p>
                        <h2 className="text-2xl font-semibold !mb-0">Kontakt</h2>
                        <p>
                            E-Mail: ghulammustafa@kakar.dev
                        </p>
                        <h2 className="text-2xl font-semibold !mb-0">Haftungsausschluss</h2>
                        <p>Wir sind für die Inhalte unserer Internetseiten nach den Maßgaben der allgemeinen Gesetzen, insbesondere nach § 7 Abs. 1 des Telemediengesetzes, verantwortlich. Alle Inhalte werden mit der gebotenen Sorgfalt und nach bestem Wissen erstellt. Soweit wir auf unseren Internetseiten mittels Hyperlink auf Internetseiten Dritter verweisen, können wir keine Gewähr für die fortwährende Aktualität, Richtigkeit und Vollständigkeit der verlinkten Inhalte übernehmen, da diese Inhalte außerhalb unseres Verantwortungsbereichs liegen und wir auf die zukünftige Gestaltung keinen Einfluss haben. Sollten aus Ihrer Sicht Inhalte gegen geltendes Recht verstoßen oder unangemessen sein, teilen Sie uns dies bitte mit.</p>
                        <p>Die rechtlichen Hinweise auf dieser Seite sowie alle Fragen und Streitigkeiten im Zusammenhang mit der Gestaltung dieser Internetseite unterliegen dem Recht der Bundesrepublik Deutschland.</p>
                        <h2 className="text-2xl font-semibold !mb-0">Urheberrechtshinweis</h2>
                        <p>Die auf unserer Internetseite vorhandenen Texte, Bilder, Fotos, Videos oder Grafiken unterliegen in der Regel dem Schutz des Urheberrechts. Jede unberechtigte Verwendung (insbesondere die Vervielfältigung, Bearbeitung oder Verbreitung) dieser urheberrechtsgeschützten Inhalte ist daher untersagt. Wenn Sie beabsichtigen, diese Inhalte oder Teile davon zu verwenden, kontaktieren Sie uns bitte im Voraus unter den oben stehenden Angaben. Soweit wir nicht selbst Inhaber der benötigten urheberrechtlichen Nutzungsrechte sein sollten, bemühen wir uns, einen Kontakt zum Berechtigten zu vermitteln.</p>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-10">Legal Notice</h1>
                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto dark:prose-invert">
                        <h2 className="text-2xl font-semibold !mb-0">Information according to § 5 TMG</h2>
                        <p>
                            Ghulammustafa Kakar<br />
                            Karlstraße 6A<br />
                            38300 Wolfenbüttel
                        </p>
                        <h2 className="text-2xl font-semibold !mb-0">Contact</h2>
                        <p>
                            E-mail: ghulammustafa@kakar.dev
                        </p>
                        <h2 className="text-2xl font-semibold !mb-0">Disclaimer</h2>
                        <p>We are responsible for the content of our Internet pages according to the provisions of general law, in particular according to Section 7 (1) of the German Telemedia Act. All contents are created with due care and to the best of our knowledge. Insofar as we refer to the Internet pages of third parties by means of hyperlinks on our Internet pages, we cannot assume any guarantee for the continuous topicality, correctness and completeness of the linked contents, as these contents are outside our area of responsibility and we have no influence on the future design. If, in your opinion, any content violates applicable law or is inappropriate, please let us know.</p>
                        <p>The legal information on this page as well as all questions and disputes in connection with the design of this website are subject to the laws of the Federal Republic of Germany.</p>
                        <h2 className="text-2xl font-semibold !mb-0">Copyright notice</h2>
                        <p>The texts, images, photos, videos or graphics available on our website are generally subject to copyright protection. Any unauthorized use (especially copying, editing or distribution) of this copyright-protected content is therefore prohibited. If you intend to use this content or parts thereof, please contact us in advance using the details above. If we are not the owner of the required copyrighted rights of use ourselves, we will endeavor to arrange contact with the entitled party.</p>
                    </div>
                </>
            )}
        </div>
    );
} 