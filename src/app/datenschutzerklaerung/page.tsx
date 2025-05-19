"use client";

import { useLanguage } from "@/contexts/language-context";

export default function DatenschutzerklaerungPage() {
    const { language } = useLanguage();

    return (
        <div className="max-w-2xl w-full space-y-6 pb-12">
            {language === "de" ? (
                <>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-10">Datenschutzerklärung</h1>
                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto dark:prose-invert">
                        <h2 className="text-2xl font-semibold !mb-0">Einleitung</h2>
                        <p>Diese Website wird betrieben von: Ghulammustafa Kakar.</p>
                        <p>Es ist uns sehr wichtig, mit den Daten unserer Website-Besucher vertrauensvoll umzugehen und sie bestmöglich zu schützen. Aus diesem Grund leisten wir alle Anstrengungen, um die Anforderungen der DSGVO zu erfüllen.</p>
                        <p>Im Folgenden erläutern wir Ihnen, wie wir Ihre Daten auf unserer Webseite verarbeiten. Dazu verwenden wir eine möglichst klare und transparente Sprache, damit Sie wirklich verstehen, was mit Ihren Daten passiert.</p>

                        <h2 className="text-2xl font-semibold !mb-0">Allgemeine Informationen</h2>
                        <h3 className="text-xl font-semibold !mb-0">Verarbeitung von personenbezogenen Daten und andere Begriffe</h3>
                        <p>Datenschutz gilt bei der Verarbeitung von personenbezogenen Daten. Personenbezogen meint alle Daten, mit denen Sie persönlich identifiziert werden können. Das ist z.B. die IP-Adresse des Geräts (PC, Laptop, Smartphone, etc.) vor dem Sie gerade sitzen. Verarbeitet werden solche Daten dann, wenn ‚irgendetwas damit passiert‘. Hier wird z.B. die IP vom Browser an unseren Provider übermittelt und dort automatisch gespeichert. Das ist dann eine Verarbeitung (gemäß Art. 4 Nr. 2 DSGVO) von personenbezogenen Daten (nach Art. 4 Nr. 1 DSGVO).</p>
                        <p>Diese und weitere gesetzlichen Definitionen sind in Art. 4 DSGVO zu finden.</p>

                        <h3 className="text-xl font-semibold !mb-0">Anzuwendende Vorschriften/ Gesetze – DSGVO, BDSG und TTDSG</h3>
                        <p>Der Umfang des Datenschutzes wird durch Gesetze geregelt. Das sind in diesem Fall die DSGVO (Datenschutzgrundverordnung) als europäische Verordnung und das BDSG (Bundesdatenschutzgesetz) als nationales Gesetz.</p>
                        <p>Außerdem ergänzt das TTDSG die Vorschriften aus der DSGVO, soweit es sich um den Einsatz von Cookies handelt.</p>

                        <h3 className="text-xl font-semibold !mb-0">Der Verantwortliche</h3>
                        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist der Verantwortliche im Sinne der DSGVO. Das ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
                        <p>Den Verantwortlichen erreichen Sie unter:</p>
                        <p>Ghulammustafa Kakar<br />Karlstraße 6A<br />38300 Wolfenbüttel<br />ghulammustafa@kakar.dev</p>

                        <h3 className="text-xl font-semibold !mb-0">So werden Daten auf dieser Website grundsätzlich verarbeitet</h3>
                        <p>Wie wir bereits festgestellt haben, gibt es Daten (z.B. IP-Adresse) die automatisch erhoben werden. Diese Daten werden überwiegend für die technische Bereitstellung der Homepage benötigt. Soweit wir darüber hinaus personenbezogene Daten verwenden oder andere Daten erheben, klären wir Sie darüber auf bzw. fragen nach einer Einwilligung.</p>
                        <p>Andere personenbezogene Daten teilen Sie uns bewusst mit.</p>
                        <p>Detaillierte Informationen hierzu erhalten Sie weiter unten.</p>

                        <h3 className="text-xl font-semibold !mb-0">Ihre Rechte</h3>
                        <p>Die DSGVO stattet Sie mit umfassenden Rechten aus. Diese sind z.B. die unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Außerdem können Sie die Berichtigung, Sperrung oder Löschung dieser Daten verlangen oder sich bei der zuständigen Datenschutzaufsichtsbehörde beschweren. Eine erteilte Einwilligung können Sie jederzeit widerrufen.</p>
                        <p>Wie diese Rechte im Detail aussehen und wie sie wahrzunehmen sind, finden Sie im letzten Abschnitt dieser Datenschutzerklärung.</p>

                        <h3 className="text-xl font-semibold !mb-0">Datenschutz – Unsere Sicht</h3>
                        <p>Datenschutz ist für uns mehr als nur eine lästige Pflicht! Personenbezogene Daten haben einen großen Wert und ein achtsamer Umgang mit diesen Daten sollte in unserer digitalisierten Welt selbstverständlich sein. Außerdem sollen Sie als Website-Besucher in der Lage sein, selbst zu entscheiden, was, wann und durch wen mit Ihren Daten „passiert“. Deswegen verpflichten wir uns, alle gesetzlichen Bestimmungen einzuhalten, erheben nur die für uns notwendigen Daten und behandeln diese selbstverständlich vertraulich.</p>

                        <h3 className="text-xl font-semibold !mb-0">Weitergabe und Löschung</h3>
                        <p>Die Weitergabe und Löschung von Daten sind ebenfalls wichtige und sensible Themen. Deswegen möchten wir Sie vorab kurz über unsere generelle Herangehensweise hierzu informieren.</p>
                        <p>Eine Weitergabe der Daten findet nur aufgrund einer Rechtsgrundlage und nur dann statt, wenn dies unumgänglich ist. Dies kann insbesondere dann der Fall sein, wenn es sich um einen sogenannten Auftragsverarbeiter handelt und ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO geschlossen wurde.</p>
                        <p>Wir löschen Ihre Daten dann, wenn der Zweck und die Rechtsgrundlage zur Verarbeitung wegfallen und der Löschung zudem keine anderen gesetzlichen Verpflichtungen entgegenstehen. Einen ‚guten‘ Überblick darüber gibt auch Art. 17 DSGVO.</p>
                        <p>Alle weiterführenden Informationen entnehmen Sie bitte dieser Datenschutzerklärung und wenden sich bei konkreten Fragen an den Verantwortlichen.</p>

                        <h2 className="text-2xl font-semibold !mb-0">Hosting</h2>
                        <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei handelt es sich zum einen um die automatisch erhobenen und gespeicherten Logfiles (näheres dazu siehe unten), wie auch um alle sonstigen Daten, die die Website Besucher angeben.</p>
                        <p>Das externe Hosting erfolgt zum Zwecke einer sicheren, schnelle und zuverlässigen Bereitstellung unserer Website und dient in diesem Zusammenhang der Vertragserfüllung gegenüber unseren potentiellen und bestehenden Kunden.</p>
                        <p>Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a, b und f DSGVO, sowie § 25 Abs. 1 TTDSG, soweit eine Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Website Besuchers oder Users im Sinne des TTDSG umfasst.</p>
                        <p>Unser Hoster verarbeitet nur solche Daten, die zur Erfüllung seiner Leistungspflicht erforderlich sind und agiert als unser Auftragsverarbeiter, das heißt, er unterliegt unseren Weisungen. Wir haben einen entsprechenden Vertrag über die Auftragsverarbeitung mit unserem Hoster geschlossen.</p>
                        <p>Folgenden Hoster setzen wir ein:</p>
                        <p>IONOS<br />IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland.<br />info@ionos.de<br /><a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/">https://www.ionos.de/terms-gtc/datenschutzerklaerung/</a>.</p>

                        <h2 className="text-2xl font-semibold !mb-0">Rechtsgrundlagen</h2>
                        <p>Die Verarbeitung von personenbezogenen Daten benötigt immer eine Rechtsgrundlage. Die DSGVO sieht in Art. 6 Abs. 1 Satz 1 folgende Möglichkeiten vor:</p>
                        <ul>
                            <li>a) Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben;</li>
                            <li>b) die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen;</li>
                            <li>c) die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der Verantwortliche unterliegt;</li>
                            <li>d) die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen;</li>
                            <li>e) die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;</li>
                            <li>f) die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der betroffenen Person um ein Kind handelt.</li>
                        </ul>
                        <p>In den folgenden Abschnitten werden wir Ihnen die konkrete Rechtsgrundlage zu der jeweiligen Verarbeitung nennen.</p>

                        <h2 className="text-2xl font-semibold !mb-0">Das passiert auf unserer Website</h2>
                        <p>Durch den Besuch auf unserer Website verarbeiten wir personenbezogene Daten von Ihnen.</p>
                        <p>Um diese Daten bestmöglich gegen einen unbefugten Eingriff durch Dritte zu schützen, benutzen wir eine SSL- bzw. TLS-Verschlüsselung. Diese verschlüsselte Verbindung erkennen Sie daran, dass in der Adresszeile Ihres Browsers ein https:// oder ein Schloss-Symbol abgebildet ist.</p>
                        <p>Im Folgenden erfahren Sie, welche Daten beim Besuch unserer Website erhoben werden, zu welchem Zweck dies geschieht und aufgrund welcher Rechtsgrundlage.</p>

                        <h3 className="text-xl font-semibold !mb-0">Datenerhebung beim Aufruf der Website</h3>
                        <p>Durch das Aufrufen der Website werden automatisch Informationen in sogenannten Server-Log-Dateien gespeichert. Es handelt sich um folgende Informationen:</p>
                        <ul>
                            <li>Browsertyp und Browserversion</li>
                            <li>verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>
                        <p>Diese Daten werden vorübergehend benötigt, um Ihnen unsere Website dauerhaft und problemlos anzeigen zu können. Insbesondere dienen diese Daten damit folgenden Zwecken:</p>
                        <ul>
                            <li>Systemsicherheit der Website</li>
                            <li>Systemstabilität der Website</li>
                            <li>Fehlerbehebung auf der Website</li>
                            <li>Verbindungsaufbau zur Website</li>
                            <li>Darstellung der Website</li>
                        </ul>
                        <p>Die Datenverarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO und erfolgt aus unserem berechtigten Interesse an der Verarbeitung dieser Daten, insbesondere aus dem Interesse an der Funktionalität der Website sowie deren Sicherheit.</p>
                        <p>Diese Daten werden nach Möglichkeit pseudonymisiert gespeichert und nach Erreichen des jeweiligen Zwecks gelöscht.</p>
                        <p>Soweit die Server-Log-Dateien die Identifizierung der betroffenen Person ermöglicht, werden die Daten maximal für einen Zeitraum von 14 Tagen gespeichert. Eine Ausnahme besteht dann, wenn ein sicherheitsrelevantes Ereignis auftritt. In diesem Fall werden die Server-Log-Dateien bis zur Beseitigung und abschließenden Aufklärung des sicherheitsrelevanten Ereignisses gespeichert.</p>
                        <p>Im Übrigen findet eine Zusammenführung mit anderen Daten findet nicht statt.</p>

                        <h3 className="text-xl font-semibold !mb-0">Datenverarbeitung durch Nutzereingabe</h3>

                        <h4>a) E-Mail</h4>
                        <p>Wenn Sie per E-Mail mit uns in Kontakt treten, verarbeiten wir Ihre E-Mail-Adresse und ggfs. weitere in der Mail enthaltene Daten. Diese werden auf dem Mail-Server und teilweise auf den jeweiligen Endgeräten gespeichert. Je nach Anliegen ist die Rechtsgrundlage hierfür regelmäßig Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht, sobald der jeweilige Zweck entfällt und es gemäß den gesetzlichen Vorgaben möglich ist.</p>

                        <h4>b) Kontaktformular</h4>
                        <p>Wir bieten ein Kontaktformular an. Dieses dient der Kontaktaufnahme zu unserem Unternehmen.</p>
                        <p>In diesem Formular verarbeiten wir in der Regel Ihren Vor- und Nachnamen, Ihre Telefonnummer, Ihre E-Mail-Adresse, eine postalische Adresse sowie den Inhalt der Nachricht. Die Daten werden auf unserem Webserver gespeichert und an die jeweils zuständigen E-Mail-Adressen intern weitergeleitet.</p>
                        <p>Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, da wir ein berechtigtes Interesse an der Beantwortung Ihres Anliegens und an einer unkomplizierten Kontaktaufnahme-Möglichkeit haben. Zielt die Kontaktaufnahme auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.</p>
                        <p>Wir löschen diese Daten spätestens 3 Monate nach Erhalt, es sei denn, sie werden für eine entstandene Vertragsbeziehung benötigt.</p>
                        <p>Das Kontaktformular auf unserer Website beruht auf unserer eigenen Entwicklung. Eine Datenübermittlung an Dritte findet nicht statt.</p>

                        <h2 className="text-2xl font-semibold !mb-0">Das ist sonst noch wichtig</h2>
                        <p>Zum Abschluss möchten wir Sie ausführlich und detailliert über Ihre Rechte informieren und Ihnen mitteilen, wie Sie über Veränderungen der datenschutzrechtlichen Anforderungen informiert werden wirst.</p>

                        <h3 className="text-xl font-semibold !mb-0">Auskunftsrecht nach Art. 15 DSGVO</h3>
                        <p>Sie können Auskunft darüber verlangen, ob personenbezogenen Daten von Ihnen verarbeitet werden. Ist das der Fall, können Sie weitere Auskünfte zur Art und Weise der Verarbeitung einfordern. Eine detaillierte Aufzählung finden Sie in Art. 15 Abs. 1 lit. a bis h DSGVO.</p>

                        <h3 className="text-xl font-semibold !mb-0">Recht auf Berichtigung nach Art. 16 DSGVO</h3>
                        <p>Dieses Recht umfasst die Berichtigung unrichtiger Daten und die Ergänzung unvollständiger personenbezogener Daten.</p>

                        <h3 className="text-xl font-semibold !mb-0">Recht auf Löschung nach Art. 17 DSGVO</h3>
                        <p>Dieses sogenannte ‚Recht auf Vergessenwerden‘ gibt Ihnen das Recht, unter bestimmten Voraussetzungen, die Löschung der personenbezogenen Daten durch den Verantwortlichen zu verlangen. Dies ist grundsätzlich dann der Fall, wenn der Zweck der Datenverarbeitung entfallen ist, wenn eine Einwilligung widerrufen wurde oder die Ausgangsverarbeitung ohne Rechtsgrundlage stattfand. Eine detaillierte Aufzählung von Gründen finden Sie in Art. 17 Abs. 1 lit. a bis f DSGVO. Dieses „Recht auf Vergessenwerden“ korrespondiert darüber hinaus mit der Pflicht des Verantwortlichen aus Art. 17 Abs. 2 DSGVO angemessene Maßnahmen zu ergreifen, um eine allgemeine Löschung der Daten herbeizuführen.</p>

                        <h3 className="text-xl font-semibold !mb-0">Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO</h3>
                        <p>Dieses Recht ist an die Voraussetzungen gemäß Art. 18 Abs. 1 lit. a bis d geknüpft.</p>

                        <h3 className="text-xl font-semibold !mb-0">Recht auf Datenübertragbarkeit nach Art. 20 DSGVO</h3>
                        <p>Hier wird das grundsätzliche Recht zum Erhalt der eigenen Daten in einer gängigen Form und der Übermittlung an einen anderen Verantwortlichen geregelt. Dies gilt allerdings nur für die Daten einer Verarbeitung aufgrund von Einwilligung oder Vertrag nach Art. 20 Abs. 1 lit. a und b und soweit dies technisch machbar ist.</p>

                        <h3 className="text-xl font-semibold !mb-0">Recht auf Widerspruch nach Art. 21 DSGVO</h3>
                        <p>Sie können grundsätzlich der Verarbeitung Ihrer personenbezogenen Daten widersprechen. Dies gilt insbesondere dann, wenn Ihr Interesse am Widerspruch das berechtigte Interesse des Verantwortlichen an der Verarbeitung überwiegt und wenn sich die Verarbeitung auf Direktwerbung und oder Profiling bezieht.</p>

                        <h3 className="text-xl font-semibold !mb-0">Recht auf „Entscheidung im Einzelfall“ nach Art. 22 DSGVO</h3>
                        <p>Sie haben grundsätzlich das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung (einschließlich Profiling) beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Auch dieses Recht findet allerdings Einschränkungen und Ergänzungen in Art. 22 Abs. 2 und 4 DSGVO.</p>

                        <h3 className="text-xl font-semibold !mb-0">Weitere Rechte</h3>
                        <p>Die DSGVO beinhaltet umfassende Rechte der Unterrichtung von Dritten darüber, ob oder wie Sie Rechte nach Art. 16, 17, 18 DSGVO geltend gemacht haben. Dies allerdings nur insoweit dies auch möglich bzw. mit einem angemessenen Aufwand durchführbar ist.</p>
                        <p>Wir möchten Sie an dieser Stelle erneut auf Ihr Recht des Widerrufs einer erteilten Einwilligung nach Art. 7 Abs. 3 DSGVO hinweisen. Die Rechtmäßigkeit der bis dahin durchgeführten Verarbeitung wird dadurch allerdings nicht berührt.</p>
                        <p>Außerdem möchten wir Sie auch noch auf Ihre Rechte nach §§ 32 ff. BDSG hinweisen, die allerdings inhaltlich größtenteils deckungsgleich mit den soeben beschrieben Rechten sind.</p>

                        <h3 className="text-xl font-semibold !mb-0">Beschwerderecht nach Art. 77 DSGVO</h3>
                        <p>Sie haben auch das Recht sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass eine Verarbeitung der Sie betreffenden personenbezogenen Daten gegen diese Verordnung verstößt.</p>

                        <h3 className="text-xl font-semibold !mb-0">Was ist, wenn morgen die DSGVO abgeschafft wird oder andere Veränderungen stattfinden?</h3>
                        <p>Der aktuelle Stand dieser Datenschutzerklärung ist 13.03.2024. Von Zeit zu Zeit ist es erforderlich, den Inhalt der Datenschutzerklärung anzupassen, um auf tatsächliche und rechtliche Veränderungen zu reagieren. Wir behalten uns daher vor, diese Datenschutzerklärung jederzeit zu ändern. Wir werden die geänderte Version an gleicher Stelle veröffentlichen und empfehlen Ihnen, die Datenschutzerklärung regelmäßig zu lesen.</p>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-10">Privacy Policy</h1>
                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto dark:prose-invert">
                        <h2 className="text-2xl font-semibold !mb-0">Introduction</h2>
                        <p>This website is operated by: Ghulammustafa Kakar.</p>
                        <p>It is very important to us to handle the data of our website visitors with confidence and to protect them in the best possible way. For this reason, we make every effort to comply with the requirements of the GDPR.</p>
                        <p>In the following, we explain how we process your data on our website. To do this, we use the clearest and most transparent language possible so that you really understand what happens with your data.</p>

                        <h2 className="text-2xl font-semibold !mb-0">General information</h2>
                        <h3 className="text-xl font-semibold !mb-0">Processing of personal data and other terms</h3>
                        <p>Data protection applies to the processing of personal data. Personal means all data with which you can be personally identified. This is, for example, the IP address of the device (PC, laptop, smartphone, etc.) in front of which you are currently sitting. Such data is processed when &#39;something happens to it&#39;. Here, for example, the IP is transmitted from the browser to our provider and stored there automatically. This is then a processing (according to Art. 4 No. 2 GDPR) of personal data (according to Art. 4 No. 1 GDPR).</p>

                        <h3 className="text-xl font-semibold !mb-0">Applicable regulations/laws - GDPR, BDSG and TTDSG</h3>
                        <p>The scope of data protection is regulated by laws. In this case, these are the GDPR (General Data Protection Regulation) as a European regulation and the BDSG (Federal Data Protection Act) as a national law.</p>
                        <p>In addition, the TTDSG supplements the provisions from the GDPR as far as the use of cookies is concerned.</p>

                        <h3 className="text-xl font-semibold !mb-0">The responsible</h3>
                        <p>The controller within the meaning of the GDPR is responsible for data processing on this website. This is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data.</p>
                        <p>You can reach the person in charge at:</p>
                        <p>Ghulammustafa Kakar<br />Karlstraße 6A<br />38300 Wolfenbüttel<br />ghulammustafa@kakar.dev</p>

                        <h3 className="text-xl font-semibold !mb-0">This is how data is basically processed on this website</h3>
                        <p>As we have already established, there are data (e.g. IP address) that are collected automatically. This data is mainly required for the technical provision of the homepage. Insofar as we use personal data or collect other data, we will inform you of this or ask for your consent.</p>
                        <p>Other personal data you share with us knowingly.</p>
                        <p>Detailed information on this can be found below.</p>

                        <h3 className="text-xl font-semibold !mb-0">Your Right</h3>
                        <p>The GDPR provides you with comprehensive rights. These are, for example, the free information about the origin, recipient and purpose of your stored personal data. In addition, you can request the correction, blocking or deletion of this data or complain to the competent data protection supervisory authority. You can revoke any consent you have given at any time.</p>
                        <p>You can find out in detail what these rights are and how to exercise them in the last section of this Privacy Policy.</p>

                        <h3 className="text-xl font-semibold !mb-0">Data protection - Our view</h3>
                        <p>Data protection is more than just a chore for us! Personal data has a great value and mindful handling of this data should be a matter of course in our digitalized world. In addition, you as a website visitor should be able to decide for yourself what &#34;happens&#34; to your data, when and by whom. Therefore, we undertake to comply with all legal provisions, collect only the data necessary for us and, of course, treat them confidentially.</p>

                        <h3 className="text-xl font-semibold !mb-0">Disclosure and deletion</h3>
                        <p>The transfer and deletion of data are also important and sensitive topics. Therefore, we would like to briefly inform you in advance about our general approach to this.</p>
                        <p>A transfer of data only takes place on the basis of a legal basis and only if this is unavoidable. This may be the case in particular if it is a so-called Data Processor and a Data Processing Agreement has been concluded in accordance with Art. 28 GDPR.</p>
                        <p>We delete your data when the purpose and the legal basis for processing cease to apply and the deletion does not conflict with any other legal obligations. A &#39;good&#39; overview of this is also provided by Art. 17 GDPR.</p>
                        <p>For all further information, please refer to this Privacy Policy and contact the responsible person if you have any specific questions.</p>

                        <h2 className="text-2xl font-semibold !mb-0">Hosting</h2>
                        <p>This website is hosted externally. The personal data collected on this website is stored on the hoster&#39;s servers. This is on the one hand the automatically collected and stored log files (see below for more details), as well as all other data provided by website visitors.</p>
                        <p>The external hosting is carried out for the purpose of a secure, fast and reliable provision of our website and serves in this context the fulfillment of contracts with our potential and existing customers.</p>
                        <p>The legal basis for the processing is Art. 6 (1) lit. a, b and f GDPR, as well as Section 25 (1) TTDSG, insofar as consent includes the storage of cookies or access to information in the terminal device of the website visitor or user as defined by the TTDSG.</p>
                        <p>Our hoster only processes data that is necessary for the fulfillment of its service obligation and acts as our Data Processor, which means that it is subject to our instructions. We have concluded a corresponding Data Processing Agreement with our hoster.</p>
                        <p>We use the following hoster:</p>
                        <p>IONOS<br />IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany.<br />info@ionos.de<br /><a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/">https://www.ionos.de/terms-gtc/datenschutzerklaerung/</a>.</p>

                        <h2 className="text-2xl font-semibold !mb-0">Legal basis</h2>
                        <p>The processing of personal data always requires a legal basis. The GDPR provides for the following possibilities in Art. 6 (1) Sentence 1:</p>
                        <ul>
                            <li>a) The data subject has given his/her consent to the processing of personal data concerning him/her for one or more specific purposes;</li>
                            <li>b) the processing is necessary for the performance of a contract to which the data subject is party or for the implementation of pre-contractual measures taken at the data subject&#39;s request;</li>
                            <li>c) processing is necessary for compliance with a legal obligation to which the responsible person subject to;</li>
                            <li>d) the processing is necessary in order to protect the vital interests of the data subject or another natural person;</li>
                            <li>e) processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the responsible was transferred;</li>
                            <li>f) processing is necessary for the purposes of safeguarding the legitimate interests of the responsible or of a third party necessary, unless the interests or fundamental rights and freedoms of the data subject which require the protection of personal data override this, in particular where the data subject is a child.</li>
                        </ul>
                        <p>In the following sections, we will provide you with the specific legal basis for the respective processing.</p>

                        <h2 className="text-2xl font-semibold !mb-0">What happens on our website</h2>
                        <p>By visiting our website, we process personal data from you.</p>
                        <p>To protect this data as best as possible against unauthorized access by third parties, we use SSL or TLS encryption. You can recognize this encrypted connection by the fact that a https:// or a lock symbol is displayed in the address bar of your browser.</p>
                        <p>In the following, you will learn what data is collected when you visit our website, for what purpose this is done and on what legal basis.</p>

                        <h3 className="text-xl font-semibold !mb-0">Data collection when calling up the website</h3>
                        <p>By calling up the website, information is automatically stored in so-called server log files. This is the following information:</p>
                        <ul>
                            <li>Browser type and browser version</li>
                            <li>Operating system used</li>
                            <li>Referrer URL</li>
                            <li>Host name of the accessing computer</li>
                            <li>Time of the server request</li>
                            <li>IP address</li>
                        </ul>
                        <p>This data is temporarily required in order to be able to display our website to you permanently and without problems. In particular, this data thus serves the following purposes:</p>
                        <ul>
                            <li>System security of the website</li>
                            <li>System stability of the website</li>
                            <li>Website troubleshooting</li>
                            <li>Connecting to the website</li>
                            <li>Website presentation</li>
                        </ul>
                        <p>The data processing is carried out in accordance with Art. 6 para. 1 lit. f GDPR and is based on our legitimate interest in the processing of this data, in particular the interest in the functionality of the website as well as its security.</p>
                        <p>If possible, this data is stored pseudonymously and deleted after the respective purpose has been achieved.</p>
                        <p>Insofar as the server log files allow the identification of the person concerned, the data is stored for a maximum period of 14 days. An exception exists if a security-relevant event occurs. In this case, the server log files are stored until the elimination and final clarification of the security-relevant event.</p>
                        <p>For the rest, a consolidation with other data does not take place.</p>

                        <h3 className="text-xl font-semibold !mb-0">Data processing through user input</h3>

                        <h4>a) E-mail</h4>
                        <p>If you contact us by e-mail, we process your e-mail address and, if applicable, other data contained in the e-mail. These are stored on the mail server and partly on the respective end devices. Depending on the request, the legal basis for this is regularly Art. 6 para. 1 lit. f GDPR or Art. 6 para. 1 lit. b GDPR. The data will be deleted as soon as the respective purpose ceases to apply and it is possible according to the legal requirements.</p>

                        <h4>b) Contact form</h4>
                        <p>We offer a contact form. This is used to contact our company.</p>
                        <p>In this form we usually process your first and last name, your telephone number, your e-mail address, a postal address and the content of the message. The data is stored on our web server and forwarded internally to the respective responsible e-mail addresses.</p>
                        <p>The legal basis for data processing is Art. 6 para. 1 lit. f GDPR, as we have a legitimate interest in responding to your request and in an uncomplicated way of contacting you. If the contact is aimed at the conclusion of a contract, the additional legal basis for the processing is Art. 6 para. 1 lit. b GDPR.</p>
                        <p>We delete this data no later than 3 months after receipt, unless it is required for a contractual relationship that has arisen.</p>
                        <p>The contact form on our website is based on our own development. A data transfer to third parties does not take place.</p>

                        <h2 className="text-2xl font-semibold !mb-0">This is also important</h2>
                        <p>Finally, we would like to inform you in detail about your rights and how you will be informed about changes in data protection requirements.</p>

                        <h3 className="text-xl font-semibold !mb-0">Right to information according to Art. 15 GDPR</h3>
                        <p>You can request information about whether personal data about you is being processed. If this is the case, you can request further information on the type and manner of processing. A detailed list can be found in Art. 15 (1) lit. a to h GDPR.</p>

                        <h3 className="text-xl font-semibold !mb-0">Right to rectification according to Art. 16 GDPR</h3>
                        <p>This right includes the correction of inaccurate data and the completion of incomplete personal data.</p>

                        <h3 className="text-xl font-semibold !mb-0">Right to deletion according to Art. 17 GDPR</h3>
                        <p>This so-called &#39;right to be forgotten&#39; gives you the right, under certain conditions, to request the deletion of personal data by the controller. This is generally the case if the purpose of the data processing has ceased to exist, if consent has been revoked or if the initial processing took place without a legal basis. A detailed list of reasons can be found in Art. 17 (1) a to f GDPR. Furthermore, this &#39;right to be forgotten&#39; corresponds with the obligation of the controller under Art. 17 (2) GDPR to take appropriate measures to bring about a general erasure of the data.</p>

                        <h3 className="text-xl font-semibold !mb-0">Right to restriction of processing according to Art. 18 GDPR</h3>
                        <p>This right is subject to the conditions set out in Art. 18(1)(a) to (d).</p>

                        <h3 className="text-xl font-semibold !mb-0">Right to data portability according to Art. 20 GDPR</h3>
                        <p>Here, the basic right to receive one&#39;s own data in a common form and to transfer it to another data controller is regulated. However, this only applies to data processed on the basis of consent or a contract pursuant to Art. 20 (1) (a) and (b) and to the extent that this is technically feasible.</p>

                        <h3 className="text-xl font-semibold !mb-0">Right of objection according to Art. 21 GDPR</h3>
                        <p>In principle, you can object to the processing of your personal data. This applies in particular if your interest in objecting outweighs the legitimate interest of the controller in the processing and if the processing relates to direct marketing and or profiling.</p>

                        <h3 className="text-xl font-semibold !mb-0">Right to &#34;decision in individual cases&#34; according to Art. 22 GDPR</h3>
                        <p>In principle, you have the right not to be subject to a decision based solely on automated processing (including profiling) which produces legal effects concerning you or similarly significantly affects you. However, this right is also subject to limitations and supplements in Art. 22 (2) and (4) GDPR.</p>

                        <h3 className="text-xl font-semibold !mb-0">Other rights</h3>
                        <p>The GDPR includes comprehensive rights to inform third parties whether or how you have asserted rights under Art. 16, 17, 18 GDPR. This, however, only insofar as this is also possible or feasible with a reasonable effort.</p>
                        <p>We would like to take this opportunity to once again inform you of your right to withdraw your consent in accordance with Article 7 (3) of the GDPR. However, this does not affect the lawfulness of the processing carried out up to that point.</p>
                        <p>In addition, we would also like to inform you about your rights according to §§ 32 ff. BDSG, which, however, are largely congruent with the rights just described.</p>

                        <h3 className="text-xl font-semibold !mb-0">Right of appeal according to Art. 77 GDPR</h3>
                        <p>You also have the right to complain to a data protection supervisory authority if you consider that any processing of personal data concerning you is in breach of this Regulation.</p>

                        <h3 className="text-xl font-semibold !mb-0">What if tomorrow the GDPR is abolished or other changes take place?</h3>
                        <p>The current status of this Privacy Policy is 13.03.2024. From time to time it is necessary to adapt the content of the Privacy Policy in order to react to actual and legal changes. We therefore reserve the right to amend this Privacy Policy at any time. We will publish the amended version in the same place and recommend that you read the Privacy Policy regularly.</p>
                    </div>
                </>
            )}
        </div>
    );
} 