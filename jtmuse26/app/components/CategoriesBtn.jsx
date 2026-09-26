function CategoriesBtn({ href, imgSrc }) {
  return (
    <a
      href={href}
      className="inline-flex justify-center items-center animated-bg z-10 relative text-white cursor-pointer min-w-[100px] max-w-[130px] w-[30vw] h-[30vw] min-h-[100px] max-h-[130px] rounded-lg overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      style={{
        backgroundImage: 'url("/assets/categories/btnBg.webp")',
        backgroundSize: "400% 400%",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/10 z-9 backdrop-blur-[3px]" />
      <img className="z-10 relative scale-130" src={imgSrc} alt="" />
    </a>
  );
}
export default CategoriesBtn;
