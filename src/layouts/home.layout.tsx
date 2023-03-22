import Layout from "./interface/props.interface";

const HomeLayout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto h-full">{children}</div>
    </>
  );
};

export default HomeLayout;
