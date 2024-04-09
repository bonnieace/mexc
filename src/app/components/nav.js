import Link from 'next/link';

const Nav = () => {
  return (
    <nav className=" p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="https://www.nanobyte.finance/wp-content/uploads/2023/04/full-mexc-logo-nobg.png" alt="MEXC Logo" className="h-8 w-8" />
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/trade" className="text-white hover:text-gray-300">Trade</Link>
          </li>
          <li>
            <Link href="/settings" className="text-white hover:text-gray-300">Settings</Link>
          </li>
        </ul>
      </div>
      {/* Add any other content on the right side */}
    </nav>
  );
};

export default Nav;
