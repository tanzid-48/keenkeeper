import ProviderAll from '@/app/context/ProviderAll';
import React, { Children } from 'react';

const Providers = ({children}) => {
    return (
        <div>
            <ProviderAll>
                {children}
            </ProviderAll>
        </div>
    );
};

export default Providers;