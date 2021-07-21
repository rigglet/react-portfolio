import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function useScroll() {
  const [element, view] = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  if (view) {
    controls.start("animate");
  } else {
    controls.start("initial");
  }
  return [element, controls];
}
