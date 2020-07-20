import React, { useRef, useState, useEffect } from 'react';
import NavBarHeader from './NavBarHeader';
// import NavBarSider from './NavBarSider';
import styled from 'styled-components';

const BannerTop = props => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const refButton = useRef(null);

  const handleOpen = e => {
    setOpen(prev => !prev);
  };

  const handleClickOutside = event => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !refButton.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  const disableScroll = e => {
    e.preventDefault();
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('wheel', disableScroll, { passive: false });
      document.addEventListener('touchmove', disableScroll, { passive: false });
      document.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('wheel', disableScroll, { passive: false });
      document.addEventListener('touchmove', disableScroll, { passive: false });
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [open]);

  return (
    <SBannerTop className="banner-top">
      <NavBarHeader refButton={refButton} open={open} handleOpen={handleOpen} />
      {/* <NavBarSider ref={ref} user={user} open={open} setOpen={setOpen} /> */}
      {/* <NavBarOld user={user} /> */}
      {/* <IntroCarousel /> */}
      {/* <OuterContainer /> */}
    </SBannerTop>
  );
};

const SBannerTop = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-image: linear-gradient(
      -122deg,
      rgba(245, 33, 33, 0) 82%,
      rgba(255, 255, 255, 0.08) 0
    ),
    linear-gradient(
      -108deg,
      rgba(27, 0, 255, 0) 80%,
      rgba(255, 255, 255, 0.08) 0
    ),
    linear-gradient(
      -101deg,
      rgba(255, 33, 33, 0) 79%,
      rgba(255, 255, 255, 0.08) 0
    ),
    radial-gradient(circle, #02203c 0, #02203c 100%);
  /* background-color: #20232a; */
`;

export default BannerTop;
