import useTranslation from 'next-translate/useTranslation';
import FormSubscribe from '../Forms/Subscribe';

const Subscribe = () => {
  const { t } = useTranslation('common');

  return (
    <div className="text-center">
      <h3 className="pb-4">{t('subscribe_title')}</h3>
      <FormSubscribe />
      <p className="mt-4">
        <small>{t('subscribe_legal')}</small>
      </p>
    </div>
  );
};

export default Subscribe;
