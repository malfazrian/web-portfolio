export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="flex justify-center bg-gray-950 text-gray-500 py-6">
      <p className="text-sm">Copyright © {currentYear} MAlfazrian</p>
    </div>
  );
}
