import { useDispatch } from 'react-redux';
import { openCollaboratorsModal } from '../../redux/modal/slice';


import s from './ModalCollaboratorsButton.module.css';
import { BsFillPeopleFill } from 'react-icons/bs';


const ModalCollaboratorsButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={s.addModalBtn}
      onClick={() => {
        dispatch(openCollaboratorsModal());
      }}
    >

      {/* <span className={s.initial}>C</span> */}
      <BsFillPeopleFill className={s.icon} size={20} />
    </button>
  );
};

export default ModalCollaboratorsButton;
