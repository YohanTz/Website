import React from 'react';
import { useTransition, animated } from 'react-spring'

const MainAnimation = ({ children }) => {
    const transitions = useTransition(true, null, {
        from: { opacity: -5, transform: 'translateY(-20%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: -5, transform: 'translateY(-20%)' },
    })

    return (
        transitions.map(({ item, key, props }) =>
            item &&
            <animated.div key={key} style={props}>
                {children}
            </animated.div>
        )
    )
}

export default MainAnimation;