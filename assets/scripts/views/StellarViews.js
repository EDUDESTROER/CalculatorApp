class StellarViews{

    constructor(){

        this._statusEl = document.querySelector('.wrapper-status-output');
        this.historyCalcAndResultsList = document.querySelector('.wrapper-calc-and-results');  
        this._errorSound = new Audio('assets/sound/calcError.mp3');
        this._sucessSound = new Audio('assets/sound/calcSucess.mp3');

    }

    returnStandard(){

        let standard = `
        
                <div class="wrapper-calculator-output">

                    <div class="outputs previous-output" id="previous-output"></div>
                    <div class="outputs current-output" id="current-output">0</div>

                </div>
                <div class="wrapper-buttons">

                    <div class="wrapper-buttons-queues">

                        <button id="button-percent" class="buttons-base-effects buttons-color-darker">%</button>
                        <button id="button-ce" class="buttons-base-effects buttons-color-darker">CE</button>
                        <button id="button-c" class="buttons-base-effects buttons-color-darker">C</button>
                        <button id="button-backspace" class="buttons-base-effects buttons-color-darker"><img width="64px" src="assets/icons/backspace.png" alt="backspace button icon"></button>

                    </div>
                    <div class="wrapper-buttons-queues">

                        <button id="button-one-divide-per" class="buttons-base-effects buttons-color-darker"><img width="64px" src="assets/icons/1 divide by.png" alt="mathematical symbol of one divided by X"></button>
                        <button id="button-squared" class="buttons-base-effects buttons-color-darker"><img width="64px" src="assets/icons/X squared.png" alt="mathematical symbol of X squared"></button>
                        <button id="button-square-root" class="buttons-base-effects buttons-color-darker"><img width="64px" src="assets/icons/square-root.png" alt="mathematical symbol of square root"></button>
                        <button id="button-divide" class="buttons-base-effects buttons-color-darker">÷</button>

                    </div>
                    <div class="wrapper-buttons-queues">

                        <button id="button-7" class="buttons-base-effects buttons-color-main">7</button>
                        <button id="button-8" class="buttons-base-effects buttons-color-main">8</button>
                        <button id="button-9" class="buttons-base-effects buttons-color-main">9</button>
                        <button id="button-multiplication" class="buttons-base-effects buttons-color-darker">x</button>

                    </div>
                    <div class="wrapper-buttons-queues">

                        <button id="button-4" class="buttons-base-effects buttons-color-main">4</button>
                        <button id="button-5" class="buttons-base-effects buttons-color-main">5</button>
                        <button id="button-6" class="buttons-base-effects buttons-color-main">6</button>
                        <button id="button-subtraction" class="buttons-base-effects buttons-color-darker">-</button>

                    </div>
                    <div class="wrapper-buttons-queues">

                        <button id="button-1" class="buttons-base-effects buttons-color-main">1</button>
                        <button id="button-2" class="buttons-base-effects buttons-color-main">2</button>
                        <button id="button-3" class="buttons-base-effects buttons-color-main">3</button>
                        <button id="button-sum" class="buttons-base-effects buttons-color-darker">+</button>

                    </div>
                    <div class="wrapper-buttons-queues">

                        <button id="button-change-signal" class="buttons-base-effects buttons-color-main">+/-</button>
                        <button id="button-0" class="buttons-base-effects buttons-color-main">0</button>
                        <button id="button-dot" class="buttons-base-effects buttons-color-main">,</button>
                        <button id="button-equal" class="buttons-base-effects buttons-color-bright">=</button>

                    </div>

                </div>

        `;

        return standard;

    }

    returnConversor(typeOfConversor){

        let outputOne = this.returnOutputConversor('first', typeOfConversor);
        let outputTwo = this.returnOutputConversor('second', typeOfConversor);

        let conversor = `

            <div class="wrapper-length-calculator">

                <div class="wrapper-converter-output-and-select">

                    ${outputOne.innerHTML}

                </div>

                <div class="wrapper-converter-output-and-select">

                    ${outputTwo.innerHTML}

                </div>

                <div class="wrapper-length-buttons">

                    <div class="wrapper-buttons-queues">

                        <button id="button-ce" class="buttons-base-effects buttons-color-darker">CE</button>
                        <button id="button-backspace" class="buttons-base-effects buttons-color-darker"><img width="64px" src="assets/icons/backspace.png" alt="backspace button icon"></button>

                    </div>
                    <div class="wrapper-buttons-queues">

                        <button id="button-7" class="buttons-base-effects buttons-color-main">7</button>
                        <button id="button-8" class="buttons-base-effects buttons-color-main">8</button>
                        <button id="button-9" class="buttons-base-effects buttons-color-main">9</button>

                    </div>
                    <div class="wrapper-buttons-queues">

                        <button id="button-4" class="buttons-base-effects buttons-color-main">4</button>
                        <button id="button-5" class="buttons-base-effects buttons-color-main">5</button>
                        <button id="button-6" class="buttons-base-effects buttons-color-main">6</button>

                    </div>
                    <div class="wrapper-buttons-queues">

                        <button id="button-1" class="buttons-base-effects buttons-color-main">1</button>
                        <button id="button-2" class="buttons-base-effects buttons-color-main">2</button>
                        <button id="button-3" class="buttons-base-effects buttons-color-main">3</button>

                    </div>
                    <div class="wrapper-buttons-queues">

                        <button id="button-0" class="buttons-base-effects buttons-color-main">0</button>
                        <button id="button-dot" class="buttons-base-effects buttons-color-main">,</button>

                    </div>

                </div>

            </div>
            
        `;

        return conversor;

    }

    returnOutputConversor(position, type){

        let liNumber;
        let nameList;

        if(type === 'length'){

            liNumber = 11;
            nameList = [
                'nanometers', 
                'microns', 
                'millimeters',
                'centimeter', 
                'meters', 
                'kilometers', 
                'inches', 
                'Feet', 
                'Yards', 
                'miles', 
                'nautical miles'
            ];

        }

        if(type === 'angle'){

            liNumber = 3;
            nameList = [
                'Grados', 
                'Degree', 
                'Radians'
            ];

        }

        if(type === 'volume'){

            liNumber = 20;
            nameList = [
                'Milliliters', 
                'Cubic centimeters', 
                'Liters', 
                'Cubic meters', 
                'Teaspoon(USA)', 
                'Tablespoons(USA)', 
                'Fluid ounces(USA)', 
                'Cups(USA)', 
                'Pint(USA)', 
                'Quart(USA)', 
                'Gallons(USA)', 
                'Cubic inches', 
                'Cubic feet', 
                'Cubic yards', 
                'Teaspoon(UK)', 
                'Tablespoons(UK)', 
                'Fluid ounces(UK)', 
                'Pint(UK)', 
                'Quart(UK)', 
                'Gallons(UK)'
            ];

        }

        if(type === 'weigthAndMass'){

            liNumber = 14;
            nameList = [
                'Carats', 
                'Miligrams', 
                'Centigrams', 
                'Decigrams', 
                'Gram', 
                'Decagrams', 
                'Hectograms', 
                'Kilograms', 
                'Metric Tons', 
                'Ounce', 
                'Pounds', 
                'Stone', 
                'Short Tons(USA)', 
                'Long Tons(UK)'
            ];

        }

        if(type === 'temperature'){

            liNumber = 3;
            nameList = [
                'Celsius', 
                'Fahrenheit', 
                'Kelvin'
            ];

        }
        if(type === 'energy'){

            liNumber = 8;
            nameList = [
                'Electron volts', 
                'Joules', 
                'Kilojoules',
                'Thermic calories', 
                'Food calories', 
                'Pound-feet',
                'British thermal units', 
                'Kilowatt-hour'
            ];

        }
        if(type === 'area'){

            liNumber = 10;
            nameList = [
                'Square Millimeters', 
                'Square Centimeters',
                'Square Meters', 
                'Hectares',
                'Square Kilometers', 
                'Square Inches', 
                'Square Feet',
                'Square Yards', 
                'Acres',
                'Square Miles'
            ];

        }
        if(type === 'speed'){

            liNumber = 7;
            nameList = [
                'Centimeters per second', 
                'Meters per second',
                'Kilometers per hour', 
                'Feet per second',
                'Miles per hour', 
                'Knots', 
                'Mach'
            ];

        }
        if(type === 'currency'){

            liNumber = 155;
            nameList = [
                'Afghan Afghani',
                'Albanian Lek',
                'Algerian Dinar',
                'Angolan Kwanza',
                'Argentine Peso',
                'Armenian Dram',
                'Aruban Florin',
                'Australian Dollar',
                'Azerbaijani Manat',
                'Bahamian Dollar',
                'Bahraini Dinar',
                'Bangladeshi Taka',
                'Barbadian Dollar',
                'Belarusian Ruble',
                'Belize Dollar',
                'Bermudian Dollar',
                'Bhutanese Ngultrum',
                'Bolivian Boliviano',
                'Bosnia-Herzegovina Convertible Mark',
                'Botswana Pula',
                'Brazilian Real',
                'British Pound',
                'Brunei Dollar',
                'Bulgarian Lev',
                'Burundian Franc',
                'Cambodian Riel',
                'Canadian Dollar',
                'Cape Verdean Escudo',
                'Cayman Islands Dollar',
                'CFA Franc BEAC',
                'CFA Franc BCEAO',
                'CFP Franc',
                'Chilean Peso',
                'Chinese Yuan',
                'Colombian Peso',
                'Comorian Franc',
                'Congolese Franc',
                'Costa Rican Colón',
                'Croatian Kuna',
                'Cuban Convertible Peso',
                'Czech Koruna',
                'Danish Krone',
                'Djiboutian Franc',
                'Dominican Peso',
                'East Caribbean Dollar',
                'Egyptian Pound',
                'Emirati Dirham',
                'Eritrean Nakfa',
                'Ethiopian Birr',
                'Euro',
                'Falkland Islands Pound',
                'Fijian Dollar',
                'Gambian Dalasi',
                'Georgian Lari',
                'Ghanaian Cedi',
                'Gibraltar Pound',
                'Guatemalan Quetzal',
                'Guinean Franc',
                'Guyanese Dollar',
                'Haitian Gourde',
                'Honduran Lempira',
                'Hong Kong Dollar',
                'Hungarian Forint',
                'Icelandic Króna',
                'Indian Rupee',
                'Indonesian Rupiah',
                'Iranian Rial',
                'Iraqi Dinar',
                'Israeli New Shekel',
                'Jamaican Dollar',
                'Japanese Yen',
                'Jordanian Dinar',
                'Kazakhstani Tenge',
                'Kenyan Shilling',
                'Kuwaiti Dinar',
                'Kyrgyzstani Som',
                'Lao Kip',
                'Lebanese Pound',
                'Lesotho Loti',
                'Liberian Dollar',
                'Libyan Dinar',
                'Macanese Pataca',
                'Macedonian Denar',
                'Malagasy Ariary',
                'Malawian Kwacha',
                'Malaysian Ringgit',
                'Maldivian Rufiyaa',
                'Mauritanian Ouguiya',
                'Mauritian Rupee',
                'Mexican Peso',
                'Moldovan Leu',
                'Mongolian Tögrög',
                'Moroccan Dirham',
                'Mozambican Metical',
                'Myanma Kyat',
                'Namibian Dollar',
                'Nepalese Rupee',
                'Netherlands Antillean Guilder',
                'New Taiwan Dollar',
                'New Zealand Dollar',
                'Nicaraguan Córdoba',
                'Nigerian Naira',
                'North Korean Won',
                'Norwegian Krone',
                'Omani Rial',
                'Pakistani Rupee',
                'Panamanian Balboa',
                'Papua New Guinean Kina',
                'Paraguayan Guarani',
                'Peruvian Sol',
                'Philippine Peso',
                'Polish Złoty',
                'Qatari Rial',
                'Romanian Leu',
                'Russian Ruble',
                'Rwandan Franc',
                'Saint Helena Pound',
                'Samoan Tala',
                'São Tomé and Príncipe Dobra',
                'Saudi Riyal',
                'Serbian Dinar',
                'Seychellois Rupee',
                'Sierra Leonean Leone',
                'Singapore Dollar',
                'Solomon Islands Dollar',
                'Somali Shilling',
                'South African Rand',
                'South Korean Won',
                'South Sudanese Pound',
                'Sri Lankan Rupee',
                'Sudanese Pound',
                'Surinamese Dollar',
                'Swazi Lilangeni',
                'Swedish Krona',
                'Swiss Franc',
                'Syrian Pound',
                'Tajikistani Somoni',
                'Tanzanian Shilling',
                'Thai Baht',
                'Tongan Paʻanga',
                'Trinidad and Tobago Dollar',
                'Tunisian Dinar',
                'Turkish Lira',
                'Turkmenistani Manat',
                'Ugandan Shilling',
                'Ukrainian Hryvnia',
                'Uruguayan Peso',
                'US Dollar',
                'Uzbekistani Som',
                'Vanuatu Vatu',
                'Venezuelan Bolívar',
                'Vietnamese Đồng',
                'West African CFA Franc',
                'Yemeni Rial',
                'Zambian Kwacha'
            ];

        }
        if(type === 'time'){

            liNumber = 8;
            nameList = [
                'Microseconds', 
                'Milliseconds',
                'Seconds', 
                'Minutes',
                'Hours', 
                'Days', 
                'Weeks',
                'Years'
            ];

        }
        
        let outAndSelect = `

                <span id="${position}-converter-output">0</span>

                <div class="conversor-selects" id="btn-${position}-selection">

                    <div class="select-converter">

                        <span class="selected"></span>
                        <div class="caret"></div>

                    </div>

                    <ul class="menu-converter" id="${position}-converter-list">
                        
                    </ul>

                </div>
        `;

        outAndSelect = new DOMParser().parseFromString(outAndSelect, "text/html");

        outAndSelect = outAndSelect.firstChild.children[1]

        let ulListEl = outAndSelect.children[1].children[1]

        for (let index = 0; index < liNumber; index++) {

            ulListEl.appendChild(this.returnLi(`${nameList[index]}`));
            
        }

        outAndSelect.children[1].children[0].children[0].textContent = ulListEl.children[0].textContent;

        ulListEl.children[0].classList.add('active-converter');

        return outAndSelect;

    }

    returnLi(innerValue = '', element = false, amount = 0){

        let li = document.createElement('li');

        if(innerValue){

            if(element){

                if(amount > 0){

                    for (let i = 0; i < amount; i ++){

                        li.appendChild(innerValue[i]);

                    }

                }else{

                    li.appendChild(innerValue);

                }

            }else{

                li.innerHTML = innerValue;

            }

        }

        return li;

    }

    returnSpan(innerValue = '', element = false, amount = 0){

        let span = document.createElement('span');

        if(innerValue){

            if(element){

                if(amount > 0){

                    for (let i = 0; i < amount; i ++){

                        span.appendChild(innerValue[i]);

                    }

                }else{

                    span.appendChild(innerValue);

                }

            }else{

                span.innerHTML = innerValue;

            }

        }

        return span;

    }

    returnChildNodeWithThisText(text, childNodes){

        let promise = new Promise((resolve, reject) => {
            
            if(childNodes){

                childNodes.forEach(child=>{

                    if(child.textContent == text){
        
                        resolve(child);
        
                    }
        
                });

            }else{

                reject('Nothing was found')

            }

        });

        return promise;

    }

    changeElementFontSize(typeOfChange, percent, elementId, standardSize = '', unit = 'px', element = ''){

        let refElement

            if(elementId){

                refElement = document.getElementById(elementId);

            }else if (!elementId && element){

                refElement = element;

            }

            let fontSize = window.getComputedStyle(refElement).getPropertyValue('font-size').replace(unit, '');

        if(!standardSize){

            refElement.style.fontSize = `0${unit}`

            if(typeOfChange === 'increase'){

                refElement.style.fontSize = `${((parseFloat(fontSize) * parseFloat(percent)) + parseFloat(fontSize))}${unit}`;

            }else if(typeOfChange === 'decrease'){

                refElement.style.fontSize = `${(parseFloat(fontSize) - (parseFloat(fontSize) * parseFloat(percent)))}${unit}`;

            }

        }else if(standardSize){

            refElement.style.fontSize = `0${unit}`

            if(typeOfChange === 'increase'){

                refElement.style.fontSize = `${((parseFloat(standardSize) * parseFloat(percent)) + parseFloat(standardSize))}${unit}`;

            }else if(typeOfChange === 'decrease'){

                refElement.style.fontSize = `${(parseFloat(standardSize) - (parseFloat(standardSize) * parseFloat(percent)))}${unit}`;
                //console.log( refElement, elementId, refElement.style.fontSize);

            }

        }

    }

    changeElementSize(typeOfChange, percent, element = '',  basewidth= '', basedHeight= '', unit = 'px', elementId = '', elementClass = ''){

        let refElement;

        if(elementClass !== ''){

            refElement = document.querySelector(`.${elementClass}`);

        }else if (elementId !== ''){

            refElement = document.getElementById(elementId);

        }else if(element !== ''){

            refElement = element

        }

        let sizeWidth = window.getComputedStyle(refElement).getPropertyValue('width').replace(unit, '');
        let sizeHeight = window.getComputedStyle(refElement).getPropertyValue('height').replace(unit, '');

        if(!basewidth && !basedHeight){ 

            refElement.style.height = `0${unit}`;
            refElement.style.width = `0${unit}`;

            if(typeOfChange === 'increase'){

                refElement.style.height = `${((parseFloat(sizeHeight) * parseFloat(percent)) + parseFloat(sizeHeight))}${unit}`;
                refElement.style.width = `${((parseFloat(sizeWidth) * parseFloat(percent)) + parseFloat(sizeWidth))}${unit}`;

            }else if(typeOfChange === 'decrease'){

                refElement.style.height = `${(parseFloat(sizeHeight) - (parseFloat(sizeHeight) * parseFloat(percent)))}${unit}`;
                refElement.style.width = `${(parseFloat(sizeWidth) - (parseFloat(sizeWidth) * parseFloat(percent)))}${unit}`;

            }

        }else if(basewidth && basedHeight){
            
            refElement.style.height = `0${unit}`;
            refElement.style.width = `0${unit}`;

            if(typeOfChange === 'increase'){

                refElement.style.height = `${((parseFloat(basedHeight) * parseFloat(basedHeight)) + parseFloat(basedHeight))}${unit}`;
                refElement.style.width = `${((parseFloat(basewidth) * parseFloat(percent)) + parseFloat(basewidth))}${unit}`;

            }else if(typeOfChange === 'decrease'){

                refElement.style.height = `${(parseFloat(basedHeight) - (parseFloat(basedHeight) * parseFloat(percent)))}${unit}`;
                refElement.style.width = `${(parseFloat(basewidth) - (parseFloat(basewidth) * parseFloat(percent)))}${unit}`;

            }


        }else if(basewidth && !basedHeight){
            
            refElement.style.width = `0${unit}`;

            if(typeOfChange === 'increase'){

                refElement.style.width = `${((parseFloat(basewidth) * parseFloat(percent)) + parseFloat(basewidth))}${unit}`;

            }else if(typeOfChange === 'decrease'){

                refElement.style.width = `${(parseFloat(basewidth) - (parseFloat(basewidth) * parseFloat(percent)))}${unit}`;

            }

        }else if(basedHeight && basewidth == ''){
            
            refElement.style.height = `0${unit}`;

            if(typeOfChange === 'increase'){

                refElement.style.height = `${((parseFloat(basedHeight) * parseFloat(percent)) + parseFloat(basedHeight))}${unit}`;

            }else if(typeOfChange === 'decrease'){

                refElement.style.height = `${(parseFloat(basedHeight) - (parseFloat(basedHeight) * parseFloat(percent)))}${unit}`;

            }

        }

    }

    displaySucess(textInfo){


        setTimeout(() =>{

            this._statusEl.innerHTML = `

                <img src="assets/icons/check.png" draggable="false" alt="Sucess icon">
                <span class="sucess">${textInfo}</span>

        `;

        this._statusEl.children[1].className = 'sucess';

        this.showElement(this._statusEl, 'flex');

        this._statusEl.style.animation = 'appear 1s';

        this._sucessSound.currentTime = 0;
        this._sucessSound.volume = 0.4;
        this._sucessSound.play();
        
        }, 1000);

        
        setTimeout(() => {

            this._statusEl.style.animation = 'disappear 2s';

            setTimeout(()=>{
                this.unShowElement(this._statusEl);
            }, 1000);
        }, 4000);

    }

    displayFail(textInfo){

        setTimeout(() =>{

            this._statusEl.innerHTML = `

                <img src="assets/icons/error.png" draggable="false" alt="Error icon">
                <span class="sucess">${textInfo}</span>

        `;

        this._statusEl.children[1].className = 'error';

        this.showElement(this._statusEl, 'flex');

        this._statusEl.style.animation = 'appear 1s';

        this._errorSound.currentTime = 0;
        this._errorSound.volume = 0.7;
        this._errorSound.play();

        }, 1000);

        
        setTimeout(() => {

            this._statusEl.style.animation = 'disappear 2s';

            setTimeout(()=>{
                this.unShowElement(this._statusEl);
            }, 1000);
        }, 4000);

    }

    unShowElement(element){

        element.style.display = 'none';

    }
    
    showElement(element, displayType){

        element.style.display = displayType;

    }

    setInnerHtmlToElement(innerValue, elementId){

        let element = document.querySelector(`#${elementId}`);

        element.innerHTML = innerValue;

    }

    removeClassFromListOfEl(listOfEl, classToRemove){

        listOfEl.forEach(element => {

            if(element.classList){

                element.classList.remove(classToRemove);

            }
            
        });

    }

}