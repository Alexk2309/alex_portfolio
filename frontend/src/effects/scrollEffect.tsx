import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const headerVariants = {
  visible: { opacity: 1, transition: { duration: 2 }, y: 400 },
  hidden: { opacity: 0, y: 800 }
};

const HeaderSection = ({ children }: any) => {
    const control = useAnimation();
    const [ref, inView] = useInView({
        rootMargin: '300px'
    });

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