interface CarSchema {
    _id?: {$oid: string};
    model: string;
    year: string;
    brand: string;
};

export default CarSchema