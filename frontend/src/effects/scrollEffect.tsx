import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const headerVariants = {
  visible: { opacity: 1, transition: { duration: 1.5 }, y: '0' },
  hidden: { opacity: 0, y: '10vh' }
};

const HeaderSection = ({ children }: any) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        control.start("visible");
        }
    }, [control, inView]);
    
  return (
    <motion.div
        ref={ref}
        variants={headerVariants}
        initial="hidden"
        animate={control}
    >
        {children}
    </motion.div>
  );
};

export default HeaderSection;