import Layout from "./interface/props.interface";

const HomeLayout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-screen-xl scroll-smooth mx-auto">
        {children}
      </div>
    </>
  );
};

export default HomeLayout;
