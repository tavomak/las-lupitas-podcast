import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  loading: boolean,
  text: string,
  className: string,
  submit: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  imgPrev: React.ReactNode,
  imgNext: React.ReactNode,
  disabled: boolean | undefined,
}

const ButtonSubmit = ({
  loading,
  text,
  className,
  submit,
  onClick,
  imgPrev,
  imgNext,
  disabled,
}: Props) => (
  <button
    className={className}
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
    disabled={loading || disabled}
  >
    {imgPrev && <span className="me-2">{imgPrev}</span>}
    <span className="font-weight-bold px-1">{`${text} `}</span>
    {imgNext && <span className="ms-2">{imgNext}</span>}
    {loading && (
      <span
        className="me-2 spinner-grow spinner-grow-sm text-light"
        role="status"
        aria-hidden="true"
      />
    )}
  </button>
);

ButtonSubmit.defaultProps = {
  loading: false,
  className: '',
  submit: false,
  onClick: () => {},
  imgPrev: null,
  imgNext: null,
  disabled: null,
};

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  className: PropTypes.string,
  submit: PropTypes.bool,
  onClick: PropTypes.func,
  imgPrev: PropTypes.node,
  imgNext: PropTypes.node,
  disabled: PropTypes.bool,
};

export default ButtonSubmit;
