export default function Services() {

  const services = [
    "Brand Identity",
    "Illustration",
    "UI/UX Design",
    "Frontend Design",
    "Android/iOS Apps",
    "Software Development",
  ];

  return (
    <section className="bg-[#111111] text-white py-24">

      <div className="max-w-[1200px] mx-auto">

        <h2 className="text-3xl font-semibold mb-12">
          We design meaningful not just quick impressions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map(service => (
            <div
              key={service}
              className="border border-gray-700 p-6 rounded-xl"
            >
              {service}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}