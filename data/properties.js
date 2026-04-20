const properties = [
  {
    id: "35-206-1",
    internalCode: "35-206-1",
    name: "1 Bedroom con patio en Upper Manhattan",
    zone: "Upper Manhattan",
    guests: "3 huéspedes",
    bathrooms: "1 baño",
    extra: "Patio · A/C · Heating",
    price: 0
  },
  {
    id: "35-206-2",
    internalCode: "35-206-2",
    name: "2 Bedrooms para 5 huéspedes en Upper Manhattan",
    zone: "Upper Manhattan",
    guests: "5 huéspedes",
    bathrooms: "1 baño",
    extra: "Ideal grupos · A/C · Heating",
    price: 0
  },
  {
    id: "35-206-3",
    internalCode: "35-206-3",
    name: "2 Bedrooms dúplex para 6 huéspedes en Manhattan",
    zone: "Upper Manhattan",
    guests: "6 huéspedes",
    bathrooms: "1 baño",
    extra: "Dúplex · A/C · Heating",
    price: 0
  },
  {
    id: "35-206-4",
    internalCode: "35-206-4",
    name: "Departamento para grupos en Upper Manhattan",
    zone: "Upper Manhattan",
    guests: "Confirmar",
    bathrooms: "Confirmar",
    extra: "Completar datos",
    price: 0
  },

  {
    id: "35-208-1",
    name: "1 Bedroom con patio para 4 huéspedes en Manhattan",
    zone: "Upper Manhattan",
    guests: "4 huéspedes",
    bathrooms: "1 baño",
    extra: "Patio · A/C · Heating",
    price: 0
  },
  {
    id: "35-208-2",
    name: "2 Bedrooms para 6 huéspedes en Upper Manhattan",
    zone: "Upper Manhattan",
    guests: "6 huéspedes",
    bathrooms: "1 baño",
    extra: "Amplio · A/C · Heating",
    price: 0
  },
  {
    id: "35-208-3",
    name: "2 Bedrooms dúplex para 5 huéspedes en Manhattan",
    zone: "Upper Manhattan",
    guests: "5 huéspedes",
    bathrooms: "1 baño",
    extra: "Dúplex · A/C · Heating",
    price: 0
  },
  {
    id: "35-208-4",
    name: "2 Bedrooms tríplex para 6 huéspedes en Manhattan",
    zone: "Upper Manhattan",
    guests: "6 huéspedes",
    bathrooms: "1 baño",
    extra: "Tríplex · A/C · Heating",
    price: 0
  },

  // MAD
  {
    id: "MAD-1A",
    name: "Studio con balcón en Midtown Manhattan",
    zone: "Midtown Manhattan",
    guests: "3 huéspedes",
    bathrooms: "1 baño",
    extra: "Balcón · A/C · Heating",
    price: 0
  },
  {
    id: "MAD-1B",
    name: "2 Bedrooms con balcón para 5 huéspedes en Midtown",
    zone: "Midtown Manhattan",
    guests: "5 huéspedes",
    bathrooms: "1 baño",
    extra: "Balcón · A/C · Heating",
    price: 0
  },
  {
    id: "MAD-1C",
    name: "Studio amplio para 5 huéspedes en Manhattan",
    zone: "Midtown Manhattan",
    guests: "5 huéspedes",
    bathrooms: "1 baño",
    extra: "Amplio · A/C · Heating",
    price: 0
  },
  {
    id: "MAD-2A",
    name: "Studio dúplex para 4 huéspedes en Midtown",
    zone: "Midtown Manhattan",
    guests: "4 huéspedes",
    bathrooms: "1 baño",
    extra: "Dúplex · A/C · Heating",
    price: 0
  },
  {
    id: "MAD-2B",
    name: "Studio para 4 huéspedes en Manhattan",
    zone: "Midtown Manhattan",
    guests: "4 huéspedes",
    bathrooms: "1 baño",
    extra: "A/C · Heating",
    price: 0
  },
  {
    id: "MAD-2C",
    name: "Studio amplio para 5 huéspedes en Midtown",
    zone: "Midtown Manhattan",
    guests: "5 huéspedes",
    bathrooms: "1 baño",
    extra: "Amplio · A/C · Heating",
    price: 0
  },
  {
    id: "MAD-3A",
    name: "Studio compacto para 3 huéspedes en Manhattan",
    zone: "Midtown Manhattan",
    guests: "3 huéspedes",
    bathrooms: "1 baño",
    extra: "Compacto · A/C · Heating",
    price: 0
  },
  {
    id: "MAD-3C",
    name: "2 Bedrooms para 5 huéspedes en Midtown",
    zone: "Midtown Manhattan",
    guests: "5 huéspedes",
    bathrooms: "1 baño",
    extra: "A/C · Heating",
    price: 0
  },
  {
    id: "MAD-4A",
    name: "Studio económico en Midtown Manhattan",
    zone: "Midtown Manhattan",
    guests: "3 huéspedes",
    bathrooms: "1 baño",
    extra: "Económico · A/C · Heating",
    price: 0
  },
  {
    id: "MAD-4B",
    name: "1 Bedroom para 3 huéspedes en Midtown",
    zone: "Midtown Manhattan",
    guests: "3 huéspedes",
    bathrooms: "1 baño",
    extra: "A/C · Heating",
    price: 0
  },
  {
    id: "MAD-4C",
    name: "1 Bedroom compacto en Midtown Manhattan",
    zone: "Midtown Manhattan",
    guests: "3 huéspedes",
    bathrooms: "1 baño",
    extra: "Compacto · A/C · Heating",
    price: 0
  },

  // GRANDES
  {
    id: "31-108-3",
    name: "4 Bedrooms amplio para grupos en Manhattan",
    zone: "Central Manhattan",
    guests: "8 huéspedes",
    bathrooms: "1 baño",
    extra: "Ideal grupos · A/C · Heating",
    price: 0
  },
  {
    id: "31-108-4",
    name: "3 Bedrooms familiar en Manhattan",
    zone: "Central Manhattan",
    guests: "6 huéspedes",
    bathrooms: "1 baño",
    extra: "Familiar · A/C · Heating",
    price: 0
  },

  // CHURCH
  {
    id: "Church-2",
    name: "2 Bedrooms con ascensor y laundry en Manhattan",
    zone: "Church Street",
    guests: "6 huéspedes",
    bathrooms: "2 baños",
    extra: "Ascensor · Laundry · Dishwasher",
    price: 0
  },
  {
    id: "Church-3",
    name: "2 Bedrooms moderno con ascensor en Manhattan",
    zone: "Church Street",
    guests: "4 huéspedes",
    bathrooms: "2 baños",
    extra: "Ascensor · Laundry · Dishwasher",
    price: 0
  },
  {
    id: "Church-4",
    name: "2 Bedrooms para 5 huéspedes con ascensor en Manhattan",
    zone: "Church Street",
    guests: "5 huéspedes",
    bathrooms: "2 baños",
    extra: "Ascensor · Laundry · Dishwasher",
    price: 0
  },

  // 120
  {
    id: "120-58-3C",
    name: "2 Bedrooms moderno en Midtown West",
    zone: "Midtown West",
    guests: "5 huéspedes",
    bathrooms: "1 baño",
    extra: "Ascensor · Laundry · Dishwasher",
    price: 0
  },
  {
    id: "120-58-5C",
    name: "1 Bedroom con ascensor en Midtown West",
    zone: "Midtown West",
    guests: "5 huéspedes",
    bathrooms: "1 baño",
    extra: "Ascensor · Laundry",
    price: 0
  },
  {
    id: "120-58-4D",
    name: "2 Bedrooms amplio en Midtown West",
    zone: "Midtown West",
    guests: "5 huéspedes",
    bathrooms: "2 baños",
    extra: "Ascensor · Laundry · Dishwasher",
    price: 0
  },

  {
    id: "712W-175",
    name: "Departamento en Upper West Side",
    zone: "Upper West Side",
    guests: "Confirmar",
    bathrooms: "Confirmar",
    extra: "Completar datos",
    price: 0
  }
];