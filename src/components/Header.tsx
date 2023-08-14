import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonSearchbar } from '@ionic/react';

const Header = () => {
    return (
        <IonHeader>
            <IonToolbar className="bg-white">
                <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                    <IonTitle className="text-gray-700 text-2xl font-semibold">Brand</IonTitle>
                    <IonButtons slot="end">
                        <IonButton className="text-gray-600">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </IonButton>
                        <IonButton className="text-gray-600">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            </svg>
                        </IonButton>
                    </IonButtons>
                </div>
                <div className="container mx-auto px-6 mt-4">
                    <IonSearchbar className="border rounded-md pl-10 pr-4 py-2" placeholder="Search" />
                </div>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
