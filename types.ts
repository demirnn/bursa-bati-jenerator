
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  type: 'Diesel' | 'Portable' | 'Industrial' | 'Commercial' | 'Eco-Friendly' | 'Marine';
  power: string;
  image: string;
  specs?: {
    fuel?: string;
    engine?: string;
    weight?: string;
    capacity?: string;
    document?: string;
  };
}

export interface PortableProduct {
  id: string;
  modelName: string;
  standbyPowerKva: number;
  standbyPowerKw: number;
  primePowerKva: number;
  primePowerKw: number;
  ampere: number;
  frequency: number;
  fuelType: string;
  engineBrand: string;
  alternatorBrand: string;
  controlPanel: string;
  caseType: string;
  operationMode: string;
  engineModel: string;
  socketOutput: string;
  engineType: string;
  numberOfCylinders: number;
  coolingType: string;
  operationTime: string;
  engineRpm: number;
  oilCapacity: string;
  overcurrentProtection: string;
  oilAlarm: string;
  avr: string;
  maintenanceFreeBattery: string;
  currentFuse: string;
  operationHourCounter: string;
  fuelConsumption100: string;
  fuelConsumption75: string;
  fuelConsumption50: string;
  alternatorBrandDetail: string;
  alternatorFrequency: number;
  voltage: number;
  phase: number;
  powerFactor: string;
  winding: string;
  dimensions: string;
  dryWeight: number;
  fuelCapacity: number;
  certificates: string;
  co2Emission: string;
  coalSaving: string;
  mainImage: string;
  caseImage: string;
  kitImage: string;
  datasheetTr: string;
  datasheetEn: string;
  userManualTr: string;
  userManualEn: string;
}

export interface SheetProduct {
  id: string;
  category: string;
  modelName: string;
  brand: string;
  image: string;
  standbyPowerKva: number;
  standbyPowerKw: number;
  primePowerKva: number;
  primePowerKw: number;
  ampere: number;
  fuelType: string;
  frequency: number;
  soundproofingCabin: string;
  speedMaxMin: string;
  coolingMethod: string;
  voltageRegulation: string;
  cabinetDryWeight: number;
  cabinetFuelCapacity: number;
  battery: string;
  secondImage: string;
  thirdImage: string;
  mainImage?: string;
  // Industrial Specific Fields
  engineBrand?: string;
  engineModel?: string;
  alternatorBrand?: string;
  controlPanel?: string;
  numberOfCylinders?: number;
  bore?: string;
  stroke?: string;
  cylinderVolume?: string;
  aspiration?: string;
  governor?: string;
  compressionRatio?: string;
  oilCapacity?: string;
  coolingFluidCapacity?: string;
  engineStandbyPower?: string;
  enginePrimePower?: string;
  fuelSystem?: string;
  injectionSystem?: string;
  electricStartSystem?: string;
  fuelConsumption100?: string;
  fuelConsumption75?: string;
  fuelConsumption50?: string;
  voltage?: number;
  phase?: number;
  insulationSystem?: string;
  protectionClass?: string;
  powerFactor?: string;
  cabinetLength?: string;
  cabinetWidth?: string;
  cabinetHeight?: string;
  openLength?: string;
  openWidth?: string;
  openHeight?: string;
  openDryWeight?: number;
  openFuelCapacity?: number;
  engineEmission?: string;
  engineCertificates?: string;
  gensetCertificates?: string;
  co2Emission?: string;
  coalSaving?: string;
  datasheetTr?: string;
  datasheetEn?: string;
  motorDatasheet?: string;
  userManualTr?: string;
  userManualEn?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  comment: string;
  rating: number;
}
