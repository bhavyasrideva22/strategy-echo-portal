
const StatsSection = () => {
  const stats = [
    {
      value: "20+",
      label: "Years of Experience",
      delay: 0
    },
    {
      value: "500+",
      label: "Clients Worldwide",
      delay: 100
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      delay: 200
    },
    {
      value: "50+",
      label: "Industry Experts",
      delay: 300
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 animate-slide-up"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-focus-accent mb-2">
                {stat.value}
              </div>
              <div className="text-focus-muted text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
