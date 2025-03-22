import React from 'react'
import { motion, AnimatePresence } from "motion/react"

export default function AnimationWrapper({ children, keyValue, initial = { opacity: 0 }, animate = { opacity: 1 }, transition = { duration: 2 } }) {
    return (
        <AnimatePresence>
            <motion.div
                key={keyValue}
                initial={initial}
                animate={animate}
                transition={transition}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
