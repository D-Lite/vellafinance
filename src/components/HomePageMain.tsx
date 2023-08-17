import React from 'react';
import {
    IonSearchbar,
    IonButton,
    IonIcon,
    SearchbarChangeEventDetail
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import { addToCart } from '../store/slices/cart';
import { useDispatch, useSelector } from './../store';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../theme/swiper.css'

import { Pagination } from 'swiper/modules';


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity?: number;
}

interface ProductListProps {
    products: Product[];
}

const HomePage:
    React.FC<ProductListProps> = ({ products }) => {

        const productsByCategory: Record<string, Product[]> = {};
        products.forEach(product => {
            if (!productsByCategory[product.category]) {
                productsByCategory[product.category] = [];
            }
            productsByCategory[product.category].push(product);
        });

        const dispatch = useDispatch();


        const handleAddToCart = async (product: Product | any) => {
            try {
                const response = await dispatch(addToCart(product));
            } catch (error) {
                // setError("Failed to add product to cart.");
            }
        };

        const [searchTerm, setSearchTerm] = React.useState<string>('');

        const filteredProductsByCategory: Record<string, Product[]> = {};
        Object.keys(productsByCategory).forEach(category => {
            const filteredProducts = productsByCategory[category].filter(
                product =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredProducts.length > 0) {
                filteredProductsByCategory[category] = filteredProducts;
            }
        })

        return (
            // <IonContent>
            <div className="my-8" >
                <div className="container mx-auto px-6">


                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1477901492169-d59e6428fc90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" /></SwiperSlide>

                    </Swiper>

                    <div className="container mx-auto px-6 mt-6">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSearchTerm(e.target.value)
                            }
                            className="w-full py-2 px-4 rounded-full border focus:outline-none focus:border-blue-400"
                        />
                    </div>
                    <div className="mt-16">

                        {Object.keys(filteredProductsByCategory).map(category => (
                            <div key={category} className="mt-16">
                                <h3 className="text-gray-600 text-2xl font-medium">{category}</h3>
                                <div className="product-row">
                                    <div className="grid gap-6 grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                        {filteredProductsByCategory[category].map(product => (
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

                </div>
            </div>
        );
    };

export default HomePage;
