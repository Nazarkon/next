import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { useParams, useMatch } from 'react-router-dom';
import Link from 'next/link';
import './Header.scss';

const Header = ({ handleClose, handleClick }) => {
  // const [headerColor, setHeaderColor] = useState('');

  // const params = useParams();

  // const matchMovieDetails = useMatch(`/movie-details/${params.id}`);
  const matchMovieDetails = false;

  // const listenScrollEvent = () => {
  //   window.scrollY > 10 ? setHeaderColor('#232323') : setHeaderColor('');
  // };
  return (
    <header className="header-container" style={{ backgroundColor: '#232323' }}>
      <p className="header-title">
        <strong className="header-title-first">netflix</strong>roulette
      </p>
      {matchMovieDetails ? (
          <FontAwesomeIcon
            className="header-icon"
            icon={faMagnifyingGlass}
            rotation={90}
            onClick={handleClose}
          />
      ) : (
        <button className="header-button" onClick={handleClick}>
          + Add Movie
        </button>
      )}
    </header>
  );
};

Header.propTypes = {
  handleClose: PropTypes.func,
  handleClick: PropTypes.func
};

export default Header;
