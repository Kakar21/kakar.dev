import Link from "next/link";

export default function ImpressumPage() {
    return (
        <div className="max-w-2xl w-full space-y-6 pb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Impressum</h1>
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto dark:prose-invert">
            <h2 className="text-2xl font-semibold">Angaben gem. § 5 TMG</h2>
            <p>
                Ghulammustafa Kakar<br />
                Karlstraße 6A<br />
                38300 Wolfenbüttel
            </p>
            <h2 className="text-2xl font-semibold">Kontakt</h2>
            <p>
                E-Mail: ghulammustafa@kakar.dev
            </p>
            <h2 className="text-2xl font-semibold">Haftungsausschluss</h2>
            <p>Wir sind für die Inhalte unserer Internetseiten nach den Maßgaben der allgemeinen Gesetzen, insbesondere nach § 7 Abs. 1 des Telemediengesetzes, verantwortlich. Alle Inhalte werden mit der gebotenen Sorgfalt und nach bestem Wissen erstellt. Soweit wir auf unseren Internetseiten mittels Hyperlink auf Internetseiten Dritter verweisen, können wir keine Gewähr für die fortwährende Aktualität, Richtigkeit und Vollständigkeit der verlinkten Inhalte übernehmen, da diese Inhalte außerhalb unseres Verantwortungsbereichs liegen und wir auf die zukünftige Gestaltung keinen Einfluss haben. Sollten aus Ihrer Sicht Inhalte gegen geltendes Recht verstoßen oder unangemessen sein, teilen Sie uns dies bitte mit.</p>
            <p>Die rechtlichen Hinweise auf dieser Seite sowie alle Fragen und Streitigkeiten im Zusammenhang mit der Gestaltung dieser Internetseite unterliegen dem Recht der Bundesrepublik Deutschland.</p>
            <h2 className="text-2xl font-semibold">Urheberrechtshinweis</h2>
            <p>Die auf unserer Internetseite vorhandenen Texte, Bilder, Fotos, Videos oder Grafiken unterliegen in der Regel dem Schutz des Urheberrechts. Jede unberechtigte Verwendung (insbesondere die Vervielfältigung, Bearbeitung oder Verbreitung) dieser urheberrechtsgeschützten Inhalte ist daher untersagt. Wenn Sie beabsichtigen, diese Inhalte oder Teile davon zu verwenden, kontaktieren Sie uns bitte im Voraus unter den oben stehenden Angaben. Soweit wir nicht selbst Inhaber der benötigten urheberrechtlichen Nutzungsrechte sein sollten, bemühen wir uns, einen Kontakt zum Berechtigten zu vermitteln.</p>
        </div>
    </div>
    );
} 