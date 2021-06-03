import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Favourite = ({ profile }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 grid-flow-row w-full justify-items-center">
    { profile.favorites && profile.favorites.length > 0 ? profile.favorites.map((fav) => (
      <div key={fav.id} className="bg-white rounded-md flex flex-row justify-between px-3 py-2 items-center w-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart-half  fill-red text-xs md:text-sm w-8" viewBox="0 0 16 16">
          <path d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
        <div>
          <p className="text-sm font-medium text-left text-gray-500">
            {fav.full_name}
          </p>
          <p className="text-xs text-left self-start  font-thin text-gray-500">
            {fav.category ?? 'General'}
          </p>
        </div>
        <p className="text-xs text-left  font-medium text-gray-500">
          {' '}
          Age:
          {' '}
          {fav.age ?? '20'}
          {' '}
        </p>
      </div>
    )) : <h2> No Favorites yet </h2>}
  </div>
);

const mapStateToDispatch = (state) => ({
  profile: state.profile,
});

Favourite.propTypes = {
  profile: PropTypes.shape({
    favorites: PropTypes.arrayOf(PropTypes.object),
    full_name: PropTypes.string,
    age: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToDispatch)(Favourite);
