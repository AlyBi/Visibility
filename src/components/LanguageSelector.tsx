import Select from 'react-select';
import FranceFlag from '../assets/frce.jpeg';
import DZFlag from '../assets/flag-38762.svg';
import UKFlag from '../assets/union-jack-26119.svg';
import ItalyFlag from '../assets/italy-162326.svg';

const options = [
  { value: 'fr', label: 'FR', flag: FranceFlag },
  { value: 'dz', label: 'DZ', flag: DZFlag },
  { value: 'en', label: 'EN', flag: UKFlag },
  { value: 'it', label: 'IT', flag: ItalyFlag }
];

import React from 'react';

type LanguageSelectorProps = {
  language: string;
  onLanguageChange: (language: string) => void;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange }) => {
  const formatOptionLabel = ({ label, flag }: { label: string, flag: string }) => (
    <div className="flex items-center">
      <img src={flag} alt={`${label} flag`} className="w-5 h-5 mr-2 rounded-full" />
      <span>{label}</span>
    </div>
  );

  return (
    <Select
      value={options.find(option => option.value === language)}
      onChange={onLanguageChange}
      options={options}
      formatOptionLabel={formatOptionLabel}
    />
  );
}

export default LanguageSelector;
