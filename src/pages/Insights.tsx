
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowRight, ArrowLeft, ChevronRight, Search, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Insights = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Strategy", "Digital", "Healthcare", "Financial Services", "Manufacturing", "Technology"];

  const insights = [
    {
      title: "The Future of Financial Services: Digital Transformation Trends for 2023",
      excerpt: "Explore the key digital trends reshaping the financial services landscape and strategies for banks to stay competitive in a rapidly evolving market.",
      date: "May 15, 2023",
      author: "Julia Fischer",
      category: "Financial Services",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      featured: true
    },
    {
      title: "Healthcare Disruption: How Value-Based Care is Transforming the Industry",
      excerpt: "An analysis of the shift from fee-for-service to value-based care models and implications for healthcare providers, payers, and patients.",
      date: "April 22, 2023",
      author: "David Hoffmann",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      featured: true
    },
    {
      title: "Building Resilient Supply Chains: Lessons from Recent Disruptions",
      excerpt: "Strategic approaches to supply chain management that enhance resilience while maintaining efficiency in an increasingly volatile global environment.",
      date: "March 10, 2023",
      author: "Laura Klein",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      featured: false
    },
    {
      title: "Tech Growth Strategies: Balancing Innovation and Profitability",
      excerpt: "A framework for technology companies to drive sustainable growth through strategic innovation while maintaining financial discipline.",
      date: "February 28, 2023",
      author: "Robert Schneider",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      featured: false
    },
    {
      title: "Strategic Planning in Uncertain Times: A Practical Approach",
      excerpt: "How organizations can develop effective strategies in high-uncertainty environments using scenario planning and adaptive frameworks.",
      date: "January 15, 2023",
      author: "Michael Weber",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      featured: false
    },
    {
      title: "Digital Transformation: Beyond Technology Implementation",
      excerpt: "Why successful digital transformation requires cultural change, talent development, and business model innovation alongside technology.",
      date: "December 5, 2022",
      author: "Thomas Becker",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      featured: false
    }
  ];

  const filteredInsights = insights.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || insight.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredInsights = filteredInsights.filter(insight => insight.featured);
  const regularInsights = filteredInsights.filter(insight => !insight.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero
          title="Insights"
          subtitle="Expert perspectives on strategy, industry trends, and business transformation"
          imageSrc="https://images.unsplash.com/photo-1616696088518-6a64834554fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
        />

        {/* Search & Filter Section */}
        <section className="py-10 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-focus-accent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-focus-accent text-white"
                        : "bg-gray-100 text-focus-blue hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        {featuredInsights.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-8">Featured Insights</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredInsights.map((insight, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col md:flex-row gap-8 bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="md:w-2/5 h-60 md:h-auto overflow-hidden">
                      <img 
                        src={insight.image} 
                        alt={insight.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5 flex flex-col">
                      <div className="flex items-center mb-3">
                        <Tag size={14} className="text-focus-accent mr-2" />
                        <span className="text-focus-accent text-sm font-medium">{insight.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-focus-blue mb-3">{insight.title}</h3>
                      <p className="text-focus-muted mb-4 flex-grow">{insight.excerpt}</p>
                      <div className="flex items-center text-sm text-focus-muted mb-4">
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-4">{insight.date}</span>
                        <User size={14} className="mr-1" />
                        <span>{insight.author}</span>
                      </div>
                      <Link
                        to={`/insights/${insight.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-focus-accent hover:underline font-medium"
                      >
                        Read more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Insights */}
        <section className="py-16 bg-focus-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-focus-blue mb-8">All Insights</h2>
            
            {regularInsights.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularInsights.map((insight, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={insight.image} 
                        alt={insight.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col h-64">
                      <div className="flex items-center mb-3">
                        <Tag size={14} className="text-focus-accent mr-2" />
                        <span className="text-focus-accent text-sm font-medium">{insight.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-focus-blue mb-3">{insight.title}</h3>
                      <p className="text-focus-muted mb-4 flex-grow line-clamp-3">{insight.excerpt}</p>
                      <div className="flex items-center text-sm text-focus-muted mb-4">
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-4">{insight.date}</span>
                        <User size={14} className="mr-1" />
                        <span>{insight.author}</span>
                      </div>
                      <Link
                        to={`/insights/${insight.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-focus-accent hover:underline font-medium"
                      >
                        Read more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-focus-muted text-lg">No insights found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-4 bg-focus-accent hover:bg-blue-700 text-white"
                >
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-1">
                <Button variant="outline" className="h-9 w-9 p-0">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-9 w-9 p-0 bg-focus-accent text-white">
                  1
                </Button>
                <Button variant="outline" className="h-9 w-9 p-0">
                  2
                </Button>
                <Button variant="outline" className="h-9 w-9 p-0">
                  3
                </Button>
                <Button variant="outline" className="h-9 w-9 p-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-focus-blue rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Informed</h2>
                <p className="text-white text-lg mb-8 opacity-90">
                  Subscribe to our newsletter to receive the latest insights and thought leadership from our experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 flex-grow"
                  />
                  <Button className="bg-white text-focus-blue hover:bg-gray-100 px-6">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
