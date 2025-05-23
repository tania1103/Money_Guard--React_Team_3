//Alexandra
import { useDispatch } from 'react-redux';
import { openAddModal } from '../../redux/modal/slice';
import { Icons } from '../Icons/Icons';
import s from './AddButton.module.css';

const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={s.addBtn}
      onClick={() => {
        dispatch(openAddModal());
      }}
    >
      <Icons className={s.plusIcon} name={'plus'} width={20} height={20} />
    </button>
  );
};

export default AddButton;
