import { useLocation } from 'react-router-dom';

const useCurrentPathname = () => {
  const location = useLocation();

  const removeSlash = string => {
    return string.replace('/', '');
  };

  const removeHyphens = string => {
    return string.replace('-', ' ');
  };

  const capitalizeFirstLetterEachWord = string => {
    return string
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return {
    name: capitalizeFirstLetterEachWord(removeHyphens(removeSlash(location.pathname))),
    pathname: location.pathname,
  };
};

export default useCurrentPathname;
