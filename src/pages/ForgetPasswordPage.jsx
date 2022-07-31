import React, { Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';

const ForgetPasswordPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>
                    
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ForgetPasswordPage;