import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import UploadForm from "@/components/UploadForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left space-y-6 animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-green-500 animate-pulse" />
              <h1 className="text-4xl font-bold tracking-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
                  SpringBoot
                </span>
                <br />
                Vulnerability Scanner
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl">
              Protect your Spring Boot applications from security vulnerabilities by analyzing their Maven dependencies. Our tool ensures your projects stay secure and compliant.
            </p>
            <div className="flex gap-4">
              <Button className="bg-green-500 hover:bg-green-600">
                Scan My Project <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline">How Does It Work</Button>
            </div>
          </div>
          <div className="flex-1 relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="Security Scanner"
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            How It <span className="bg-green-500 text-white px-2 rounded">Works</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <Step
                number="1"
                title="Upload Dependencies"
                description="Upload or provide the list of Maven dependencies from your Spring Boot project"
              />
              <Step
                number="2"
                title="Automated Scanning"
                description="Our tool scans the dependencies for known vulnerabilities"
              />
              <Step
                number="3"
                title="Detailed Report"
                description="Receive a detailed report highlighting risks and suggested remediations"
              />
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
                alt="How it works"
                className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our <span className="bg-green-500 text-white px-2 rounded">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
              alt="Features"
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl animate-fade-in"
            />
            <div className="space-y-8 animate-fade-up">
              <Feature
                title="Automated Dependency Scanning"
                description="Quickly identify vulnerabilities in Maven dependencies with just a few clicks"
              />
              <Feature
                title="Comprehensive Vulnerability Database"
                description="Powered by an up-to-date vulnerability database to provide accurate results"
              />
              <Feature
                title="Detailed Reporting"
                description="Get insights into each identified issue with recommendations for fixes"
              />
              <Feature
                title="User-Friendly Interface"
                description="Simple and intuitive design for an effortless experience"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Choose <span className="bg-green-500 text-white px-2 rounded">Us?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <WhyUsCard text="Save time by automating manual checks" />
            <WhyUsCard text="Stay ahead of potential threats with real-time updates" />
            <WhyUsCard text="Ensure your application is secure and reliable" />
          </div>
        </div>
      </section>
    </div>
  );
};

const Step = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const Feature = ({ title, description }: { title: string; description: string }) => (
  <div className="space-y-2">
    <h3 className="font-semibold text-lg flex items-center gap-2">
      <CheckCircle2 className="text-green-500 h-5 w-5" />
      {title}
    </h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const WhyUsCard = ({ text }: { text: string }) => (
  <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-up">
    <CheckCircle2 className="text-green-500 h-6 w-6 mx-auto mb-4" />
    <p className="text-sm">{text}</p>
  </Card>
);

export default Index;