import React from 'react';
import { useRouter } from 'next/router';
import {
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa';
import Button from '@components/Atoms/Button';
import EpisodeImage from '@components/Molecules/EpisodeImage';
import { Props } from './types';

const EpisodeCard = ({
  className,
  slug,
  title,
  description,
  image,
  audioDuration,
  episodeNumber,
}: Props) => {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    router.push(`/episodios/${slug}`);
  };
  return (
    <div className={`${className || ''} mt-4 mt-md-0`} style={{ height: '100%' }}>
      <article className="card shadow" style={{ height: '100%' }}>
        <div className="card-header">
          <a href="!#" onClick={(e) => handleClick(e)}>
            <EpisodeImage
              image={{ url: image?.url || '/hero-about.png', name: image?.name }}
              episodeNumber={episodeNumber}
            />
          </a>
        </div>
        <div className="card-body d-flex flex-column">
          {title}
          <div className="py-3">
            {description.slice(0, 120).concat(' ...')}
          </div>
          <div className="mt-auto d-flex justify-content-between">
            <Button
              className="align-self-start btn btn-styleless"
              onClick={(e) => handleClick(e)}
              text="Reproducir episodio"
            />
            {audioDuration && (
              <small className="me-3">
                <FaSpotify />
                <span className="mx-2">
                  <FaYoutube />
                </span>
                {audioDuration}
              </small>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default EpisodeCard;
