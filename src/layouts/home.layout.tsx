import Layout from "./interface/props.interface";

const HomeLayout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </>
  );
};

export default HomeLayout;
