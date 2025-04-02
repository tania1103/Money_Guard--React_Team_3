import { useSelector, useDispatch } from 'react-redux';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { selectIsCollaboratorsModalOpen } from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import s from './CollaboratorsModal.module.css';
import ImgTania from '../../images/tania.jpeg';

import ImgAlexandra from '../../images/alexandra.jpg';
import ImgGabriel from '../../images/gabi.jpeg';
import ImgAura from '../../images/aura.png';
import ImgFlori from '../../images/flori.JPG';


const collaborators = [
  {
    name: 'Tatiana Culeac',
    pic: ImgTania,
    role: 'Team Lead',
  },
  {
    name: 'Alexandra Stavila',
    pic: ImgAlexandra,
    role: 'Scrum Master',
  },

  { name: 'Aura Dragan', pic: ImgAura, role: 'Developer' },
  {
    name: 'Flori Moise',
    pic: ImgFlori,
    role: 'Developer',
  },
  {
    name: 'Adina Gadalean',

    pic: 'src/images/adina.jpeg',
    role: 'Developer',
  },
  {
    name: 'Gabriel Dutu',
    pic: ImgGabriel,
    role: 'Developer',
  },
];

const CollaboratorsModalTransaction = () => {
  const dispatch = useDispatch();
  const isCollaboratorsModalOpen = useSelector(selectIsCollaboratorsModalOpen);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <ModalWrapper isOpenModal={isCollaboratorsModalOpen} onClose={handleClose}>
      <div className={s.modalContainer}>
        <h2 className={s.title}>Collaborators</h2>
        <div className={s.collaboratorsList}>
          {collaborators.map((collaborator, index) => (
            <div key={index} className={s.collaborator}>
              <img
                src={collaborator.pic}
                alt={collaborator.name}
                className={s.avatar}
              />
              <p className={s.name}>{collaborator.name}</p>
              <span className={s.role}>{collaborator.role}</span>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CollaboratorsModalTransaction;
