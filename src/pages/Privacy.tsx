
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your personal information"
          imageSrc="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">1. Introduction</h2>
              <p className="text-focus-muted mb-6">
                At Focus Strategy, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or engage our consulting services. 
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">2. Collection of Your Information</h2>
              <p className="text-focus-muted mb-4">
                We may collect information about you in a variety of ways. The information we may collect via the website includes:
              </p>
              <h3 className="text-xl font-semibold text-focus-blue mb-4">Personal Data</h3>
              <p className="text-focus-muted mb-4">
                Personally identifiable information, such as your name, email address, telephone number, and company 
                information that you voluntarily give to us when you register with the website or when you choose to 
                participate in various activities related to the website, such as online contact forms or requesting a consultation.
              </p>
              
              <h3 className="text-xl font-semibold text-focus-blue mb-4">Derivative Data</h3>
              <p className="text-focus-muted mb-6">
                Information our servers automatically collect when you access the website, such as your IP address, 
                browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">3. Use of Your Information</h2>
              <p className="text-focus-muted mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. 
                Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="text-focus-muted mb-6 list-disc pl-6">
                <li className="mb-2">Create and manage your account.</li>
                <li className="mb-2">Deliver targeted content and services to you.</li>
                <li className="mb-2">Email you regarding your account or activity.</li>
                <li className="mb-2">Fulfill and manage purchases, orders, payments, and other transactions related to the website.</li>
                <li className="mb-2">Generate a personal profile about you to make future visits to the website more personalized.</li>
                <li className="mb-2">Increase the efficiency and operation of the website.</li>
                <li className="mb-2">Request feedback and contact you about your use of the website.</li>
                <li className="mb-2">Resolve disputes and troubleshoot problems.</li>
              </ul>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">4. Disclosure of Your Information</h2>
              <p className="text-focus-muted mb-6">
                We may share information we have collected about you in certain situations. Your information may be 
                disclosed as follows:
              </p>
              <h3 className="text-xl font-semibold text-focus-blue mb-4">By Law or to Protect Rights</h3>
              <p className="text-focus-muted mb-6">
                If we believe the release of information about you is necessary to respond to legal process, to 
                investigate or remedy potential violations of our policies, or to protect the rights, property, and 
                safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-6">5. Contact Us</h2>
              <p className="text-focus-muted mb-6">
                If you have questions or comments about this Privacy Policy, please contact us at:
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

export default Privacy;
