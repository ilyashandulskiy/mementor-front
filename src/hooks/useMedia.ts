import { useMediaQuery } from 'react-responsive';

const useMedia = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isDesktopLg = useMediaQuery({ minWidth: 1365 });
  const isDesktopLg2 = useMediaQuery({ minWidth: 1440 });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isDesktopLg,
    isDesktopLg2,
  };
};

export default useMedia;
