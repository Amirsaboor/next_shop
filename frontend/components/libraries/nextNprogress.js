'use client'
import { ProgressProvider } from '@bprogress/next/app';

const NextNprogress = ({ children }) => {
    return (
        <ProgressProvider
            height="4px"
            color="#fffd00"
            options={{ showSpinner: true }}
            shallowRouting
        >
            {children}
        </ProgressProvider>
    );
};

export default NextNprogress;