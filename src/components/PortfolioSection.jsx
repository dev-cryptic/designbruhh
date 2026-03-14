import { motion } from "framer-motion";

export default function PortfolioSection() {
  const items = [
    {
      title: "Logo Design",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Coding",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Bike Design",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      size: "lg:col-span-1 lg:row-span-2",
    },
    {
      title: "Flower Design",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Website Design",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "More Design",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc",
      size: "lg:col-span-1 lg:row-span-2",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-28">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="border border-gray-300 px-4 py-1 rounded-full text-sm text-gray-600">
            Portfolio
          </span>

          <h2 className="text-4xl font-semibold mt-6">
            Our Creative Portfolio
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[220px]">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl ${item.size}`}
            >

              {/* Image */}
              <img
                src={item.image}
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25"></div>

              {/* Title */}
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                {item.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}