import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileType, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const UploadForm = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === "text/plain") {
      setFile(droppedFile);
      toast({
        title: "File uploaded successfully",
        description: `${droppedFile.name} is ready for analysis`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload a .txt file",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type === "text/plain") {
      setFile(selectedFile);
      toast({
        title: "File uploaded successfully",
        description: `${selectedFile.name} is ready for analysis`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload a .txt file",
      });
    }
  };

  const handleAnalyze = () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please upload a file first",
      });
      return;
    }
    // TODO: Implement file analysis
    console.log("Analyzing file:", file.name);
  };

  return (
    <div className="space-y-6">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
          isDragging ? "border-primary bg-primary/5" : "border-muted",
          "hover:border-primary hover:bg-primary/5"
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Upload Dependencies File</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop your Maven dependencies file here or click to browse
            </p>
          </div>
          <input
            type="file"
            accept=".txt"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button variant="outline" className="cursor-pointer">
              Browse Files
            </Button>
          </label>
        </div>
      </div>

      {file && (
        <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg animate-fade-up">
          <div className="flex items-center space-x-3">
            <FileType className="h-5 w-5 text-primary" />
            <span className="font-medium">{file.name}</span>
          </div>
          <Button onClick={handleAnalyze}>Analyze Dependencies</Button>
        </div>
      )}

      <div className="bg-muted/30 p-4 rounded-lg flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
        <div className="text-sm text-muted-foreground">
          <p className="font-medium mb-1">File Format Requirements:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Text file (.txt) containing Maven dependencies</li>
            <li>One dependency per line</li>
            <li>Format: GroupId:ArtifactId:Version</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;