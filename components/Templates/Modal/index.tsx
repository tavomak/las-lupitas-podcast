import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Modal = ({
  children, onClick, showModal, size, bgColor, noPadding,
}) => (
  <CSSTransition
    in={showModal}
    timeout={300}
    classNames="alert"
    unmountOnExit
  >
    <div className={`${styles.modal}`} data-testid="modal">
      <div
        className={`${size === 'sm' ? styles.sm : styles.md} ${size === 'lg' ? styles.lg : ''} ${size === 'xl' ? styles.xl : ''} ${bgColor ? `${bgColor} text-white` : 'bg-white'} ${noPadding ? 'p-0' : 'p-3'} shadow m-auto border-0 position-relative`}
        style={{ borderRadius: '16px' }}
      >
        <a href="!#" data-testid="printed-username" className={`p-0 ${styles.close}`} onClick={onClick}>
          <span aria-hidden="true" className={`p-0 ${styles.closeIcon}`}>
            &times;
          </span>
        </a>
        <div className={`modal-body ${noPadding ? 'p-0' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  </CSSTransition>
);

Modal.defaultProps = {
  children: null,
  size: '',
  onClick: undefined,
  bgColor: '',
};

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  showModal: PropTypes.bool.isRequired,
  size: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Modal;
