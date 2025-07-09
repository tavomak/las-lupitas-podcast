import Image from 'next/image';
import styles from './styles.module.scss';

interface Props {
  image: {
    url: string,
    name: string,
  },
  episodeNumber?: string,
  episodePart?: string,
}

const EpisodeImage = ({ image, episodeNumber, episodePart }: Props) => (
  <div className="position-relative">
    <Image src={`${image.url}`} alt={image.name} width={16} height={9} layout="responsive" />
    {episodeNumber && (
    <span className={styles.episodeNumber}>
      {'EP. '}
      {episodeNumber}
    </span>
    )}
    {episodePart && (
      <span className={styles.episodePart}>
        {`Parte ${episodePart}`}
      </span>
    )}
  </div>
);

export default EpisodeImage;
