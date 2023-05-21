import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

const useNetworkIcon = () => {
  const getSocialMediaIconByName = (networkName: string) => {
    switch (networkName.toLowerCase()) {
      case 'youtube':
        return <FaYoutube />;
      case 'spotify':
        return <FaSpotify />;
      case 'instagram':
        return <FaInstagram />;
      case 'tiktok':
        return <FaTiktok />;
      default:
        return <FaSpotify />;
    }
  };
  return [getSocialMediaIconByName];
};

export default useNetworkIcon;
