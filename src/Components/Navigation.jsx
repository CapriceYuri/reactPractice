import { Link } from "react-router-dom";

const linkObj = [
  { linkName: "HOME", href: "/reactPractice/", id: 1 },
  { linkName: "SHOP", href: "/reactPractice/Shop/", id: 2 },
  { linkName: "DASH", href: "/reactPractice/Dash", id: 3 },
  { linkName: "BOARD", href: "/reactPractice/Board", id: 4 },
];

function Navigation() {
  return (
    <>
      <div className="h-50 bg-purple-400">
        <nav>
          <ul className="flex w-full md:w-3/4 lg:w-1/2 mx-auto justify-center gap-x-10 p-5 font-medium text-md text-white">
            {linkObj.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.linkName}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
