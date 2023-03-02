import Navbar from "./components/navbar/Navbar.jsx";
import Alert from "./components/alert.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SectionGrid from "./components/SectionGrid.jsx";
import Section from "./components/Section.jsx";
import StatusCard from "./components/StatusCard.jsx";
import Footer from "./components/Footer.jsx";
import Table from "./components/table/Table.tsx";

function App() {
  return (
    <div className="bg-gray-800">
      <div className="flex flex-col gap-8">
        <Navbar />
        <HeroSection />
        <SectionGrid title="Overview">
          <StatusCard title="Total Sale Volume" data="2.6M" />
          <StatusCard title="Number of sales" data="28.697" />
          <StatusCard title="Unique Buyers" data="2.616" />
          <StatusCard title="Unique Sellers" data="1.619" />
        </SectionGrid>
        <Section title="Top assets" className="w-full flex">
          <Table />
        </Section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
