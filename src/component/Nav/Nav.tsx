import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import { useCopyToClipboard } from "usehooks-ts";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import Copiable from "./Copiable";
import { AnimatePresence, motion } from "framer-motion";
import { AnimationConfig } from "../AnimationConfig";
import MainGrid from "../layouts/MainGrid";
import EmailForm from "../Footer/EmailForm";
import { NavButton } from "./NavButton";
import { EventInfoModule } from "./EventInfoModule";
import BackgroundPreview from "./BackgroundPreview";
import StaggerTransition from "./StaggerTransition";
import SocialModule from "./SocialModule";
import Hamburger from "./Hamburger";
import { TEDxSFULogo } from "./TEDxSFULogo";
import Scrim from "./Scrim";
import EventInfo, { EventInfoLink } from "./EventInfoLink";
import TicketCTA from "./TicketCTA";
import { useLogoContext } from "../../EmergeTextEffect/Logo";
import NavScreen from "./NavScreen";

type Props = { children: React.ReactNode };

interface NavContextInterface {
  setScrollState: (scrolledState: NavScrollState) => void;
  isOpened: boolean;
  // eventModuleIsOpened: boolean;
  exitDuration: number;
  setEventModuleOpenWithoutLogo: (isOpen: boolean) => void;
}

export const NavContext = createContext<NavContextInterface>({
  setScrollState: (scrolledState: NavScrollState) => {},
  isOpened: false,
  // eventModuleIsOpened: false,
  setEventModuleOpenWithoutLogo: (isOpen: boolean) => {},
  exitDuration: 1000,
});
export enum NavScrollState {
  SCROLLED,
  DEFAULT,
}

const Nav = ({ children }: Props) => {
  const router = useRouter();
  const isAboutPage = router.pathname != "/";
  const [scrollState, setScrollState] = useState(NavScrollState.DEFAULT);
  const [eventModuleOpenWithoutLogo, setEventModuleOpenWithoutLogo] =
    useState(true);

  const [isOpened, setIsOpened] = useState(false);
  const [hasTransitionBegan, setHasTransitionBegan] = useState(false);

  const EXIT_DURATION = AnimationConfig.VERY_SLOW * 1000;
  const prevPath = useRef(router.pathname);

  useEffect(() => {
    // toggle the path name
    if (prevPath.current === router.pathname) return;
    prevPath.current = router.pathname;

    if (!isOpened) return;

    setHasTransitionBegan(true);
    const timeout = setTimeout(() => {
      setIsOpened(false);
      // setTimeout(() => setSelectedPath(""), 500);
      requestAnimationFrame(() => {
        setHasTransitionBegan(false);
      });
    }, EXIT_DURATION);

    return () => {
      clearTimeout(timeout);
    };
    // when new page load
  }, [router.pathname, isOpened]);

  const toggleOpen = () => {
    setIsOpened(!isOpened);
    setHasTransitionBegan(false);
  };

  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  const handleLinkButtonClick = (href: string) => {
    if (router.pathname !== href) {
      router.push(href);
      return;
    }
    setIsOpened(false);
  };

  return (
    <NavContext.Provider
      value={{
        setScrollState,
        isOpened,
        setEventModuleOpenWithoutLogo,
        exitDuration: EXIT_DURATION,
      }}
    >
      <motion.nav>
        <TEDxSFULogo
          onClick={() => {
            setIsOpened(false);
            if (isAboutPage) router.push("/");
          }}
        />

        <EventInfoModule
          isActive={
            (router.pathname === "/" && !eventModuleOpenWithoutLogo) ||
            (isOpened && !hasTransitionBegan)
          }
        />
        <div
          className="fixed z-50 mt-nav-button-offset-y max-md:bottom-grid-margin-y max-md:left-0 max-md:right-0 max-md:mx-auto md:right-[64px] md:top-grid-margin-y
        md:pr-grid-margin-x
        "
        >
          <TicketCTA isHighlighted={false} isAboutPage={isAboutPage} />
        </div>

        <Scrim isShowing={isContentOverflowing} />
        <motion.button
          className="fixed right-2 top-grid-margin-y z-50 mt-nav-button-offset-y flex h-nav-button-height w-nav-button-height items-center justify-center mix-blend-exclusion sm:right-grid-margin-x"
          // style={{width: "max(auto, 4rem)"}}
          aria-label="Menu"
          onClick={toggleOpen}
        >
          <Hamburger />
        </motion.button>
      </motion.nav>

      <NavScreen
        isOpened={isOpened}
        hasTransitionBegan={hasTransitionBegan}
        onNavButtonClick={handleLinkButtonClick}
      />

      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(NavContext);
};

export default Nav;
