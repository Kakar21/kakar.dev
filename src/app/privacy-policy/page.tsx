import Link from "next/link";
// import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-2xl w-full space-y-6 pb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Privacy Policy</h1>
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto dark:prose-invert">
                <h2 className="text-2xl font-semibold">Introduction</h2>
                <p>This website is operated by: Ghulammustafa Kakar.</p>
                <p>It is very important to us to handle the data of our website visitors with confidence and to protect them in the best possible way. For this reason, we make every effort to comply with the requirements of the GDPR.</p>
                <p>In the following, we explain how we process your data on our website. To do this, we use the clearest and most transparent language possible so that you really understand what happens with your data.</p>

                <h2 className="text-2xl font-semibold">General information</h2>
                <h3 className="text-xl font-semibold">Processing of personal data and other terms</h3>
                <p>Data protection applies to the processing of personal data. Personal means all data with which you can be personally identified. This is, for example, the IP address of the device (PC, laptop, smartphone, etc.) in front of which you are currently sitting. Such data is processed when 'something happens to it'. Here, for example, the IP is transmitted from the browser to our provider and stored there automatically. This is then a processing (according to Art. 4 No. 2 GDPR) of personal data (according to Art. 4 No. 1 GDPR).</p>

                <h3 className="text-xl font-semibold">Applicable regulations/laws - GDPR, BDSG and TTDSG</h3>
                <p>The scope of data protection is regulated by laws. In this case, these are the GDPR (General Data Protection Regulation) as a European regulation and the BDSG (Federal Data Protection Act) as a national law.</p>
                <p>In addition, the TTDSG supplements the provisions from the GDPR as far as the use of cookies is concerned.</p>

                <h3 className="text-xl font-semibold">The responsible</h3>
                <p>The controller within the meaning of the GDPR is responsible for data processing on this website. This is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data.</p>
                <p>You can reach the person in charge at:</p>
                <p>Ghulammustafa Kakar<br />Karlstraße 6A<br />38300 Wolfenbüttel<br />ghulammustafa@kakar.dev</p>

                <h3 className="text-xl font-semibold">This is how data is basically processed on this website</h3>
                <p>As we have already established, there are data (e.g. IP address) that are collected automatically. This data is mainly required for the technical provision of the homepage. Insofar as we use personal data or collect other data, we will inform you of this or ask for your consent.</p>
                <p>Other personal data you share with us knowingly.</p>
                <p>Detailed information on this can be found below.</p>

                <h3 className="text-xl font-semibold">Your Right</h3>
                <p>The GDPR provides you with comprehensive rights. These are, for example, the free information about the origin, recipient and purpose of your stored personal data. In addition, you can request the correction, blocking or deletion of this data or complain to the competent data protection supervisory authority. You can revoke any consent you have given at any time.</p>
                <p>You can find out in detail what these rights are and how to exercise them in the last section of this Privacy Policy.</p>

                <h3 className="text-xl font-semibold">Data protection - Our view</h3>
                <p>Data protection is more than just a chore for us! Personal data has a great value and mindful handling of this data should be a matter of course in our digitalized world. In addition, you as a website visitor should be able to decide for yourself what "happens" to your data, when and by whom. Therefore, we undertake to comply with all legal provisions, collect only the data necessary for us and, of course, treat them confidentially.</p>

                <h3 className="text-xl font-semibold">Disclosure and deletion</h3>
                <p>The transfer and deletion of data are also important and sensitive topics. Therefore, we would like to briefly inform you in advance about our general approach to this.</p>
                <p>A transfer of data only takes place on the basis of a legal basis and only if this is unavoidable. This may be the case in particular if it is a so-called Data Processor and a Data Processing Agreement has been concluded in accordance with Art. 28 GDPR.</p>
                <p>We delete your data when the purpose and the legal basis for processing cease to apply and the deletion does not conflict with any other legal obligations. A 'good' overview of this is also provided by Art. 17 GDPR.</p>
                <p>For all further information, please refer to this Privacy Policy and contact the responsible person if you have any specific questions.</p>

                <h2 className="text-2xl font-semibold">Hosting</h2>
                <p>This website is hosted externally. The personal data collected on this website is stored on the hoster's servers. This is on the one hand the automatically collected and stored log files (see below for more details), as well as all other data provided by website visitors.</p>
                <p>The external hosting is carried out for the purpose of a secure, fast and reliable provision of our website and serves in this context the fulfillment of contracts with our potential and existing customers.</p>
                <p>The legal basis for the processing is Art. 6 (1) lit. a, b and f GDPR, as well as Section 25 (1) TTDSG, insofar as consent includes the storage of cookies or access to information in the terminal device of the website visitor or user as defined by the TTDSG.</p>
                <p>Our hoster only processes data that is necessary for the fulfillment of its service obligation and acts as our Data Processor, which means that it is subject to our instructions. We have concluded a corresponding Data Processing Agreement with our hoster.</p>
                <p>We use the following hoster:</p>
                <p>IONOS<br />IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany.<br />info@ionos.de<br /><a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/">https://www.ionos.de/terms-gtc/datenschutzerklaerung/</a>.</p>

                <h2 className="text-2xl font-semibold">Legal basis</h2>
                <p>The processing of personal data always requires a legal basis. The GDPR provides for the following possibilities in Art. 6 (1) Sentence 1:</p>
                <ul>
                    <li>a) The data subject has given his/her consent to the processing of personal data concerning him/her for one or more specific purposes;</li>
                    <li>b) the processing is necessary for the performance of a contract to which the data subject is party or for the implementation of pre-contractual measures taken at the data subject's request;</li>
                    <li>c) processing is necessary for compliance with a legal obligation to which the responsible person subject to;</li>
                    <li>d) the processing is necessary in order to protect the vital interests of the data subject or another natural person;</li>
                    <li>e) processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the responsible was transferred;</li>
                    <li>f) processing is necessary for the purposes of safeguarding the legitimate interests of the responsible or of a third party necessary, unless the interests or fundamental rights and freedoms of the data subject which require the protection of personal data override this, in particular where the data subject is a child.</li>
                </ul>
                <p>In the following sections, we will provide you with the specific legal basis for the respective processing.</p>

                <h2 className="text-2xl font-semibold">What happens on our website</h2>
                <p>By visiting our website, we process personal data from you.</p>
                <p>To protect this data as best as possible against unauthorized access by third parties, we use SSL or TLS encryption. You can recognize this encrypted connection by the fact that a https:// or a lock symbol is displayed in the address bar of your browser.</p>
                <p>In the following, you will learn what data is collected when you visit our website, for what purpose this is done and on what legal basis.</p>

                <h3 className="text-xl font-semibold">Data collection when calling up the website</h3>
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

                <h3 className="text-xl font-semibold">Data processing through user input</h3>

                <h4>a) E-mail</h4>
                <p>If you contact us by e-mail, we process your e-mail address and, if applicable, other data contained in the e-mail. These are stored on the mail server and partly on the respective end devices. Depending on the request, the legal basis for this is regularly Art. 6 para. 1 lit. f GDPR or Art. 6 para. 1 lit. b GDPR. The data will be deleted as soon as the respective purpose ceases to apply and it is possible according to the legal requirements.</p>

                <h4>b) Contact form</h4>
                <p>We offer a contact form. This is used to contact our company.</p>
                <p>In this form we usually process your first and last name, your telephone number, your e-mail address, a postal address and the content of the message. The data is stored on our web server and forwarded internally to the respective responsible e-mail addresses.</p>
                <p>The legal basis for data processing is Art. 6 para. 1 lit. f GDPR, as we have a legitimate interest in responding to your request and in an uncomplicated way of contacting you. If the contact is aimed at the conclusion of a contract, the additional legal basis for the processing is Art. 6 para. 1 lit. b GDPR.</p>
                <p>We delete this data no later than 3 months after receipt, unless it is required for a contractual relationship that has arisen.</p>
                <p>The contact form on our website is based on our own development. A data transfer to third parties does not take place.</p>

                <h2 className="text-2xl font-semibold">This is also important</h2>
                <p>Finally, we would like to inform you in detail about your rights and how you will be informed about changes in data protection requirements.</p>

                <h3 className="text-xl font-semibold">Right to information according to Art. 15 GDPR</h3>
                <p>You can request information about whether personal data about you is being processed. If this is the case, you can request further information on the type and manner of processing. A detailed list can be found in Art. 15 (1) lit. a to h GDPR.</p>

                <h3 className="text-xl font-semibold">Right to rectification according to Art. 16 GDPR</h3>
                <p>This right includes the correction of inaccurate data and the completion of incomplete personal data.</p>

                <h3 className="text-xl font-semibold">Right to deletion according to Art. 17 GDPR</h3>
                <p>This so-called 'right to be forgotten' gives you the right, under certain conditions, to request the deletion of personal data by the controller. This is generally the case if the purpose of the data processing has ceased to exist, if consent has been revoked or if the initial processing took place without a legal basis. A detailed list of reasons can be found in Art. 17 (1) a to f GDPR. Furthermore, this "right to be forgotten" corresponds with the obligation of the controller under Art. 17 (2) GDPR to take appropriate measures to bring about a general erasure of the data.</p>

                <h3 className="text-xl font-semibold">Right to restriction of processing according to Art. 18 GDPR</h3>
                <p>This right is subject to the conditions set out in Art. 18(1)(a) to (d).</p>

                <h3 className="text-xl font-semibold">Right to data portability according to Art. 20 GDPR</h3>
                <p>Here, the basic right to receive one's own data in a common form and to transfer it to another data controller is regulated. However, this only applies to data processed on the basis of consent or a contract pursuant to Art. 20 (1) (a) and (b) and to the extent that this is technically feasible.</p>

                <h3 className="text-xl font-semibold">Right of objection according to Art. 21 GDPR</h3>
                <p>In principle, you can object to the processing of your personal data. This applies in particular if your interest in objecting outweighs the legitimate interest of the controller in the processing and if the processing relates to direct marketing and or profiling.</p>

                <h3 className="text-xl font-semibold">Right to "decision in individual cases" according to Art. 22 GDPR</h3>
                <p>In principle, you have the right not to be subject to a decision based solely on automated processing (including profiling) which produces legal effects concerning you or similarly significantly affects you. However, this right is also subject to limitations and supplements in Art. 22 (2) and (4) GDPR.</p>

                <h3 className="text-xl font-semibold">Other rights</h3>
                <p>The GDPR includes comprehensive rights to inform third parties whether or how you have asserted rights under Art. 16, 17, 18 GDPR. This, however, only insofar as this is also possible or feasible with a reasonable effort.</p>
                <p>We would like to take this opportunity to once again inform you of your right to withdraw your consent in accordance with Article 7 (3) of the GDPR. However, this does not affect the lawfulness of the processing carried out up to that point.</p>
                <p>In addition, we would also like to inform you about your rights according to §§ 32 ff. BDSG, which, however, are largely congruent with the rights just described.</p>

                <h3 className="text-xl font-semibold">Right of appeal according to Art. 77 GDPR</h3>
                <p>You also have the right to complain to a data protection supervisory authority if you consider that any processing of personal data concerning you is in breach of this Regulation.</p>

                <h3 className="text-xl font-semibold">What if tomorrow the GDPR is abolished or other changes take place?</h3>
                <p>The current status of this Privacy Policy is 13.03.2024. From time to time it is necessary to adapt the content of the Privacy Policy in order to react to actual and legal changes. We therefore reserve the right to amend this Privacy Policy at any time. We will publish the amended version in the same place and recommend that you read the Privacy Policy regularly.</p>
            </div>
        </div>
    );
} 

// TODO: One page (english route) with Next.js-i18n translation