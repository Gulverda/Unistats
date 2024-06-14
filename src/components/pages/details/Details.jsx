import React, { useState } from 'react';
import Sidebar from "../../nav/nav";

const universities = [
    { name: "შოთა მესხის სახელმწიფო უნივერსიტეტი", region: "Samegrelo-Zemo Svaneti", url: "https://www.google.com" },
    { name: "გორის სახელმწიფო უნივერსიტეტი", region: "Shida Kartli", url: "https://www.google.com" },
    { name: "დავით აღმაშენებლის სახელმწიფო თავდაცვის აკადემია", region: "Shida Kartli", url: "https://www.google.com" },
    { name: "იაკობ გოგებაშვილის თელავის სახელმწიფო უნივერსიტეტი", region: "Kakheti", url: "https://www.google.com" },
    { name: "სამცხე-ჯავახეთის სახელმწიფო უნივერსიტეტი", region: "Samtskhe-Javakheti", url: "https://www.google.com" },
    { name: "კავკასიის უნივერსიტეტი", region: "Ajaria", url: "https://www.google.com" },
    { name: "გრიგოლ რობაქიძის სახელობის უნივერსიტეტი", region: "Ajaria", url: "https://www.google.com" },
    { name: "ბათუმის სახელმწიფო საზღვაო აკადემია", region: "Ajaria", url: "https://www.google.com" },
    { name: "ბათუმის შოთა რუსთაველის სახელმწიფო უნივერსიტეტი", region: "Ajaria", url: "https://www.google.com" },
    { name: "ბათუმის ხელოვნების სასწავლო უნივერსიტეტი", region: "Ajaria", url: "https://www.google.com" },
    { name: "ბათუმის ნავიგაციის სასწავლო უნივერსიტეტი", region: "Ajaria", url: "https://www.google.com" },
    { name: "ბათუმის უმაღლესი საზღვაო საინჟინრო სასწავლებელი ანრი", region: "Ajaria", url: "https://www.google.com" },
    { name: "ბაუ ინთერნეიშენალ უნივერსითი ბათუმი", region: "Ajaria", url: "https://www.google.com" },
    { name: "ბათუმის სასწავლო უნივერსიტეტი", region: "Ajaria", url: "https://www.google.com" },
    { name: "შავი ზღვის საერთაშორისო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "თბილისის ღია უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "საქართველოს უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ევროპის უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ქართულ-ამერიკული უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ნიუ ვიჟენ უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "საქართველოს ტექნიკური უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "პეტრე შოთაძის სახელობის თბილისის სამედიცინო აკადემია", region: "Tbilisi", url: "https://www.google.com" },
    { name: "თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ანდრია პირველწოდებულის სახელობის ქართული უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ილიას სახელმწიფო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "საქართველოს აგრარული უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "საქართველოს შოთა რუსთაველის თეატრისა და კინოს სახელმწიფო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "სოხუმის სახელმწიფო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "თბილისის ვანო სარაჯიშვილის სახელობის სახელმწიფო კონსერვატორია", region: "Tbilisi", url: "https://www.google.com" },
    { name: "საქართველოს დავით აღმაშენებლის სახელობის უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "დავით ტვილდიანის სამედიცინო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "თბილისის თავისუფალი უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "სულხან-საბა ორბელიანის სასწავლო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "აპოლონ ქუთათელაძის სახელობის სახელმწიფო სამხატვრო აკადემია", region: "Tbilisi", url: "https://www.google.com" },
    { name: "კავკასიის საერთაშორისო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "საქართველოს საავიაციო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "გურამ თავართქილაძის სახელობის თბილისის სასწავლო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "საქართველოს ეროვნული უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "საქართველოს საზოგადოებრივ საქმეთა ინსტიტუტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "საქართველოს ფიზიკური აღზრდისა და სპორტის სახელმწიფო სასწავლო უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ბიზნესისა და ტექნოლოგიების უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "აღმოსავლეთ ევროპის უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ვებსტერ უნივერსიტეტის", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ალტე უნივერსიტეტი", region: "Tbilisi", url: "https://www.google.com" },
    { name: "ქუთაისის უნივერსიტეტი", region: "Imereti", url: "https://www.google.com" },
    { name: "აკაკი წერეთლის სახელმწიფო უნივერსიტეტი", region: "Imereti", url: "https://www.google.com" },
    { name: "ქუთაისის საერთაშორისო უნივერსიტეტი", region: "Imereti", url: "https://www.google.com" }
];

const regions = [
    "Samegrelo-Zemo Svaneti",
    "Shida Kartli",
    "Kakheti",
    "Samtskhe-Javakheti",
    "Ajaria",
    "Tbilisi",
    "Imereti"
];

const Details = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    // Update search term state when input changes
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Update selected region state when a region button is clicked
    const handleRegionChange = (region) => {
        setSelectedRegion(region);
    };

    // Filter universities based on search term and selected region
    const filteredUniversities = universities.filter((university) => {
        return (
            university.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedRegion === '' || university.region === selectedRegion)
        );
    });

    // Render the component
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Sidebar />
            <div style={{ padding: '20px' }}>
                {/* Search input field */}
                <input
                    type="text"
                    placeholder="Search universities..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
                />
                {/* Region filter buttons */}
                <div style={{ margin: '10px 0' }}>
                    {regions.map((region) => (
                        <button
                            key={region}
                            onClick={() => handleRegionChange(region)}
                            style={{
                                padding: '10px',
                                marginRight: '10px',
                                backgroundColor: selectedRegion === region ? '#ddd' : '#fff',
                            }}
                        >
                            {region}
                        </button>
                    ))}
                    {/* Button to clear region filter */}
                    <button
                        onClick={() => handleRegionChange('')}
                        style={{
                            padding: '10px',
                            backgroundColor: selectedRegion === '' ? '#ddd' : '#fff',
                        }}
                    >
                        All Regions
                    </button>
                </div>
                {/* Table displaying filtered universities */}
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                                University Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUniversities.map((university, index) => (
                            <tr key={index}>
                                {/* Clickable university name */}
                                <td
                                    style={{ border: '1px solid #ddd', padding: '8px', cursor: 'pointer' }}
                                    onClick={() => window.open(university.url, '_blank')}
                                >
                                    {university.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Details;