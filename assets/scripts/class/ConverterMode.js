class ConverterMode {

    constructor(){

        this.firstConversorListEl;
        this.secondConversorListEl;
        this.btnSelectionFirst;
        this.btnSelectionSecond; 
        this.firstConverterOutput;
        this.converterType;
        this.firstOutputValue = '';
        this.firstSelectedEl;
        this.secondSelectedEl;
        this._audioOnOff;
        this._clickSound
        

    }

    start(type){

        this.firstConversorListEl = document.querySelector('#first-converter-list');
        this.secondConversorListEl = document.querySelector('#second-converter-list');
        this.btnSelectionFirst = document.querySelector('#btn-first-selection');
        this.btnSelectionSecond = document.querySelector('#btn-second-selection');
        this.firstSelectedEl = this.btnSelectionFirst.children[0].children[0];
        this.secondSelectedEl = this.btnSelectionSecond.children[0].children[0];

        this.converterType = type;

        this.addEventsToSelection(this.btnSelectionFirst, this.firstConversorListEl);
        this.addEventsToSelection(this.btnSelectionSecond, this.secondConversorListEl);
        this.addEventsToButtons();

    }

    addEventsToSelection(selectionBtnEl, selectionListEl){

        //console.dir(selectionBtnEl);

        selectionBtnEl.addEventListener('click', ()=>{

            selectionListEl.childNodes.forEach(li => {

                li.addEventListener('click', ()=>{

                    window.viewsCalculator.removeClassFromListOfEl(selectionListEl.childNodes, 'active-converter');

                    li.classList.add('active-converter');

                    selectionBtnEl.children[0].children[0].textContent = li.textContent;

                    this.checkConverterType();

                });
                
            });

            if(selectionListEl.dataset.open == 'no' || !selectionListEl.dataset.open){

                window.viewsCalculator.showElement(selectionListEl, 'block');

                selectionListEl.dataset.open = 'yes';

                selectionBtnEl.children[0].children[1].classList.add('caret-rotate');

            }else if(selectionListEl.dataset.open == 'yes'){

                window.viewsCalculator.unShowElement(selectionListEl);

                selectionListEl.dataset.open = 'no';

                selectionBtnEl.children[0].children[1].classList.remove('caret-rotate');

            }

        });

    }

    addEventsToButtons(){

        document.querySelectorAll('.wrapper-buttons-queues').forEach(element=>{

            element.childNodes.forEach(button=>{

                button.addEventListener('click', e=>{

                    let buttonName = button.id.replace('button-', '');

                    this.playSound();

                    switch(buttonName){

                        case '0':
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '6':
                        case '7':
                        case '8':
                        case '9':
                            this.addValueToOutputFirst(buttonName);
                        break;
                        case 'dot':
                            this.addValueToOutputFirst('.');
                        break;
                        case 'ce':
                            this.clearConverter();
                        break;
                        case 'backspace':
                            this.backspacePress();
                        break;
                        default:
                            console.error('no functions on: ', buttonName);
                        break;

                    }

                });

            });

        });

    }

    backspacePress(){

        this.firstOutputValue = this.firstOutputValue.slice(0, -1);

        if(!this.firstOutputValue){

            this.addValueToOutputFirst(0);

        }else{

            this.addValueToOutputFirst('');

        }

        

    }

    addValueToOutputFirst(value){

        if(value == '0' && this.firstOutputValue == '0'){

            this.firstOutputValue = 0;

        }else{

            if(this.firstOutputValue == '0'){

                this.firstOutputValue = `${value}`;

            }else{

                this.firstOutputValue = `${this.firstOutputValue}${value}`;

            }
            
        }

        if(this.firstOutputValue === '.'){

            this.firstOutputValue = '0.';

        }

        window.viewsCalculator.setInnerHtmlToElement(this.firstOutputValue, 'first-converter-output');

        this.checkConverterType();

    }

    checkConverterType(){ 

        let result = '';

        if(this.converterType == 'length'){

            result = window.length.calcLengthConverter(this.firstOutputValue, this.firstSelectedEl.textContent, this.secondSelectedEl.textContent);
        
        }else if(this.converterType == 'angle'){

            result = window.angleConverter.calcAngleConverter(this.firstOutputValue, this.firstSelectedEl.textContent, this.secondSelectedEl.textContent);

        }else if(this.converterType == 'volume'){

            result = window.volumeConverter.calcVolumeConverter(this.firstOutputValue, this.firstSelectedEl.textContent, this.secondSelectedEl.textContent);


        }else if(this.converterType == 'weigthAndMass'){

            result = window.weigthAndMassConverter.calcWeigthAndMassConverter(this.firstOutputValue, this.firstSelectedEl.textContent, this.secondSelectedEl.textContent);


        }else if(this.converterType == 'temperature'){

            result = window.temperatureConverter.calctemperatureConverter(this.firstOutputValue, this.firstSelectedEl.textContent, this.secondSelectedEl.textContent);

        }else if(this.converterType == 'energy'){

            result = window.energyConverter.calcEnergyConverter(this.firstOutputValue, this.firstSelectedEl.textContent, this.secondSelectedEl.textContent);

        }
        else if(this.converterType == 'area'){

            result = window.areaConverter.calcAreaConverter(this.firstOutputValue, this.firstSelectedEl.textContent, this.secondSelectedEl.textContent);

        }
        else if(this.converterType == 'speed'){

            result = window.speedConverter.calcSpeedConverter(this.firstOutputValue, this.firstSelectedEl.textContent, this.secondSelectedEl.textContent);

        }
        else if(this.converterType == 'currency'){

            window.currencyConverter.calcCurrencyConverter(this.firstOutputValue, this.firstSelectedEl.textContent, this.secondSelectedEl.textContent);

            result = 'calculando...';

        }

        if(result === false){

            window.viewsCalculator.displayFail('Is impossible realize the conversion...');
            this.clearConverter();

        }else{

            this.setToDisplay(result);

        }

    }

    setToDisplay(result){

        if(result == '' || result == undefined){

            window.viewsCalculator.setInnerHtmlToElement(0, 'second-converter-output');

        }else{

            window.viewsCalculator.setInnerHtmlToElement(result, 'second-converter-output');

        }

        this.verifySizeOutput('first-converter-output');
        this.verifySizeOutput('second-converter-output');

    }

    historyRequest(value){

        this.clearConverter();

        value = value.split(' ');

        let abreviations = {
            "nm": "nanometers",
            "µm": "microns",
            "mm": "millimeters",
            "cm": "centimeter",
            "m": "meters",
            "km": "kilometers",
            "in": "inches",
            "ft": "Feet",
            "yd": "Yards",
            "mi": "miles",
            "NM": "nautical miles",
            "ml": "Milliliters",
            "cc": "Cubic centimeters",
            "l": "Liters",
            "m<sup>3": "Cubic meters",
            "tsp(USA)": "Teaspoon(USA)",
            "tbsp(USA)": "Tablespoons(USA)",
            "flOz(USA)": "Fluid ounces(USA)",
            "c(USA)": "Cups(USA)",
            "pt(USA)": "Pint(USA)",
            "qt(USA)": "Quart(USA)",
            "gal(USA)": "Gallons(USA)",
            "in<sup>3": "Cubic inches",
            "ft<sup>3": "Cubic feet",
            "yd<sup>3": "Cubic yards",
            "tsp(UK)": "Teaspoon(UK)",
            "tbsp(UK)": "Tablespoons(UK)",
            "flOz(UK)": "Fluid ounces(UK)",
            "pt(UK)": "Pint(UK)",
            "qt(UK)": "Quart(UK)",
            "gal(UK)": "Gallons(UK)",
            "gon": "Grados",
            "°": "Degree",
            "rad": "Radians",
            "ct": "Carats",
            "mg": "Miligrams",
            "cg": "Centigrams",
            "dg": "Decigrams",
            "g": "Gram",
            "dag": "Decagrams",
            "hg": "Hectograms",
            "kg": "Kilograms",
            "t": "Metric Tons",
            "oz": "Ounce",
            "lb": "Pounds",
            "st": "Stone",
            "ton(USA)": "Short Tons(USA)",
            "L/T(UK)": "Long Tons(UK)",
            "°C": "Celsius",
            "°F": "Fahrenheit",
            "°K": "Kelvin",
            "eV": "electron volts",
            "J": "Joules",
            "kJ": "Kilojoules",
            "cal": "Thermic calories",
            "kcal": "Food calories",
            "lbf-ft": "Pound-feet",
            "BTU": "British thermal units",
            "kWh": "Kilowatt-hour",
            "mm²": "Square Millimeters",
            "cm²": "Square Centimeters",
            "m²": "Square Meters",
            "ha": "Hectares",
            "km²": "Square Kilometers",
            "in²": "Square Inches",
            "ft²": "Square Feet",
            "yd²": "Square Yards",
            "ac": "Acres",
            "mi²": "Square Miles",
            "cm/s": "Centimeters per second",
            "m/s": "Meters per second",
            "km/h": "Kilometers per hour",
            "ft/s": "Feet per second",
            "mph": "Miles per hour",
            "kn": "Knots",
            "Mach": "Mach"
        }

        let firstConverterName = abreviations[value[1]];
        let secondConverterName = abreviations[value[2]];;

        window.viewsCalculator.removeClassFromListOfEl(this.firstConversorListEl.childNodes, 'active-converter');
        window.viewsCalculator.removeClassFromListOfEl(this.secondConversorListEl.childNodes, 'active-converter');

        let firstLi = window.viewsCalculator.returnChildNodeWithThisText(firstConverterName, this.firstConversorListEl.childNodes);
        let secondLi = window.viewsCalculator.returnChildNodeWithThisText(secondConverterName, this.secondConversorListEl.childNodes);

        

        //console.log(this.firstConversorListEl.childNodes);
        //console.log(secondLi);

        firstLi.then(li=>{
            
            li.classList.add('active-converter');

        }).catch(err=>{

            console.error(err);

        });

        secondLi.then(li=>{
            
            li.classList.add('active-converter');

        }).catch(err=>{

            console.error(err);

        });

        this.btnSelectionFirst.children[0].children[0].textContent = firstConverterName;
        this.btnSelectionSecond.children[0].children[0].textContent = secondConverterName;

        

        this.firstSelectedEl = this.btnSelectionFirst.children[0].children[0]
        this.secondSelectedEl = this.btnSelectionSecond.children[0].children[0]

        this.firstOutputValue = value[0];

        window.viewsCalculator.setInnerHtmlToElement(this.firstOutputValue, 'first-converter-output');

        this.checkConverterType();

    }

    clearConverter(){

        this.firstOutputValue = '';

        window.viewsCalculator.setInnerHtmlToElement(0, 'second-converter-output');
        window.viewsCalculator.setInnerHtmlToElement(0, 'first-converter-output');

        this.verifySizeOutput('first-converter-output');
        this.verifySizeOutput('second-converter-output');

        if(this.converterType == 'temperature'){

            this.addValueToOutputFirst(0);

        }

    }

    verifySizeOutput(outputId){

        let outputLegth = document.getElementById(outputId).textContent.length;

        if(outputLegth < 18){

            window.viewsCalculator.changeElementFontSize('increase', 0.0, outputId, '4', 'rem');

        }

        if(outputLegth > 18){

            window.viewsCalculator.changeElementFontSize('decrease', 0.15, outputId, '4', 'rem');

        }
        if(outputLegth > 21){

            window.viewsCalculator.changeElementFontSize('decrease', 0.15, outputId, '3.4', 'rem');

        }
        if(outputLegth > 25){

            window.viewsCalculator.changeElementFontSize('decrease', 0.20, outputId, '2.89', 'rem');

        }
        if(outputLegth > 31){

            this.clearConverter();

            window.viewsCalculator.displayFail('Use less than: 32 characters!');

        }

    }

    setSound(value, sound){

        this._audioOnOff = value;

        this._clickSound = sound;

    }
    
    playSound(){

        if (this._audioOnOff){

            this._clickSound.currentTime = 0;
            this._clickSound.play();

        }

    }

}