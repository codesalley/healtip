/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';

const HomePage = ({ profile }) => {
  console.log(profile);
  return (<h2>You are here </h2>);
};
const mapStateToProps = (state) => ({
  profile: state,
});

export default connect(mapStateToProps)(HomePage);
