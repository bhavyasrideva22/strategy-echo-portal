
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

interface TemplateItem {
  id: string;
  title: string;
  category: string;
  description: string;
  previewImage: string;
}

const Template = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState("all");
  
  const templates: TemplateItem[] = [
    {
      id: "template-001",
      title: "Mathematics Assessment",
      category: "math",
      description: "A comprehensive template for mathematics assessment covering algebra, geometry, and calculus.",
      previewImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "template-002",
      title: "Science Lab Report",
      category: "science",
      description: "Template for science lab reports with sections for hypothesis, methodology, results, and conclusion.",
      previewImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "template-003",
      title: "English Literature Analysis",
      category: "english",
      description: "A template for analyzing literary works with sections for character analysis, themes, and symbolism.",
      previewImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "template-004",
      title: "History Timeline Assessment",
      category: "history",
      description: "Template for assessing student understanding of historical events and their significance.",
      previewImage: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "template-005",
      title: "Computer Science Quiz",
      category: "computer",
      description: "A template for computer science quizzes covering programming concepts, algorithms, and data structures.",
      previewImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "template-006",
      title: "Geography Map Test",
      category: "geography",
      description: "Template for geography tests focusing on map reading, landforms, and geographical concepts.",
      previewImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const filteredTemplates = activeCategory === "all" 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  const handleUseTemplate = (templateId: string) => {
    toast({
      title: "Template Selected",
      description: `Template ${templateId} has been loaded into the editor.`,
    });
    // In a real application, this would navigate to the editor with the template loaded
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Question Paper Templates"
          subtitle="Browse and use professionally designed templates for various subjects and assessments"
          imageSrc="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-focus-blue mb-10 text-center animate-fade-in">Browse Templates</h2>
              
              <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-12">
                <div className="flex justify-center mb-8">
                  <TabsList className="h-10">
                    <TabsTrigger value="all" className="px-6">All</TabsTrigger>
                    <TabsTrigger value="math" className="px-6">Mathematics</TabsTrigger>
                    <TabsTrigger value="science" className="px-6">Science</TabsTrigger>
                    <TabsTrigger value="english" className="px-6">English</TabsTrigger>
                    <TabsTrigger value="history" className="px-6">History</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value={activeCategory} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template) => (
                      <Card key={template.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                        <div className="aspect-w-16 aspect-h-10 bg-gray-100">
                          <img 
                            src={template.previewImage} 
                            alt={template.title} 
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-focus-blue mb-2">{template.title}</h3>
                          <p className="text-focus-muted mb-6 text-sm h-16">{template.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs uppercase tracking-wide bg-gray-100 text-focus-muted px-3 py-1 rounded-full">
                              {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                            </span>
                            <Button 
                              variant="default" 
                              size="sm"
                              onClick={() => handleUseTemplate(template.id)}
                            >
                              Use Template
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="text-center animate-fade-in">
                <h3 className="text-xl font-semibold text-focus-blue mb-4">Can't find what you're looking for?</h3>
                <p className="text-focus-muted mb-6">Create a custom question paper from scratch using our question paper generator.</p>
                <Button 
                  variant="outline" 
                  className="mx-auto"
                  onClick={() => window.location.href = "/question-paper"}
                >
                  Create Custom Paper
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Template;
