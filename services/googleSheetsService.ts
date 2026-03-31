
import { PortableProduct, SheetProduct } from '../types';

const PORTABLE_SHEET_ID = '1DVSfj8Pk4Cd5hCQLZQe4QHP8v6EdDR_PCof5Hv6wMb8';
const INDUSTRIAL_SHEET_ID = '18CDzN7MXrdIfqH6Ud8wHk3DMESWK7DQ5RNA-lz_uOK8';
const API_KEY = 'AIzaSyA8HEXFSEvSB4qW7wTfW6188I7U1o43hVA';

export async function fetchPortableProductsFromSheets(): Promise<PortableProduct[]> {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${PORTABLE_SHEET_ID}/values/SETS!A1:BB58?key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Portable fetch failed:', response.statusText);
      return [];
    }
    const data = await response.json();

    if (!data.values || data.values.length === 0) return [];

    const values = data.values;
    const products: PortableProduct[] = [];

    // Columns start from index 2 (C)
    for (let col = 2; col < values[0].length; col++) {
      if (!values[0][col]) continue;

      const product: PortableProduct = {
        id: `portable-${col - 1}`,
        modelName: values[0][col] || '',
        standbyPowerKva: parseFloat(values[2]?.[col]?.replace(',', '.') || '0'),
        standbyPowerKw: parseFloat(values[3]?.[col]?.replace(',', '.') || '0'),
        primePowerKva: parseFloat(values[4]?.[col]?.replace(',', '.') || '0'),
        primePowerKw: parseFloat(values[5]?.[col]?.replace(',', '.') || '0'),
        ampere: parseFloat(values[6]?.[col]?.replace(',', '.') || '0'),
        frequency: parseFloat(values[9]?.[col] || '50'),
        fuelType: values[10]?.[col] || '',
        engineBrand: values[11]?.[col] || '',
        alternatorBrand: values[12]?.[col] || '',
        controlPanel: values[13]?.[col] || '',
        caseType: values[14]?.[col] || '',
        operationMode: values[15]?.[col] || '',
        engineModel: values[17]?.[col] || '',
        socketOutput: values[18]?.[col] || '',
        engineType: values[19]?.[col] || '',
        numberOfCylinders: parseInt(values[20]?.[col] || '1'),
        coolingType: values[21]?.[col] || '',
        operationTime: values[22]?.[col] || '',
        engineRpm: parseInt(values[23]?.[col] || '3000'),
        oilCapacity: values[24]?.[col] || '',
        overcurrentProtection: values[25]?.[col] || '',
        oilAlarm: values[26]?.[col] || '',
        avr: values[27]?.[col] || '',
        maintenanceFreeBattery: values[28]?.[col] || '',
        currentFuse: values[29]?.[col] || '',
        operationHourCounter: values[30]?.[col] || '',
        fuelConsumption100: values[31]?.[col] || '',
        fuelConsumption75: values[32]?.[col] || '',
        fuelConsumption50: values[33]?.[col] || '',
        alternatorBrandDetail: values[36]?.[col] || '',
        alternatorFrequency: parseFloat(values[37]?.[col] || '50'),
        voltage: parseFloat(values[38]?.[col] || '220'),
        phase: parseInt(values[39]?.[col] || '1'),
        powerFactor: values[40]?.[col] || '0.8',
        winding: values[41]?.[col] || '',
        dimensions: values[44]?.[col] || '',
        dryWeight: parseFloat(values[45]?.[col]?.replace(',', '.') || '0'),
        fuelCapacity: parseFloat(values[46]?.[col]?.replace(',', '.') || '0'),
        certificates: values[48]?.[col] || '',
        co2Emission: values[49]?.[col] || '',
        coalSaving: values[50]?.[col] || '',
        mainImage: values[51]?.[col] || 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
        caseImage: values[52]?.[col] || '',
        kitImage: values[53]?.[col] || '',
        datasheetTr: values[54]?.[col] || '',
        datasheetEn: values[55]?.[col] || '',
        userManualTr: values[56]?.[col] || '',
        userManualEn: values[57]?.[col] || '',
      };
      products.push(product);
    }

    return products;
  } catch (error) {
    console.error('Error fetching portable products:', error);
    return [];
  }
}

export async function fetchIndustrialProductsFromSheets(): Promise<SheetProduct[]> {
  try {
    const ranges = [
      'SETS!A1:GY1',  // Model Adları
      'SETS!A3:GY3',  // Standby kVA
      'SETS!A4:GY4',  // Standby kW
      'SETS!A5:GY5',  // Prime kVA
      'SETS!A6:GY6',  // Prime kW
      'SETS!A7:GY7',  // Amper
      'SETS!A18:GY18', // Motor Markası
      'SETS!A10:GY10', // Frekans
      'SETS!A77:GY77'  // Ana Resim
    ];
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${INDUSTRIAL_SHEET_ID}/values:batchGet?ranges=${ranges.join('&ranges=')}&key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Industrial fetch failed:', response.statusText);
      return [];
    }
    const data = await response.json();

    if (!data.valueRanges || data.valueRanges.length < 9) return [];

    const modelNames = data.valueRanges[0].values?.[0] || [];
    const standbyKva = data.valueRanges[1].values?.[0] || [];
    const standbyKw = data.valueRanges[2].values?.[0] || [];
    const primeKva = data.valueRanges[3].values?.[0] || [];
    const primeKw = data.valueRanges[4].values?.[0] || [];
    const ampere = data.valueRanges[5].values?.[0] || [];
    const brand = data.valueRanges[6].values?.[0] || [];
    const frequency = data.valueRanges[7].values?.[0] || [];
    const image = data.valueRanges[8].values?.[0] || [];

    const products: SheetProduct[] = [];

    if (modelNames.length === 0) return [];

    // Columns start from index 1 (B) for industrial
    for (let col = 1; col < modelNames.length; col++) {
      if (!modelNames[col]) continue;

      products.push({
        id: `industrial-${col}`,
        category: 'industrial',
        modelName: modelNames[col],
        standbyPowerKva: parseFloat(standbyKva[col]?.replace(',', '.') || '0'),
        standbyPowerKw: parseFloat(standbyKw[col]?.replace(',', '.') || '0'),
        primePowerKva: parseFloat(primeKva[col]?.replace(',', '.') || '0'),
        primePowerKw: parseFloat(primeKw[col]?.replace(',', '.') || '0'),
        ampere: parseFloat(ampere[col]?.replace(',', '.') || '0'),
        brand: brand[col] || '',
        engineBrand: brand[col] || '',
        frequency: parseFloat(frequency[col] || '50'),
        image: image[col] || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        fuelType: 'Dizel',
        soundproofingCabin: 'Var',
        speedMaxMin: '1500 rpm',
        coolingMethod: 'Su Soğutmalı',
        voltageRegulation: 'AVR',
        cabinetDryWeight: 0,
        cabinetFuelCapacity: 0,
        battery: '',
        secondImage: '',
        thirdImage: ''
      });
    }

    return products;
  } catch (error) {
    console.error('Error fetching industrial products:', error);
    return [];
  }
}

export async function fetchDetailedProductData(id: string): Promise<SheetProduct | null> {
  try {
    const isIndustrial = id.startsWith('industrial-');
    const isPortable = id.startsWith('portable-');
    
    if (isPortable) {
      const portableProducts = await fetchPortableProductsFromSheets();
      const product = portableProducts.find(p => p.id === id);
      if (!product) return null;
      
      return {
        id: product.id,
        category: 'portable',
        modelName: product.modelName,
        brand: product.engineBrand,
        image: product.mainImage,
        standbyPowerKva: product.standbyPowerKva,
        standbyPowerKw: product.standbyPowerKw,
        primePowerKva: product.primePowerKva,
        primePowerKw: product.primePowerKw,
        ampere: product.ampere,
        fuelType: product.fuelType,
        frequency: product.frequency,
        soundproofingCabin: product.caseType,
        speedMaxMin: `${product.engineRpm} rpm`,
        coolingMethod: product.coolingType,
        voltageRegulation: product.avr,
        cabinetDryWeight: product.dryWeight,
        cabinetFuelCapacity: product.fuelCapacity,
        battery: product.maintenanceFreeBattery,
        secondImage: product.caseImage,
        thirdImage: product.kitImage,
        engineBrand: product.engineBrand,
        engineModel: product.engineModel,
        alternatorBrand: product.alternatorBrand,
        controlPanel: product.controlPanel,
        numberOfCylinders: product.numberOfCylinders,
        oilCapacity: product.oilCapacity,
        fuelConsumption100: product.fuelConsumption100,
        fuelConsumption75: product.fuelConsumption75,
        fuelConsumption50: product.fuelConsumption50,
        voltage: product.voltage,
        phase: product.phase,
        powerFactor: product.powerFactor,
        co2Emission: product.co2Emission,
        coalSaving: product.coalSaving,
        datasheetTr: product.datasheetTr,
        datasheetEn: product.datasheetEn,
        userManualTr: product.userManualTr,
        userManualEn: product.userManualEn
      };
    }

    if (!isIndustrial) return null;

    const colIndex = parseInt(id.replace('industrial-', ''));
    const colLetter = getColumnLetter(colIndex + 1); // +1 because col 1 is B
    
    const ranges = [
      `SETS!${colLetter}3:${colLetter}7`,   // Power Data (3-7)
      `SETS!${colLetter}9:${colLetter}15`,  // General Specs (9-15)
      `SETS!${colLetter}18:${colLetter}38`, // Engine Specs (18-38)
      `SETS!${colLetter}41:${colLetter}48`, // Alternator Specs (41-48)
      `SETS!${colLetter}54:${colLetter}58`, // Cabinet Dimensions (54-58)
      `SETS!${colLetter}61:${colLetter}65`, // Open Dimensions (61-65)
      `SETS!${colLetter}67:${colLetter}67`, // Battery
      `SETS!${colLetter}68:${colLetter}68`, // Emission
      `SETS!${colLetter}70:${colLetter}70`, // Engine Certs
      `SETS!${colLetter}71:${colLetter}71`, // Genset Certs
      `SETS!${colLetter}73:${colLetter}73`, // CO2
      `SETS!${colLetter}74:${colLetter}74`, // Coal
      `SETS!${colLetter}77:${colLetter}77`, // Main Image
      `SETS!${colLetter}78:${colLetter}78`, // Second Image
      `SETS!${colLetter}79:${colLetter}79`, // Third Image
      `SETS!${colLetter}80:${colLetter}80`, // TR Datasheet
      `SETS!${colLetter}81:${colLetter}81`, // EN Datasheet
      `SETS!${colLetter}82:${colLetter}82`, // Motor Datasheet
      `SETS!${colLetter}83:${colLetter}83`, // TR User Manual
      `SETS!${colLetter}84:${colLetter}84`, // EN User Manual
      `SETS!${colLetter}1:${colLetter}1`     // Model Name
    ];

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${INDUSTRIAL_SHEET_ID}/values:batchGet?ranges=${ranges.join('&ranges=')}&key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Detailed fetch failed:', response.statusText);
      return null;
    }
    const data = await response.json();

    if (!data.valueRanges || data.valueRanges.length < 21) return null;

    const powerData = data.valueRanges[0].values?.map(v => v[0]) || [];
    const generalData = data.valueRanges[1].values?.map(v => v[0]) || [];
    const engineData = data.valueRanges[2].values?.map(v => v[0]) || [];
    const alternatorData = data.valueRanges[3].values?.map(v => v[0]) || [];
    const cabinetData = data.valueRanges[4].values?.map(v => v[0]) || [];
    const openData = data.valueRanges[5].values?.map(v => v[0]) || [];
    
    const getVal = (rangeIdx: number) => data.valueRanges[rangeIdx].values?.[0]?.[0] || '';

    return {
      id,
      category: 'industrial',
      modelName: getVal(20),
      brand: engineData[0] || '',
      image: getVal(12) || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      standbyPowerKva: parseFloat(powerData[0]?.replace(',', '.') || '0'),
      standbyPowerKw: parseFloat(powerData[1]?.replace(',', '.') || '0'),
      primePowerKva: parseFloat(powerData[2]?.replace(',', '.') || '0'),
      primePowerKw: parseFloat(powerData[3]?.replace(',', '.') || '0'),
      ampere: parseFloat(powerData[4]?.replace(',', '.') || '0'),
      frequency: parseFloat(generalData[1] || '50'),
      fuelType: generalData[2] || 'Dizel',
      engineBrand: generalData[3] || '',
      alternatorBrand: generalData[4] || '',
      controlPanel: generalData[5] || '',
      soundproofingCabin: generalData[6] || '',
      engineModel: engineData[1] || '',
      numberOfCylinders: parseInt(engineData[2] || '0'),
      bore: engineData[3] || '',
      stroke: engineData[4] || '',
      cylinderVolume: engineData[5] || '',
      aspiration: engineData[6] || '',
      governor: engineData[7] || '',
      compressionRatio: engineData[8] || '',
      speedMaxMin: engineData[9] || '1500 rpm',
      oilCapacity: engineData[10] || '',
      coolingFluidCapacity: engineData[11] || '',
      engineStandbyPower: engineData[12] || '',
      enginePrimePower: engineData[13] || '',
      fuelSystem: engineData[14] || '',
      injectionSystem: engineData[15] || '',
      coolingMethod: engineData[16] || '',
      electricStartSystem: engineData[17] || '',
      fuelConsumption100: engineData[18] || '',
      fuelConsumption75: engineData[19] || '',
      fuelConsumption50: engineData[20] || '',
      voltage: parseFloat(alternatorData[2] || '400'),
      phase: parseInt(alternatorData[3] || '3'),
      voltageRegulation: alternatorData[4] || 'AVR',
      insulationSystem: alternatorData[5] || '',
      protectionClass: alternatorData[6] || '',
      powerFactor: alternatorData[7] || '0.8',
      cabinetLength: cabinetData[0] || '',
      cabinetWidth: cabinetData[1] || '',
      cabinetHeight: cabinetData[2] || '',
      cabinetDryWeight: parseFloat(cabinetData[3]?.replace(',', '.') || '0'),
      cabinetFuelCapacity: parseFloat(cabinetData[4]?.replace(',', '.') || '0'),
      openLength: openData[0] || '',
      openWidth: openData[1] || '',
      openHeight: openData[2] || '',
      openDryWeight: parseFloat(openData[3]?.replace(',', '.') || '0'),
      openFuelCapacity: parseFloat(openData[4]?.replace(',', '.') || '0'),
      battery: getVal(6),
      engineEmission: getVal(7),
      engineCertificates: getVal(8),
      gensetCertificates: getVal(9),
      co2Emission: getVal(10),
      coalSaving: getVal(11),
      mainImage: getVal(12),
      secondImage: getVal(13),
      thirdImage: getVal(14),
      datasheetTr: getVal(15),
      datasheetEn: getVal(16),
      motorDatasheet: getVal(17),
      userManualTr: getVal(18),
      userManualEn: getVal(19)
    };
  } catch (error) {
    console.error('Error fetching detailed product data:', error);
    return null;
  }
}

function getColumnLetter(index: number): string {
  let letter = '';
  while (index > 0) {
    let mod = (index - 1) % 26;
    letter = String.fromCharCode(65 + mod) + letter;
    index = Math.floor((index - mod) / 26);
  }
  return letter;
}

export async function fetchProductsFromSheets(): Promise<SheetProduct[]> {
  const [portableProducts, industrialProducts] = await Promise.all([
    fetchPortableProductsFromSheets(),
    fetchIndustrialProductsFromSheets()
  ]);
  
  const mappedPortable: SheetProduct[] = portableProducts.map(p => ({
    id: p.id,
    category: 'portable',
    modelName: p.modelName,
    brand: p.engineBrand,
    image: p.mainImage,
    standbyPowerKva: p.standbyPowerKva,
    standbyPowerKw: p.standbyPowerKw,
    primePowerKva: p.primePowerKva,
    primePowerKw: p.primePowerKw,
    ampere: p.ampere,
    fuelType: p.fuelType,
    frequency: p.frequency,
    soundproofingCabin: p.caseType,
    speedMaxMin: `${p.engineRpm} rpm`,
    coolingMethod: p.coolingType,
    voltageRegulation: p.avr,
    cabinetDryWeight: p.dryWeight,
    cabinetFuelCapacity: p.fuelCapacity,
    battery: p.maintenanceFreeBattery,
    secondImage: p.caseImage,
    thirdImage: p.kitImage,
  }));

  return [...mappedPortable, ...industrialProducts];
}

export async function getProductsByCategory(category: string): Promise<SheetProduct[]> {
  const allProducts = await fetchProductsFromSheets();
  return allProducts.filter(p => p.category === category);
}

export async function getProductById(id: string): Promise<SheetProduct | null> {
  return fetchDetailedProductData(id);
}
