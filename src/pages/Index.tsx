import LegalHero from "@/components/LegalHero";
import FeatureSection from "@/components/FeatureSection";
import UploadSection from "@/components/UploadSection";
import DocumentComparison from "@/components/DocumentComparison";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LegalHero />
      <FeatureSection />
      <UploadSection />
      <DocumentComparison />
      <Footer />
    </div>
  );
};

export default Index;
