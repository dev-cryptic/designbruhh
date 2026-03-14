import { motion } from "framer-motion";

const skills = [
  { name: "Adobe Photoshop", value: 85 },
  { name: "Adobe Illustrator", value: 55 },
  { name: "After Effects", value: 65 },
  { name: "Adobe XD", value: 85 },
];

function SkillCircle({ value, name }) {
  const radius = 70;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2}>
        {/* background circle */}
        <circle
          stroke="#e5e5e5"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* animated progress */}
        <motion.circle
          stroke="#0B0B0B"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
        />

        {/* percentage text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl font-bold fill-black"
        >
          {value}%
        </text>
      </svg>

      <p className="mt-4 text-lg font-semibold">{name}</p>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="bg-[#F5F5F5] py-32">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* title */}
        <h2 className="text-4xl font-bold mb-16 text-center">
          Tool Used
        </h2>

        {/* skills grid */}
        <div className="grid md:grid-cols-4 gap-12 place-items-center">
          {skills.map((skill) => (
            <SkillCircle
              key={skill.name}
              value={skill.value}
              name={skill.name}
            />
          ))}
        </div>

      </div>
    </section>
  );
}