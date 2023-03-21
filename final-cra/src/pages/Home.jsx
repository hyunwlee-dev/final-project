import Header from 'components/Header/Header';
import Visual from 'components/Visual/Visual';
import SectionOne from 'components/MainSection/SectionOne';
import FilmList from 'components/FilmList/FilmList';
import Siheky from 'components/Siheky/Siheky';
import SmoothScroll from 'components/smoothScroll/SmoothScroll';
import Footer from 'components/Footer/Footer';

export const Home = () => {
  return (
    <>
      <SmoothScroll>
        <Header />
        <Visual />
        <SectionOne />
        <Siheky />
        <FilmList />
        <Footer />
      </SmoothScroll>
    </>
  );
};
