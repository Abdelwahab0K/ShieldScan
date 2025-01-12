import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import UploadForm from "@/components/UploadForm";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col items-center justify-center animate-fade-in">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Maven Dependency Security Scanner
          </h1>
          <p className="text-lg text-muted-foreground">
            Analyze your Maven dependencies for security vulnerabilities with our
            advanced scanning tool
          </p>
        </div>

        <Card className="p-6 animate-fade-up">
          <UploadForm />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            icon="🔍"
            title="Quick Analysis"
            description="Scan your dependencies in seconds"
          />
          <Feature
            icon="📊"
            title="Detailed Reports"
            description="Get comprehensive vulnerability insights"
          />
          <Feature
            icon="📱"
            title="Export Options"
            description="Download reports in multiple formats"
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
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <Card className="p-6 flex flex-col items-center text-center space-y-2 animate-fade-up">
    <span className="text-2xl mb-2">{icon}</span>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </Card>
);

export default Index;