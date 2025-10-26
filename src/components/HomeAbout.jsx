
import { FaProjectDiagram, FaSmile, FaAward } from "react-icons/fa";
import homeA from "../assets/homeA.webp";
import { Link } from "react-router-dom";
import { Counter } from "../components/Counter";



/** Small card for stats */
function StatCard({ icon, number, suffix, label }) {
  return (
    <div
      tabIndex={0}
      className="flex items-center bg-white p-5 rounded-lg shadow-sm transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-200"
    >
      <div className="p-3 bg-indigo-100 rounded-full mr-4 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-300">
          <Counter target={number} suffix={suffix} />
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">{label}</p>
      </div>
    </div>
  );
}

/** HomeAbout: improved layout with image + stats */
export default function HomeAbout() {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-indigo-600 text-2xl sm:text-3xl" />,
      number: 150,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: <FaSmile className="text-indigo-600 text-2xl sm:text-3xl" />,
      number: 100,
      suffix: "+",
      label: "Satisfied Clients",
    },
    {
      icon: <FaAward className="text-indigo-600 text-2xl sm:text-3xl" />,
      number: 10,
      suffix: "+",
      label: "Years of Experience",
    },
  ];

  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Grid: text | image | stats on md+, stacked on mobile */}
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          {/* Text */}
          <div className="md:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              About Our Company
            </h2>
            <p className="mt-4 text-gray-600">
              <strong>AcmeTech</strong> builds robust web applications that
              drive business success. Our experienced team delivers
              high-performance, maintainable solutions tailored to your needs.
            </p>
            <p className="mt-3 text-gray-600">
              We focus on clear communication, pragmatic engineering, and
              consistent delivery — so projects finish on time and produce real
              results for your users.
            </p>
            <div className="mt-6">
              <Link

                to="/about"
                className="inline-block bg-[#FF7300] text-white px-5 py-2 rounded-full font-medium shadow hover:bg-red-700 transition"
              >
                Explore More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={homeA}
                alt="Team collaborating on a project"
                loading="lazy"
                className="w-full h-64 md:h-56 lg:h-72 object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-1 gap-4">
              {stats.map((s, i) => (
                <StatCard
                  key={i}
                  icon={s.icon}
                  number={s.number}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
