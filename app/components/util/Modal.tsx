type ModalProps = {
  children: React.ReactNode;
  onClose: React.MouseEventHandler;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
};

export default Modal;
