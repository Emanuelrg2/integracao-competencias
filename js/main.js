import { getAllCountries } from "./service.js";
window.onload = () => {
    loadCountries();
};

const loadCountries = () => {
    const dataContainer = 
        document.getElementById('data-container');
    
        
        getAllCountries().then(resp =>{
        resp.forEach(country => {
            console.log(country)
            const countryElement = 
                document.createElement('div');
                countryElement.innerHTML =`
                <div style="border: solid 1px blue">
                    <div>
                        <img src="${country.flags.png}" alt="${country.flags.alt}">
                        <h2>
                            ${country.name.common}
                        </h2>
                    </div>
                    <hr>


                </div>
                
                `;
             dataContainer.appendChild(countryElement);
        });
    })
};