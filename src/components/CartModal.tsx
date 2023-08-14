import React from 'react';
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonIcon
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

interface ICartModal {
    isOpen: boolean,
    toggleModal: any,
}

const CartModal = ({ isOpen, toggleModal }: ICartModal) => {
    return (
        <IonModal isOpen={isOpen}>
            <IonHeader>
                <IonToolbar>
                    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                        <IonTitle className="text-2xl font-medium text-gray-700">Your cart</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={toggleModal} className="text-gray-600">
                                <IonIcon icon={closeOutline} />
                            </IonButton>
                        </IonButtons>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="container mx-auto px-6 py-4">
                    <hr className="my-3" />
                    {/* ... Repeat the cart items section ... */}
                    {/* ... Add your cart items here ... */}
                    <div className="mt-8">
                        <form className="flex items-center justify-center">
                            <input
                                className="form-input w-48"
                                type="text"
                                placeholder="Add promocode"
                            />
                            <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <span>Apply</span>
                            </button>
                        </form>
                    </div>
                    <a
                        className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                        href="#"
                    >
                        <span>Checkout</span>
                        <IonIcon
                            icon={closeOutline}
                            className="h-5 w-5 mx-2"
                        />
                    </a>
                </div>
            </IonContent>
        </IonModal>
    );
};

export default CartModal;
