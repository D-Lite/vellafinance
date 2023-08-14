import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Header from '../components/Header';
import HomePage from '../components/HomePageMain';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <div className="flex items-center justify-between my-3 px-3 z-10">
            <div className="relative w-full flex">
              <input type="text" className="bg-purple-white shadow rounded-xl border-0 p-3 w-full"
                placeholder="Search Product" />
              <div className="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <div className='w-[50px]'>
              <p>cart</p>
              <p>Love</p>
            </div>
          </div>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen className="relative">
        <div className=''>
          <Header />
          <HomePage />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
