import { useState } from 'react';
import { Icons } from '../Icons/Icons';
import CollaboratorsModal from '../CollaboratorsModal/CollaboratorsModal';
import s from './AddModalButton.module.css';

const AddModalButton = () => {
  const [isCollaboratorsModalOpen, setIsCollaboratorsModalOpen] =
    useState(false);

  return (
    <>
      <button
        className={s.addModalBtn}
        onClick={() => setIsCollaboratorsModalOpen(true)}
      >
        <Icons className={s.plusIcon} name={'team'} width={20} height={20} />
      </button>
      <CollaboratorsModal
        open={isCollaboratorsModalOpen}
        onClose={() => setIsCollaboratorsModalOpen(false)}
      />
    </>
  );
};

export default AddModalButton;
