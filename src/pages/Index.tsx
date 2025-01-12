import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, Upload, FileType, AlertCircle } from "lucide-react";
import UploadForm from "@/components/UploadForm";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6 flex flex-col items-center justify-center animate-fade-in">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4 animate-fade-up">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Shield className="h-12 w-12 text-green-600 animate-pulse" />
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              ShieldScan
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Analyze your Maven dependencies for security vulnerabilities with our
            advanced scanning tool
          </p>
        </div>

        <Card className="p-6 animate-fade-up shadow-lg hover:shadow-xl transition-shadow duration-300 border-green-100">
          <UploadForm />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            icon="🛡️"
            title="Quick Analysis"
            description="Scan your dependencies in seconds"
            delay="delay-100"
          />
          <Feature
            icon="📊"
            title="Detailed Reports"
            description="Get comprehensive vulnerability insights"
            delay="delay-200"
          />
          <Feature
            icon="📱"
            title="Export Options"
            description="Download reports in multiple formats"
            delay="delay-300"
          />
        </div>
      </div>
    </div>
  );
};

const Feature = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  delay: string;
}) => (
  <Card className={`p-6 flex flex-col items-center text-center space-y-2 animate-fade-up ${delay} hover:scale-105 transition-transform duration-300 border-green-100`}>
    <span className="text-2xl mb-2">{icon}</span>
    <h3 className="font-semibold text-green-700">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </Card>
);

export default Index;