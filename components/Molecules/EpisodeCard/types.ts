export interface Props {
  className?: string,
  slug: string
  title: string,
  description: string,
  image: {
    url: string,
    name: string,
  },
  audioDuration?: string,
  episodeNumber?: string,
}
