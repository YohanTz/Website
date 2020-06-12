import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring'

const Home = () => {
    const [show, setShow] = useState(true)
    const transitions = useTransition(show, null, {
        from: { opacity: -5, transform: 'translateY(-20%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: -5, transform: 'translate(-20%)' },
    })

    return (
        <div className="p-3">
            {
                transitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div key={key} style={props}>
                        <h1 className="font-bold">👋🏽 Hey there,</h1>
                        <h1>It's nice to meet you.</h1>

                        <p className="my-8">
                            I'm currently a Computer Engineering student at Epita,
                            passionate about clean code.
                    </p>
                    </animated.div>
                )
            }
        </div>
    )
}

export default Home;