import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const ScrambleText = ({ text, className = "", style = {}, trigger, autoReplay = 0 }) => {
    const [displayText, setDisplayText] = useState(text);
    const isAnimating = React.useRef(false);

    const play = React.useCallback(() => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        // Generate a random order of indices to reveal
        const indices = Array.from({ length: text.length }, (_, i) => i);
        // Shuffle indices (Fisher-Yates)
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }

        let step = 0;
        const totalSteps = 20; // Fixed duration (approx 600ms at 30ms interval)

        const interval = setInterval(() => {
            step++;
            const progress = step / totalSteps;
            const revealCount = Math.floor(text.length * progress);
            const revealedIndices = new Set(indices.slice(0, revealCount));

            setDisplayText(
                text
                    .split("")
                    .map((char, i) => {
                        if (char === ' ') return ' ';
                        if (revealedIndices.has(i)) {
                            return char;
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (step >= totalSteps) {
                clearInterval(interval);
                isAnimating.current = false;
                setDisplayText(text);
            }
        }, 50);
    }, [text]);

    useEffect(() => {
        play();
    }, [play]);
    useEffect(() => {
        if (trigger) play();
    }, [trigger, play]);

    useEffect(() => {
        if (!autoReplay) return;
        const timer = setInterval(() => {
            play();
        }, autoReplay);
        return () => clearInterval(timer);
    }, [autoReplay, play]);

    return (
        <motion.span
            className={className}
            style={{ display: 'inline-block', cursor: 'default', ...style }}
            onMouseEnter={play}
        >
            {displayText}
        </motion.span>
    );
};

export default ScrambleText;
