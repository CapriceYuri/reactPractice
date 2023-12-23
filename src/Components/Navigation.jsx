const linkObj = [
  { linkName: "HOME", href: "/" },
  { linkName: "SHOP", href: "/Shop" },
  { linkName: "DASH", href: "/Dash" },
  { linkName: "BOARD", href: "/Board" },
];

function Navigation() {
  return (
    <>
      <div className="h-50 bg-purple-400">
        <nav>
          <ul className="flex w-full md:w-3/4 lg:w-1/2 mx-auto justify-center gap-x-10 p-5 font-medium text-md text-white">
            {linkObj.map((item) => (
              <li>
                <a key={item.linkName} href={item.href}>
                  {item.linkName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
