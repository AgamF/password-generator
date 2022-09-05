import Link from "next/link";

const navEntries = [
  {
    title: "Learn more about this project",
    text: "Learn more",
    key: 2,
    link: "/learnmore"
  },
  {
    title: "This will take you to my website",
    text: "About the developer",
    key: 3,
    link: "https://agamfaraj.vercel.app"
  },
  {
    title: "Back to the home page 😄",
    text: "Home",
    key: 1,
    link: "/"
  },
];

export default function Navbar() {
  return (
    <div className="navbar">
      {navEntries.map(entry => (
        <Link key={entry.key} href={entry.link}>
          <button 
            className="btn" 
            title={entry.title} 
            type="button">
            {entry.text}
          </button>
        </Link>
      ))}
    </div>
  );
}