const Nav = ({ custom, navStyle, authStyle }) => {
  return (
    <nav className={custom}>
      <ul className={navStyle}>
        <a href="#">Products</a>
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </ul>
      <ul
        className={
          authStyle +
          " relative before:absolute before:h-full before:w-[2px] before:bg-[#444] before:left-[40%]"
        }
      >
        <a href="#" className="px-4">
          Login
        </a>
        <a href="#" className="blue-btn ">
          Register
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
