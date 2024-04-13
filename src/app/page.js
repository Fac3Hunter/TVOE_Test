import Content from "./components/Content";
import FilmInfo from "./components/FilmInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <FilmInfo />
      <Content />
      <Footer />
    </div>
  );
}
