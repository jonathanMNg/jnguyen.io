
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import React from "react";

const AnimatedCard = ({children}:{children: React.ReactNode}) => {
return <Fade direction="up" duration={1500} triggerOnce>{children}</Fade>;
};

export default AnimatedCard;