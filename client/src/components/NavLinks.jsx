function NavLinks({ children, links }) {
  console.log(links);

  const renderedLinks = links.map((link, i) => (
    <li
      key={i}
      className="border-b-2 text-white border-b-slate-900 hover:border-b-2 hover:border-green-gator transition-all cursor-pointer font-regular text-sm"
    >
      {link}
    </li>
  ));

  return (
    <ul className="hidden gap-4 justify-between lg:gap-10 sm:flex">
      {renderedLinks}
    </ul>
  );
}

export default NavLinks;
