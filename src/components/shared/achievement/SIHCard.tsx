import { Card } from "@/components/retroui/Card";

const SIHCard = () => {
  const technologies = ["React.js", "AI/ML", "C", "120+ Hours", "200+ Teams"];

  const colors = [
    "bg-yellow-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
  ];
  return (
    <div className="mt-8 mx-auto">
      <div className="relative w-full sm:max-w-3xl mx-auto">
        <Card className="relative bg-white border-[3px] border-black rounded-lg overflow-hidden">
          {/* Rank strip */}
          <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-2 bg-yellow-400 border-b-[3px] border-black px-4 py-3">
            <div className="flex gap-3 items-center">
              <span className="text-5xl font-black leading-none">#2</span>
              <div>
                <p className="font-bold text-sm leading-tight">
                  Smart India Hackathon 2022
                </p>
                <p className="text-xs text-yellow-900 font-medium">
                  Team Sustainable Daily
                </p>
              </div>
            </div>
            <div className="border-[2px] self-start border-black bg-white px-3 py-1 rounded-md">
              <p className="text-xs font-black tracking-wide">2ND PLACE</p>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 border-b-[3px] border-black">
            <div className="relative aspect-[4/3] overflow-hidden border-r-[3px] border-black">
              <img
                src="/src/assets/sih.JPG"
                alt="SIH 2022 winners"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black text-white text-[10px] font-black tracking-widest text-center py-1.5">
                WINNERS
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/src/assets/solution.jpeg"
                alt="Solution"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black text-white text-[10px] font-black tracking-widest text-center py-1.5">
                SOLUTION
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-black leading-snug">
                Built a real-time AI-powered health monitoring dashboard
              </h2>
              <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                Developed an AI-powered real-time health monitoring dashboard
                with sensor integration and data visualization to detect risks
                and improve road safety in heavy vehicles.
              </p>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <div key={i} className="relative">
                  <div
                    className={`absolute inset-0 ${colors[i % colors.length]} border-[2px] border-black translate-x-1 translate-y-1 rounded-md`}
                  />
                  <span className="relative block bg-white border-[2px] border-black px-3 py-1 text-xs font-bold rounded-md">
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t-[2px] border-black pt-3">
              <p className="text-xs font-bold">Durg, India</p>
              <p className="text-xs font-bold text-gray-500">Aug 2022</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SIHCard;
