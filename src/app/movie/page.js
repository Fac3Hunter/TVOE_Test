import Header from "../components/Header";
import Footer from "../components/Footer";
import FilmInfo from "../components/FilmInfo";
import Season from "../components/Season";
import Info from "../components/Info";
import Reviews from "../components/Reviews";

const movie = () => {
  return (
    <div>
      <Header />
      <FilmInfo description={true} />
      <Season />
      <div>
        <Info />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default movie;
