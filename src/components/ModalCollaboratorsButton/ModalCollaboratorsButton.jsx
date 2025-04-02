import { useDispatch } from 'react-redux';
import { openCollaboratorsModal } from '../../redux/modal/slice';
import s from './ModalCollaboratorsButton.module.css';

const ModalCollaboratorsButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={s.addModalBtn}
      onClick={() => {
        dispatch(openCollaboratorsModal());
      }}
    >
      <span className={s.initial}>C</span>
    </button>
  );
};

export default ModalCollaboratorsButton;
