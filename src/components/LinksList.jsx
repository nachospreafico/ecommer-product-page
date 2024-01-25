const LinksList = () => {
  const mdStyles =
    "md:cursor-pointer md:text-gray-500 md:hover:text-black md:duration-200 md:font-normal";

  return (
    <>
      <a className={`${mdStyles} font-bold`}>Collections</a>
      <a className={`${mdStyles} font-bold`}>Men</a>
      <a className={`${mdStyles} font-bold`}>Women</a>
      <a className={`${mdStyles} font-bold`}>About</a>
      <a className={`${mdStyles} font-bold`}>Contact</a>
    </>
  );
};

export default LinksList;
