import React from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import { addToCart } from '../store/slices/cart';
import { useDispatch, useSelector } from './../store';

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface ProductListProps {
    products: Product[];
}

const HomePage:
    React.FC<ProductListProps> = ({ products }) => {

        console.log(products);
        const productsByCategory: Record<string, Product[]> = {};
        products.forEach(product => {
            if (!productsByCategory[product.category]) {
                productsByCategory[product.category] = [];
            }
            productsByCategory[product.category].push(product);
        });

        const dispatch = useDispatch();


        const handleAddToCart = async (product: Product) => {
            try {
                const response = await dispatch(addToCart(product));
            } catch (error) {
                // setError("Failed to add product to cart.");
            }
        };

        return (
            // <IonContent>
            <div className="my-8" >
                <div className="container mx-auto px-6">
                    <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')" }}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div className="px-10 max-w-xl">
                                <h2 className="text-2xl text-white font-semibold">Sport Shoes</h2>
                                <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                                <IonButton className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <span>Shop Now</span>
                                    <IonIcon icon={chevronForwardOutline} className="h-5 w-5 mx-2" />
                                </IonButton>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">

                        {Object.keys(productsByCategory).map(category => (
                            <div key={category} className="mt-16">
                                <h3 className="text-gray-600 text-2xl font-medium">{category}</h3>
                                <div className="product-row">
                                    <div className="grid gap-6 grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                        {productsByCategory[category].map(product => (
                                            <div key={product.id} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                                <div className="flex items-end justify-end h-56 w-full bg-cover">
                                                    <img src={product.image} alt={product.title} className='flex items-center justify-center h-56 bg-cover' />
                                                    <button onClick={() => handleAddToCart(product)} className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                                    </button>
                                                </div>
                                                <div className="px-5 py-3 w-full" >
                                                    <h3 className="text-gray-700 uppercase text-truncate line-clamp-1" style={{ fontSize: '16px' }}>{product.title}</h3>
                                                    <span className="text-gray-500 mt-2">${product.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        ))}


                    </div>
                    <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: "../../../assets/images/promote1.png" }}>
                        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                            <div className="px-5 max-w-xl">
                                <h2 className="text-2xl text-white font-semibold">Recomended Product</h2>
                                <p className="mt-2 text-gray-400">We recommend the best for you.</p>
                            </div>
                        </div>
                    </div>
                    {/* ... Repeat the rest of the content ... */}
                </div>
            </div>
        );
    };

export default HomePage;
