/* eslint-disable jsx-a11y/label-has-associated-control */
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDoctors, appointment } from '../actions';
import { getToken } from '../helpers/storageHelper';
import { typeOfAppointments } from '../utils/constants';

const BookForm = ({
  profile, doctors, getDoctor, book,
}) => {
  const [doctor, setDoctor] = useState();
  const { id } = useParams();
  const aptDate = useRef('');
  const aptTime = useRef('');
  const aptCategory = useRef('');
  const aptInfo = useRef('');
  const aptLocation = useRef('');
  const history = useHistory();

  useEffect(() => {
    const token = getToken();
    getDoctor(token);
    if (doctors.length > 0) {
      setDoctor(doctors.filter((doc) => doc.id.toString() === id));
    }
  }, [getDoctor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await book(doctor[0].id,
      profile.id,
      aptInfo.current.value,
      JSON.stringify([aptDate.current.value]),
      aptCategory.current.value,
      aptLocation.current.value);
    if (await res.payload) {
      history.goBack();
    }
  };

  return doctor ? (
    <div className="bg-white h-full flex flex-col items-center rounded-md px-5 gap-1 py-3 overflow-y-scroll">
      <h3 className="text-md text-gray-500 font-semibold text-center py-1">
        An Appointment with
        {' '}
        {doctor[0].full_name}
        {' '}
      </h3>
      <form className=" flex flex-col gap-1" onSubmit={handleSubmit}>
        <div>
          <p className="text-sm text-gray-500 font-light"> Date of appointment </p>
          <input ref={aptDate} type="Date" className="border-gray-400 border-2 rounded-md font-light text-sm p-2 w-full" required />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-light"> Time of appointment </p>
          <input ref={aptTime} type="Time" className="border-gray-400 border-2 rounded-md font-light text-sm p-2 w-full" required />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-light">
            Type of Appointment
          </p>
          <select ref={aptCategory} className="border-gray-400 border-2 rounded-md font-light text-sm p-2 w-full" required>
            {typeOfAppointments.map((ele) => (
              <option key={ele.id} value={ele.name}>
                {ele.name}
                {' '}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-500 font-light">
            What&#39;s your appoitment about ?
            <textarea ref={aptInfo} className="border-gray-400 border-2 rounded-md font-light text-sm p-2 w-full" required />
          </label>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-light">
            Location
          </p>
          <select ref={aptLocation} className="border-gray-400 border-2 rounded-md font-light text-sm p-2 w-full" required>
            <option value="InOffice" title="Online">Online </option>
            <option value="InOffice" title="In Office"> In Office</option>
          </select>
        </div>
        <div className="w-full flex justify-around py-2">
          <button className="bg-gray-200 px-3 font-semibold text-sm  py-2 rounded-md text-gray-800" type="button">Cancel</button>
          <button className="bg-indigo-400 px-3 font-medium py-2 text-sm rounded-md text-gray-50" type="submit">Submit</button>
        </div>
      </form>
    </div>
  ) : <div> loading </div>;
};

BookForm.propTypes = {
  profile: PropTypes.shape(PropTypes.object).isRequired,
  getDoctor: PropTypes.func.isRequired,
  doctors: PropTypes.shape(PropTypes.object).isRequired,
  book: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  doctors: state.doctors,
});
const mapDispatchToProps = {
  getDoctor: (token) => getDoctors(token),
  book: (doctor, user, info, time, category, location) => (
    appointment(doctor, user, info, time, category, location)
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
