import React, { useState } from 'react';
    import ReactCountryFlag from 'react-country-flag';
    import { parsePhoneNumber } from 'libphonenumber-js';
    import countries from '../countries.json';

    interface Country {
      name: string;
      code: string;
      countryCode: string;
    }

    interface CountryCodePickerProps {
      onSelect: (countryCode: string) => void;
    }

    export default function CountryCodePicker({ onSelect }: CountryCodePickerProps) {
      const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
      const [isOpen, setIsOpen] = useState(false);

      const handleSelect = (country: Country) => {
        setSelectedCountry(country);
        onSelect(country.countryCode);
        setIsOpen(false);
      };

      return (
        <div className="relative">
          <button
            type="button"
            className="flex items-center border-r-2 border-gray-300 px-4 py-2 focus:outline-none rounded-l-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ReactCountryFlag countryCode={selectedCountry.code} svg style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            <span>{selectedCountry.countryCode}</span>
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-1 w-56 bg-white border rounded-md shadow-lg overflow-y-auto max-h-48">
              {countries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => handleSelect(country)}
                >
                  <ReactCountryFlag countryCode={country.code} svg style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                  <span>{country.name} ({country.countryCode})</span>
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }
