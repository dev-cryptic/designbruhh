export default function Footer() {
  return (
    <footer className="border-t mt-20">

      <div className="max-w-[1200px] mx-auto py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="font-bold">designbruuuh.</h3>
          <p className="text-gray-600 mt-2">
            Creative design studio.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <p>Branding</p>
          <p>Editing</p>
          <p>AI Video Production</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Pages</h4>
          <p>Home</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>

      </div>

      <div className="text-center pb-6 text-gray-500">
        © 2026 Creatwise
      </div>

    </footer>
  );
}