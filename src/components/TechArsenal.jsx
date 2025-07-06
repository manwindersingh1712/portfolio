import React from "react";

const tools = [
  {
    name: "Next.js",
    desc: "React Framework",
    icon: "/tech_logos/next.png",
  },
  {
    name: "JavaScript",
    desc: "Scripting Language for Web Apps",
    icon: "/tech_logos/js.png",
  },
  {
    name: "Java",
    desc: "Backend & APIs (Spring Boot)",
    icon: "/tech_logos/java.png",
  },
  {
    name: "Ruby on Rails",
    desc: "Web Application Framework",
    icon: "/tech_logos/rails.png",
  },
  {
    name: "Node.js",
    desc: "JavaScript Backend Runtime",
    icon: "/tech_logos/nodejs.png",
  },
  {
    name: "RabbitMQ",
    desc: "Message Queue",
    icon: "/tech_logos/rabbitmq.png",
  },
  {
    name: "Sidekiq",
    desc: "Background Job Processor",
    icon: "/tech_logos/sidekiq.png",
  },
  {
    name: "Grafana",
    desc: "Observability Dashboards",
    icon: "/tech_logos/grafana.png",
  },
  {
    name: "Prometheus",
    desc: "Metrics Collection",
    icon: "/tech_logos/prometheus.png",
  },
  {
    name: "Elasticsearch",
    desc: "Profiling, Search & Logs",
    icon: "/tech_logos/elastic.png",
  },
//   {
//     name: "Redis",
//     desc: "Caching / Queues",
//     icon: "/tech_logos/redis.png",
//   },
];

const TechArsenal = ({isHead = false}) => {
  return (
    <div id="skills" className={ isHead ? "pt-0 mb-20" : "pt-20 mb-20"}>
      <div className="mb-12">
        <div className="text-white font-bold text-[94px] leading-[94px]">
          TECH
        </div>
        <div className="font-bold text-[94px]  leading-[94px] text-[#b6b4bd33]">
          ARSENAL
        </div>{" "}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-[90%]">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.05)] transition-all cursor-pointer duration-250 ease-in-out"
          >
            <div className="w-[60px] h-[60px] rounded-lg bg-white flex items-center justify-center overflow-hidden">
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-[50px] h-[50px] object-contain"
              />
            </div>
            <div>
              <div className="text-white font-semibold text-[24px]">
                {tool.name}
              </div>
              <div className="text-[#a1a1a1] text-[16px]">{tool.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechArsenal;
