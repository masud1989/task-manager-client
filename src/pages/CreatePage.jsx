import React, { Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';

const CreatePage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>

                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default CreatePage;