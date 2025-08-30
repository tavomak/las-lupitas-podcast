import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

type Props = {
  theme: string;
  ytSlug: string;
  spSlug: string;
  isShow?: boolean;
};

const NetworkIcons = ({ theme, ytSlug, spSlug, isShow }: Props) => {
  const { t } = useTranslation('common');

  return (
    <div className='mt-5'>
      <p className='text-uppercase'>{t('cta_listen')}</p>
      <ul className='d-lg-flex'>
        {spSlug && (
          <li className='me-2'>
            <a
              href={`${isShow ? `https://open.spotify.com/episode/${spSlug}` : spSlug}`}
              target='_blanc'
            >
              <Image
                src={`/spotify-logo-${theme}.png`}
                width={100}
                height={40}
                objectFit='contain'
                alt='spotify'
              />
            </a>
          </li>
        )}
        {ytSlug && (
          <li>
            <a
              href={`${isShow ? `https://www.youtube.com/watch?v=${ytSlug}` : ytSlug}`}
              target='_blanc'
            >
              <Image
                src={`/youtube-logo-${theme}.png`}
                width={100}
                height={40}
                objectFit='contain'
                alt='spotify'
              />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NetworkIcons;
