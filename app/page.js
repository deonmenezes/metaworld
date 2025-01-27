import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
       <div className="relative">
        <Explore />
      <div/>  
        <GetStarted />
        <div className="gradient-02 z-0" />
      </div>
      <div className="" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <About />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
   
