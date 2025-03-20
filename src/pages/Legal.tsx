
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Legal Notice"
          subtitle="Important legal information about our company and website"
          imageSrc="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">1. Company Information</h2>
              <p className="text-focus-muted mb-6">
                <strong>Focus Strategy GmbH</strong><br />
                123 Business Street<br />
                Frankfurt, Germany 60311<br />
                Email: info@focusstrategy.de<br />
                Phone: +49 123 456 7890
              </p>
              <p className="text-focus-muted mb-6">
                Registered at the Commercial Register of Frankfurt am Main<br />
                Registration Number: HRB 12345<br />
                VAT Identification Number: DE123456789
              </p>
              <p className="text-focus-muted mb-6">
                <strong>Managing Directors:</strong> Sarah Müller, Michael Weber
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">2. Liability for Contents</h2>
              <p className="text-focus-muted mb-6">
                The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' 
                accuracy, completeness, or topicality. According to statutory provisions, we are furthermore responsible for our own 
                content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or 
                saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to 
                remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of 
                the Telemedia Act (TMG).
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">3. Liability for Links</h2>
              <p className="text-focus-muted mb-6">
                Our offer includes links to external third-party websites, the content of which we cannot influence. Therefore, we 
                cannot assume any liability for these external contents. The respective provider or operator of the linked pages is 
                always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations 
                at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent content 
                control of the linked pages is not reasonable without concrete evidence of a violation of law. Upon notification of 
                violations, we will remove such links immediately.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">4. Copyright</h2>
              <p className="text-focus-muted mb-6">
                The contents and works on these pages created by the site operators are subject to German copyright law. 
                Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the 
                copyright law requires the prior written consent of its respective author or creator. Downloads and copies of these 
                pages are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the 
                operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. 
                Should you become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, 
                we will remove such content immediately.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">5. Data Protection</h2>
              <p className="text-focus-muted mb-6">
                For detailed information about data protection, please refer to our Privacy Policy.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">6. Online Dispute Resolution</h2>
              <p className="text-focus-muted mb-6">
                The European Commission provides a platform for online dispute resolution (OS) which is available at 
                https://ec.europa.eu/consumers/odr/. We are not willing or obliged to participate in dispute resolution 
                proceedings before a consumer arbitration board.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
