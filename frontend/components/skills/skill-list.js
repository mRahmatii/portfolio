import { Fragment, useRef, useEffect, useState } from "react";
import SkillItem from "./skill-item";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function SkillList() {
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
      <div className="title">
        <h1 className=" text-3xl font-bold">
          <span>Skills, Tools and Tech</span>
        </h1>
      </div>

      <div className="gap-6 columns-2 " ref={elementRef}>
        {isOnScreen && (
          <SkillItem title="Frontend" viewTransition={isOnScreen} />
        )}
        {isOnScreen && (
          <SkillItem title="Backend" viewTransition={isOnScreen} />
        )}
        {isOnScreen && (
          <SkillItem title="Database" viewTransition={isOnScreen} />
        )}
        {isOnScreen && <SkillItem title="Tools" viewTransition={isOnScreen} />}
      </div>
    </Fragment>
  );
}
