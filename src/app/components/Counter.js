'use client';
import { useCounter } from './useScrollAnimation';

export default function Counter({ value, suffix = '' }) {
    const ref = useCounter(value, 2000);
    return (
        <span className="counter" ref={ref}>
            0
        </span>
    );
}
