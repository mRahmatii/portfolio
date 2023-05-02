import { Fragment, useRef, useState, useEffect } from "react";
import PortfolioItem from "./portfolio-item";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function PortfolioList() {
  function useOnScreen(ref) {
    const [isOnScreen, setIsOnScreen] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
      observerRef.current = new IntersectionObserver(([entry]) =>
        setIsOnScreen(entry.isIntersecting)
      );
    }, []);

    useEffect(() => {
      observerRef.current.observe(ref.current);

      return () => {
        observerRef.current.disconnect();
      };
    }, [ref]);

    return isOnScreen;
  }

  const elementRef = useRef();
  const isOnScreen = useOnScreen(elementRef);

  return (
    <Fragment>
      <div className="title mb-6">
        <h1 className=" text-3xl font-bold">
          <span>Project</span>
        </h1>
      </div>
      <div className="columns-2 gap-6" ref={elementRef}>
        {isOnScreen && <PortfolioItem viewTransition={isOnScreen} />}
        {isOnScreen && <PortfolioItem viewTransition={isOnScreen} />}
        {isOnScreen && <PortfolioItem viewTransition={isOnScreen} />}
        {isOnScreen && <PortfolioItem viewTransition={isOnScreen} />}
      </div>
    </Fragment>
  );
}
