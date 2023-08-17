import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import { RootState, useSelector, useDispatch } from './../store';
import { clearCart } from '../store/slices/cart';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
    description: string;
    category: string;
}

const CheckoutSuccess: React.FC = () => {

    const checkouttotal = useSelector((state: RootState) => state.cart.total)
    const checkoutuser = useSelector((state: RootState) => state.cart.user)

    const dispatch = useDispatch();
    const removeCartDetails = () => dispatch(clearCart());


    return (
        <IonPage>
            <IonContent fullscreen className="relative">
                <div className="flex items-center justify-center h-screen">
                    <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
                        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="text-4xl font-bold font-extrabold text-transparent bg-clip-text  bg-black">Thank You !</h1>
                            <p>Thank you <strong>{checkoutuser.name}</strong> for your purchase.</p>

                            <p>Your packages with a total of <strong>NGN {checkouttotal.toFixed(2)}</strong> will be delivered to <strong>{checkoutuser.address} </strong>within the next 5 days.</p>

                            <a href="/home" onClick={() => removeCartDetails()} className="text-base leading-none px-10 py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                Shop more
                            </a>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CheckoutSuccess;
