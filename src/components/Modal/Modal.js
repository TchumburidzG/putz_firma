export const Modal = ({  onClose, children }) => {
  const closeModal = () => {
    onClose(false);
  };
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};