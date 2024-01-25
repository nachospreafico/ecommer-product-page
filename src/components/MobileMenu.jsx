import Close from "./../assets/images/icon-close.svg";
import LinksList from "./LinksList";

const MobileMenu = ({ setNav }) => {
  return (
    <div className="fixed left-0 top-0 w-[65vw] h-screen z-10 bg-white p-5 py-6 flex flex-col gap-8">
      <img
        onClick={() => setNav(false)}
        src={Close}
        alt="close icon"
        className="w-5 h-5"
      ></img>
      <nav className="flex flex-col gap-4">
        <LinksList />
      </nav>
    </div>
  );
};

export default MobileMenu;
