// @ts-nocheck

import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import HomePage from '../components/HomePageMain';
import Footer from '../components/Footer';


import { useDispatch, useSelector, RootState } from './../store';
import { getProducts } from '../store/slices/product';


const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [rows, setRows] = React.useState([]);

  const { products } = useSelector((state: RootState) => state.product);

  React.useEffect(() => {
    // ignore ts error for the next line. Incessant error around using aync thunk
    dispatch(getProducts());
  }, [dispatch]);

  React.useEffect(() => {
    setRows(products);
  })


  return (
    <IonPage>
      <IonContent fullscreen className="relative">
        <div className=''>
          <Header />
          <HomePage products={rows} />
          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
