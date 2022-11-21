import { AiOutlineClose } from "react-icons/ai";

const Menu = ({ openMenu, changeMenu, redes }) => {
  return (
    <div
      className={`flex flex-col justify-between w-full h-screen fixed z-10 bg-[#082338] duration-700
          ${openMenu ? null : " translate-x-full"}
        `}
    >
      <AiOutlineClose
        color="white"
        className="w-10 h-10 relative top-10 left-5"
        onClick={changeMenu}
      />
      <div className="flex flex-col gap-5">
        {redes.map((red, i) => (
          <a
            key={i}
            target="_blank"
            href={red.url}
            className="flex w-full justify-center gap-5 py-5 bg-[#063254] text-white font-bold items-center"
          >
            <red.icon color="white" className="w-10 h-10" />
            {red.name}
          </a>
        ))}
      </div>
      <div className="h-24 flex items-center justify-center">
        <p className="text-white">Realizado por Javier Martinez</p>
      </div>
    </div>
  );
};

export default Menu;
