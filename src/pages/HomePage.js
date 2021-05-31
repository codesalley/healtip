/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';

const HomePage = ({ profile }) => {
  console.log(profile);
  return (
    <div className="overflow-hidden flex">
      <SideBar />
      <div>
        <div>nav</div>
        <div>body</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state,
});

export default connect(mapStateToProps)(HomePage);
