import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Nav from '../components/nav';

export default function ReceiptPage() {
    return (
        <div className="">
            <div className="flex flex-col lg:container lg:mx-auto max-h-screen py-4">
                <div className="flex-shrink px-8 py-2 mx-auto overflow-y-scroll overflow-x-scroll object-contain max-h-2/3vh">
                        <TransformWrapper options={{'limitToWrapper': 'true'}}>
                            <TransformComponent>
                                <img className="h-full object-fill" src="/test.jpg" alt="test" />
                            </TransformComponent>
                        </TransformWrapper>
                </div>
                <div className="max-h-1/3vh px-8 py-4 h-1/4vh"> 
                    <div className="flex flex-col flex-wrap">
                            <div className="text-xs text-accent-1 font-bold">
                                VENDOR
                            </div>
                            <div className="text-white">
                                Bauhof Group AS
                            </div>
                            <div className="text-xs text-accent-1 font-bold">
                                VENDOR
                            </div>
                            <div className="text-white">
                                Bauhof Group AS
                            </div>
                            <div className="text-xs text-accent-1 font-bold">
                                VENDOR
                            </div>
                            <div className="text-white">
                                Bauhof Group AS
                            </div>
                            <div className="text-xs text-accent-1 font-bold">
                                VENDOR
                            </div>
                            <div className="text-white">
                                Bauhof Group AS
                            </div>
                            <div className="text-xs text-accent-1 font-bold">
                                VENDOR
                            </div>
                            <div className="text-white">
                                Bauhof Group AS
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}