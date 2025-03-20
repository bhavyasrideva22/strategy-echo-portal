
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const QuestionPaperGenerator = () => {
  const { toast } = useToast();
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [topics, setTopics] = useState("");
  const [paperType, setPaperType] = useState("exam");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPaper, setGeneratedPaper] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate paper generation (in a real app, this would call an API)
    setTimeout(() => {
      setGeneratedPaper(`
# ${subject} ${paperType.toUpperCase()}
## Grade: ${grade}

### Section A: Multiple Choice (20 marks)
1. What is the capital of France?
   a) London
   b) Berlin
   c) Paris
   d) Madrid

2. Which of the following is not a mammal?
   a) Whale
   b) Bat
   c) Snake
   d) Elephant

### Section B: Short Answer Questions (30 marks)
1. Explain the water cycle in your own words. (5 marks)
2. Describe three characteristics of living things. (5 marks)
3. What is photosynthesis and why is it important? (10 marks)
4. Compare and contrast mitosis and meiosis. (10 marks)

### Section C: Essay Questions (50 marks)
1. Discuss the impact of climate change on biodiversity. (25 marks)
2. Evaluate the effectiveness of international cooperation in addressing global environmental challenges. (25 marks)
      `);
      
      setIsGenerating(false);
      toast({
        title: "Question Paper Generated",
        description: "Your custom question paper has been created successfully.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Question Paper Generator"
          subtitle="Create custom question papers for exams, quizzes, and assessments"
          imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-focus-blue mb-6">Generate Your Question Paper</h2>
                <p className="text-focus-muted mb-8">Fill in the details below to create a customized question paper tailored to your specific requirements.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="e.g., Mathematics, Science, History" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="grade">Grade/Level</Label>
                    <Input 
                      id="grade" 
                      placeholder="e.g., 10th Grade, Undergraduate" 
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="topics">Topics (comma separated)</Label>
                    <Textarea 
                      id="topics" 
                      placeholder="e.g., Algebra, Geometry, Calculus" 
                      value={topics}
                      onChange={(e) => setTopics(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="paperType">Paper Type</Label>
                    <Select 
                      value={paperType} 
                      onValueChange={setPaperType}
                    >
                      <SelectTrigger id="paperType">
                        <SelectValue placeholder="Select paper type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exam">Final Exam</SelectItem>
                        <SelectItem value="quiz">Quick Quiz</SelectItem>
                        <SelectItem value="test">Mid-term Test</SelectItem>
                        <SelectItem value="practice">Practice Sheet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isGenerating}
                  >
                    {isGenerating ? "Generating..." : "Generate Question Paper"}
                  </Button>
                </form>
              </div>
              
              <div className="animate-fade-in">
                {generatedPaper ? (
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-focus-blue">Generated Question Paper</h3>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            navigator.clipboard.writeText(generatedPaper);
                            toast({
                              title: "Copied to clipboard",
                              description: "Question paper has been copied to your clipboard.",
                            });
                          }}
                        >
                          Copy
                        </Button>
                      </div>
                      <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-md text-sm overflow-auto max-h-[600px]">
                        {generatedPaper}
                      </pre>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg">
                    <div className="mb-6">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="#007bff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#007bff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 13H12" stroke="#007bff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 17H16" stroke="#007bff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-focus-blue mb-2">Your Question Paper Will Appear Here</h3>
                    <p className="text-focus-muted">Fill out the form and generate your custom question paper to see the results.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuestionPaperGenerator;
