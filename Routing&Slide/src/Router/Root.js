import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CtrlRouter from '../Router/CtrlRouter';

const Root = () => (
    <BrowserRouter>
        <CtrlRouter/>
    </BrowserRouter>
);

export default Root;