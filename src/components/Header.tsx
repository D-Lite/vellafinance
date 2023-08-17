import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonSearchbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
    description: string;
    category: string;
}

const Header = () => {



    const cart = useSelector((state: RootState) => state.cart.cart)
    const getTotalQuantity = () => {
        return cart.length;
    }


    return (
        <IonHeader>
            <IonToolbar className="bg-white">
                <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                    <IonTitle className="text-gray-700 text-2xl font-semibold">VellaShop</IonTitle>
                    <IonButtons slot="end">
                        <div className="flex items-center">
                            <a href='/cart' className="relative text-gray-600 hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4a2 2 0 012-2h12a2 2 0 012 2M4 4l2.57 11H18M6.58 18a2 2 0 11-3.99.1 2 2 0 013.99-.1z"
                                    />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                                    {getTotalQuantity() || 0}
                                </span>
                            </a>
                        </div>
                    </IonButtons>
                </div>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
