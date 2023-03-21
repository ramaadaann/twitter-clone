import { HomePage } from "../src/components/organisms";
import { HomeLayout } from "../src/layouts";

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  );
};

export default Home;
