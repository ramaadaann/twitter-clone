import { HomePage } from "../src/components";
import { HomeLayout } from "../src/layouts";

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  );
};

export default Home;
