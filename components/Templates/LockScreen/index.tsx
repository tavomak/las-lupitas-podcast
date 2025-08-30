import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

type Props = {
  loading: boolean;
};

const LockScreen = ({ loading }: Props) => (
  <CSSTransition in={!loading} timeout={300} classNames='out-animation' unmountOnExit>
    <div className={styles.wrapper}>index</div>
  </CSSTransition>
);

LockScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LockScreen;
