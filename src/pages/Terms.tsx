
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Terms of Service"
          subtitle="The rules, guidelines, and agreements to using our website and services"
          imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">1. Agreement to Terms</h2>
              <p className="text-focus-muted mb-6">
                By accessing our website, you are agreeing to be bound by these Terms of Service and agree that you are responsible 
                for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited 
                from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">2. Use License</h2>
              <p className="text-focus-muted mb-4">
                Permission is granted to temporarily download one copy of the materials on Focus Strategy's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="text-focus-muted mb-6 list-disc pl-6">
                <li className="mb-2">Modify or copy the materials;</li>
                <li className="mb-2">Use the materials for any commercial purpose, or for any public display;</li>
                <li className="mb-2">Attempt to decompile or reverse engineer any software contained on Focus Strategy's website;</li>
                <li className="mb-2">Remove any copyright or other proprietary notations from the materials; or</li>
                <li className="mb-2">Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="text-focus-muted mb-6">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Focus Strategy at any time. 
                Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded 
                materials in your possession whether in electronic or printed format.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">3. Disclaimer</h2>
              <p className="text-focus-muted mb-6">
                The materials on Focus Strategy's website are provided on an 'as is' basis. Focus Strategy makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied 
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                Further, Focus Strategy does not warrant or make any representations concerning the accuracy, likely results, or reliability of the 
                use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">4. Limitations</h2>
              <p className="text-focus-muted mb-6">
                In no event shall Focus Strategy or its suppliers be liable for any damages (including, without limitation, damages for loss 
                of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Focus 
                Strategy's website, even if Focus Strategy or a Focus Strategy authorized representative has been notified orally or in writing 
                of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations 
                of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">5. Governing Law</h2>
              <p className="text-focus-muted mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of Germany and you irrevocably 
                submit to the exclusive jurisdiction of the courts in that location.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">6. Contact Us</h2>
              <p className="text-focus-muted mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-focus-muted mb-6">
                Focus Strategy<br />
                123 Business Street<br />
                Frankfurt, Germany 60311<br />
                Email: info@focusstrategy.de<br />
                Phone: +49 123 456 7890
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
