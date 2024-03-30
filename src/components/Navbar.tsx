import  { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector'; 
import MonImage from '../assets/react.svg';

function Navbar({ options }) {
  const { t} = useTranslation();
  const [language, setLanguage] = useState('fr'); // Définir l'état initial de la langue à 'fr'

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value); // Mettre à jour l'état de la langue lorsque l'utilisateur sélectionne une nouvelle langue
  };
  function handleFlagClick(value) {
    console.log(`Vous avez cliqué sur le drapeau ${value}`);
  }

  return (
    <nav>
    {options.map(option => (
      <button key={option.value} className="inline-flex items-center" onClick={() => handleFlagClick(option.value)}>
        <img src={option.flag} alt={option.label} className="w-5 h-5 rounded-full" />
        <span className="ml-2">{option.label}</span>
      </button>
    ))}
  </nav>
);
}
    <nav className="relative bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center space-x-3 rtl:space-x-reverse ml-[-20rem]">
          <img src="/src/assets/logo (1).jpeg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vision Claire</span>
        </div>

        <LanguageSelector />
          {/* Sélecteur de langue */}
          <label htmlFor="language" className="sr-only">
            {t("Langue")}
          </label>
          <select
            id="languageSelect"
            value={language}
            onChange={handleLanguageChange}
            className="px-3 py-2 mr-16 text-lg font-bold text-white bg-gray-700 rounded-md shadow-md hover:text-white"

          >
           <option value="fr">
    <img src="../assets/frce.jpeg" alt="French flag" /> {t("FR")}
  </option>
  <option value="dz">
    <img src="../assets/flag-38762.svg" alt="English flag" /> {t("EN")}
  </option>
  <option value="en">
    <img src="../assets/union-jack-26119.svg" alt="French flag" /> {t("FR")}
  </option>
  <option value="it">
    <img src="../assets/italy-162326.svg" alt="English flag" /> {t("EN")}
  </option>
</select>
          <label htmlFor="languageSelect" className="sr-only">
            {t("Langue")}
          </label>
        </div>
    
        <div className="absolute top-0 right-0 flex items-center mt-4 mr-4 space-x-4">
          <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600">ETRE RAPPELE</button>
          <button className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-600">DEMANDEZ UN DEVIS</button>
        
        </div>

        <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
        <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <img src={MonImage} className="w-5 h-5" aria-hidden="true" alt="Mon Image" />
        </button>
        </div>

        <div className="items-center justify-center hidden w-full navbar md:flex md:w-auto md:order-1">
  <ul className="flex flex-col md:p-0 mt-[-3rem] font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block px-3 py-2 font-bold text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 font-bold text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
        <a href="#" className="block px-3 py-2 font-bold text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block px-3 py-2 font-bold text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="block px-3 py-2 font-bold text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
          </ul>
        </div>
      
    </nav>
  );
};

export default Navbar;
// import React from 'react';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
//       <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
//         <a href="#" className="flex items-center">
//           <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
//           <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Landwind</span>
//         </a>
//         <div className="flex items-center lg:order-2">
//           <div className="hidden mt-2 mr-4 sm:inline-block">
//             <span></span>
//           </div>
//           <a href="https://themesberg.com/product/tailwind-css/landing-page"
//             className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a>
//           <button data-collapse-toggle="mobile-menu-2" type="button"
//             className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="mobile-menu-2" aria-expanded="true">
//             <span className="sr-only">Open main menu</span>
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//               <path fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"></path>
//             </svg>
//           </button>
//         </div>
//         </div>
//         <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                 <li>
//                     <a href="#"
//                         className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
//                         aria-current="page">Home</a>
//                 </li>
//                 <li>
//                     <a href="#"
//                         className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
//                 </li>
//                 <li>
//                     <a href="#"
//                         className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
//                 </li>
//                 <li>
//                     <a href="#"
//                         className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
//                 </li>
//                 <li>
//                     <a href="#"
//                         className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
//                 </li>
//                 <li>
//                     <a href="#"
//                         className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//                 </li>
//             </ul>
//         </div>
  
 
 
// </nav>
   

//   );
// };

// export default Navbar;