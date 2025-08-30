import useTranslation from 'next-translate/useTranslation';
import { FaSpotify, FaYoutube } from 'react-icons/fa';

type Props = {
  ytSlug: string;
  spSlug: string;
  isShow?: boolean;
};

const NetworkButtons = ({ ytSlug, spSlug, isShow }: Props) => {
  const { t } = useTranslation('common');

  return (
    <div className='mt-5'>
      <ul className='d-lg-flex'>
        {spSlug && (
          <li className='me-2'>
            <a
              href={`${isShow ? `https://open.spotify.com/episode/${spSlug}` : spSlug}`}
              target='_blanc'
              className='btn btn-complementary mt-4 text-uppercase py-2 px-4'
            >
              <span className='me-2'>
                <FaSpotify />
              </span>
              {t('btn_view_on_spotify')}
            </a>
          </li>
        )}
        {ytSlug && (
          <li>
            <a
              href={`${isShow ? `https://www.youtube.com/watch?v=${ytSlug}` : ytSlug}`}
              target='_blanc'
              className='btn btn-complementary mt-4 text-uppercase py-2 px-4'
            >
              <span className='me-2'>
                <FaYoutube />
              </span>
              {t('btn_view_on_youtube')}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NetworkButtons;
