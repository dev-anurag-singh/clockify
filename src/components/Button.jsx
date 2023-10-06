function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-black-light group flex items-center gap-3 rounded-full bg-white p-2 pl-5 pr-2 text-xs font-bold uppercase tracking-[.25em] md:text-base"
    >
      {children}
    </button>
  );
}

export default Button;
