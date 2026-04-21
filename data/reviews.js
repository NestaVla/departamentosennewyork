const reviewsData = [
  {
    "rating": 5,
    "name": "María L.",
    "location": "Buenos Aires",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Excelente ubicación y proceso muy simple. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Excellent location and a very easy booking process. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Jorge R.",
    "location": "Ciudad de México",
    "stay": "2 Bedrooms en Church Street",
    "text_es": "Reseña de muestra para visualizar diseño. Muy cómodo para viajar en familia. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Very comfortable for a family trip. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Sofía C.",
    "location": "Bogotá",
    "stay": "1 Bedroom en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Nos respondieron rápido y todo fue claro. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. They replied quickly and everything was clear. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Lucía P.",
    "location": "Montevideo",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Ideal para una estadía corta en NYC. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Ideal for a short stay in NYC. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Diego M.",
    "location": "Santiago",
    "stay": "2 Bedrooms en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Las fotos coincidían con el departamento. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. The photos matched the apartment. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Paula G.",
    "location": "Lima",
    "stay": "1 Bedroom en Central Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Muy buena comunicación por WhatsApp. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Great communication on WhatsApp. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Carolina N.",
    "location": "Rosario",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Todo muy prolijo y bien organizado. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Everything felt organized and smooth. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Andrés T.",
    "location": "Medellín",
    "stay": "2 Bedrooms en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Buena relación precio-ubicación. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Great value for the location. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Micaela S.",
    "location": "Córdoba",
    "stay": "1 Bedroom en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Nos sentimos muy cómodos durante la estadía. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. We felt very comfortable during the stay. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Valentina H.",
    "location": "Quito",
    "stay": "Studio en Central Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Perfecto para moverse por Manhattan. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Perfect base for getting around Manhattan. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "María L.",
    "location": "Buenos Aires",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Excelente ubicación y proceso muy simple. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Excellent location and a very easy booking process. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Jorge R.",
    "location": "Ciudad de México",
    "stay": "2 Bedrooms en Church Street",
    "text_es": "Reseña de muestra para visualizar diseño. Muy cómodo para viajar en familia. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Very comfortable for a family trip. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Sofía C.",
    "location": "Bogotá",
    "stay": "1 Bedroom en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Nos respondieron rápido y todo fue claro. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. They replied quickly and everything was clear. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Lucía P.",
    "location": "Montevideo",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Ideal para una estadía corta en NYC. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Ideal for a short stay in NYC. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Diego M.",
    "location": "Santiago",
    "stay": "2 Bedrooms en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Las fotos coincidían con el departamento. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. The photos matched the apartment. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Paula G.",
    "location": "Lima",
    "stay": "1 Bedroom en Central Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Muy buena comunicación por WhatsApp. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Great communication on WhatsApp. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Carolina N.",
    "location": "Rosario",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Todo muy prolijo y bien organizado. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Everything felt organized and smooth. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Andrés T.",
    "location": "Medellín",
    "stay": "2 Bedrooms en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Buena relación precio-ubicación. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Great value for the location. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Micaela S.",
    "location": "Córdoba",
    "stay": "1 Bedroom en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Nos sentimos muy cómodos durante la estadía. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. We felt very comfortable during the stay. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Valentina H.",
    "location": "Quito",
    "stay": "Studio en Central Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Perfecto para moverse por Manhattan. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Perfect base for getting around Manhattan. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "María L.",
    "location": "Buenos Aires",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Excelente ubicación y proceso muy simple. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Excellent location and a very easy booking process. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Jorge R.",
    "location": "Ciudad de México",
    "stay": "2 Bedrooms en Church Street",
    "text_es": "Reseña de muestra para visualizar diseño. Muy cómodo para viajar en familia. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Very comfortable for a family trip. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Sofía C.",
    "location": "Bogotá",
    "stay": "1 Bedroom en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Nos respondieron rápido y todo fue claro. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. They replied quickly and everything was clear. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Lucía P.",
    "location": "Montevideo",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Ideal para una estadía corta en NYC. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Ideal for a short stay in NYC. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Diego M.",
    "location": "Santiago",
    "stay": "2 Bedrooms en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Las fotos coincidían con el departamento. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. The photos matched the apartment. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Paula G.",
    "location": "Lima",
    "stay": "1 Bedroom en Central Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Muy buena comunicación por WhatsApp. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Great communication on WhatsApp. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Carolina N.",
    "location": "Rosario",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Todo muy prolijo y bien organizado. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Everything felt organized and smooth. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Andrés T.",
    "location": "Medellín",
    "stay": "2 Bedrooms en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Buena relación precio-ubicación. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Great value for the location. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Micaela S.",
    "location": "Córdoba",
    "stay": "1 Bedroom en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Nos sentimos muy cómodos durante la estadía. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. We felt very comfortable during the stay. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Valentina H.",
    "location": "Quito",
    "stay": "Studio en Central Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Perfecto para moverse por Manhattan. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Perfect base for getting around Manhattan. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "María L.",
    "location": "Buenos Aires",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Excelente ubicación y proceso muy simple. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Excellent location and a very easy booking process. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Jorge R.",
    "location": "Ciudad de México",
    "stay": "2 Bedrooms en Church Street",
    "text_es": "Reseña de muestra para visualizar diseño. Muy cómodo para viajar en familia. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Very comfortable for a family trip. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Sofía C.",
    "location": "Bogotá",
    "stay": "1 Bedroom en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Nos respondieron rápido y todo fue claro. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. They replied quickly and everything was clear. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Lucía P.",
    "location": "Montevideo",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Ideal para una estadía corta en NYC. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Ideal for a short stay in NYC. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Diego M.",
    "location": "Santiago",
    "stay": "2 Bedrooms en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Las fotos coincidían con el departamento. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. The photos matched the apartment. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Paula G.",
    "location": "Lima",
    "stay": "1 Bedroom en Central Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Muy buena comunicación por WhatsApp. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Great communication on WhatsApp. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Carolina N.",
    "location": "Rosario",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Todo muy prolijo y bien organizado. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Everything felt organized and smooth. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Andrés T.",
    "location": "Medellín",
    "stay": "2 Bedrooms en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Buena relación precio-ubicación. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Great value for the location. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Micaela S.",
    "location": "Córdoba",
    "stay": "1 Bedroom en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Nos sentimos muy cómodos durante la estadía. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. We felt very comfortable during the stay. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 5,
    "name": "Valentina H.",
    "location": "Quito",
    "stay": "Studio en Central Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Perfecto para moverse por Manhattan. La ubicación nos resultó práctica, el contacto fue ágil y el proceso de llegada estuvo bien coordinado.",
    "text_en": "Sample review for layout preview. Perfect base for getting around Manhattan. The location felt practical, communication was quick, and arrival was well coordinated."
  },
  {
    "rating": 4,
    "name": "Natalia B.",
    "location": "Buenos Aires",
    "stay": "1 Bedroom en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Muy buena experiencia, volvería. En general fue una experiencia positiva y la unidad funcionó bien para nuestra estadía.",
    "text_en": "Sample review for layout preview. Very good experience, I would stay again. Overall it was a positive experience and the unit worked well for our stay."
  },
  {
    "rating": 4,
    "name": "Tomás E.",
    "location": "Montevideo",
    "stay": "2 Bedrooms en Church Street",
    "text_es": "Reseña de muestra para visualizar diseño. Buena atención y buena zona. En general fue una experiencia positiva y la unidad funcionó bien para nuestra estadía.",
    "text_en": "Sample review for layout preview. Good support and good area. Overall it was a positive experience and the unit worked well for our stay."
  },
  {
    "rating": 4,
    "name": "Camila D.",
    "location": "Bogotá",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Cómodo para unos días en la ciudad. En general fue una experiencia positiva y la unidad funcionó bien para nuestra estadía.",
    "text_en": "Sample review for layout preview. Comfortable for a few days in the city. Overall it was a positive experience and the unit worked well for our stay."
  },
  {
    "rating": 4,
    "name": "Martín A.",
    "location": "Santiago",
    "stay": "2 Bedrooms en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Todo correcto y sin sorpresas. En general fue una experiencia positiva y la unidad funcionó bien para nuestra estadía.",
    "text_en": "Sample review for layout preview. Everything was correct and as expected. Overall it was a positive experience and the unit worked well for our stay."
  },
  {
    "rating": 4,
    "name": "Natalia B.",
    "location": "Buenos Aires",
    "stay": "1 Bedroom en Midtown West",
    "text_es": "Reseña de muestra para visualizar diseño. Muy buena experiencia, volvería. En general fue una experiencia positiva y la unidad funcionó bien para nuestra estadía.",
    "text_en": "Sample review for layout preview. Very good experience, I would stay again. Overall it was a positive experience and the unit worked well for our stay."
  },
  {
    "rating": 4,
    "name": "Tomás E.",
    "location": "Montevideo",
    "stay": "2 Bedrooms en Church Street",
    "text_es": "Reseña de muestra para visualizar diseño. Buena atención y buena zona. En general fue una experiencia positiva y la unidad funcionó bien para nuestra estadía.",
    "text_en": "Sample review for layout preview. Good support and good area. Overall it was a positive experience and the unit worked well for our stay."
  },
  {
    "rating": 4,
    "name": "Camila D.",
    "location": "Bogotá",
    "stay": "Studio en Midtown Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Cómodo para unos días en la ciudad. En general fue una experiencia positiva y la unidad funcionó bien para nuestra estadía.",
    "text_en": "Sample review for layout preview. Comfortable for a few days in the city. Overall it was a positive experience and the unit worked well for our stay."
  },
  {
    "rating": 4,
    "name": "Martín A.",
    "location": "Santiago",
    "stay": "2 Bedrooms en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Todo correcto y sin sorpresas. En general fue una experiencia positiva y la unidad funcionó bien para nuestra estadía.",
    "text_en": "Sample review for layout preview. Everything was correct and as expected. Overall it was a positive experience and the unit worked well for our stay."
  },
  {
    "rating": 3,
    "name": "Laura V.",
    "location": "Lima",
    "stay": "Studio en Central Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Cumplió con lo esperado para una estadía corta. La usamos como base para el viaje y nos sirvió para movernos por la ciudad.",
    "text_en": "Sample review for layout preview. It met expectations for a short stay. We used it as a base for the trip and it worked for moving around the city."
  },
  {
    "rating": 3,
    "name": "Federico I.",
    "location": "Rosario",
    "stay": "1 Bedroom en Upper Manhattan",
    "text_es": "Reseña de muestra para visualizar diseño. Experiencia aceptable y buena comunicación. La usamos como base para el viaje y nos sirvió para movernos por la ciudad.",
    "text_en": "Sample review for layout preview. Acceptable experience and good communication. We used it as a base for the trip and it worked for moving around the city."
  }
];
