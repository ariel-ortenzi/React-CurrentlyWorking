const products = [
    {
        id: 1001,
        name: "Cinta transparente 48mm x 100mts",
        line: "orpack",
        category: "cinta",
        price: 1500,
        stock: 7,
        routeImage: "Cinta transparente 48mm x 100mtr.jpg",
        description: "Esta cinta transparente de alta calidad, con un ancho de 48mm y una longitud de 100 metros, es ideal para embalajes y sellado de cajas. Resistente y duradera, pertenece a la línea Orpack, lo que garantiza confianza y rendimiento en cada uso. ¡Perfecta para tareas de empaque diario!"
    },
    {
        id: 1002,
        name: "Cinta transparente 48mm x 1000mts",
        line: "orpack",
        category: "cinta",
        price: 1500,
        stock: 6,
        routeImage: "Cinta transparente 48mm x 1000mtr.jpg",
        description: "Con 1000 metros de largo y un ancho de 48mm, esta cinta transparente es ideal para quienes buscan eficiencia y ahorro en sus procesos de embalaje. De la línea Orpack, ofrece una adhesión fuerte y duradera, perfecta para asegurar paquetes grandes o en largas series de producción."
    },
    {
        id: 1003,
        name: "Cinta transparente de 24mm x 50mtr",
        line: "orpack",
        category: "cinta",
        price: 1000,
        stock: 9,
        routeImage: "Cinta transparente de 24mm x 50mtr.jpg",
        description: "Esta cinta de 24mm de ancho y 50 metros de largo es ideal para trabajos de sellado más detallados o ligeros. Proveniente de la reconocida línea Orpack, ofrece gran adhesión y resistencia, garantizando un cierre efectivo y confiable en diferentes tipos de superficies."
    },
    {
        id: 1004,
        name: "Cinta transparente de 48mm x 50mtr",
        line: "orpack",
        category: "cinta",
        price: 1500,
        stock: 5,
        routeImage: "Cinta transparente de 48mm x 50mtr.jpg",
        description: "Ideal para usos cotidianos de embalaje, esta cinta transparente de 48mm de ancho y 50 metros de largo combina resistencia y durabilidad. Con la calidad de la línea Orpack, es perfecta para asegurar cajas y paquetes de manera confiable."
    },
    {
        id: 2001,
        name: "Film adherente 38mm x 120mtr",
        line: "ormai",
        category: "filmAdherente",
        price: 7500,
        stock: 8,
        routeImage: "Film adherente 38 x 120mtrjpg.jpg",
        description: "Este film adherente de 38mm x 120 metros de la línea Ormai es ideal para envolver productos con firmeza y protección. Su alto grado de adherencia lo hace perfecto para la protección de cargas o para usos domésticos, manteniendo los objetos seguros y bien cubiertos."
    },
    {
        id: 2002,
        name: "Film adherente 38mm x 300mtr",
        line: "ormai",
        category: "filmAdherente",
        price: 10300,
        stock: 45,
        routeImage: "Film adherente 38mm x 300mtr.jpg",
        description: "Con 300 metros de longitud y un ancho de 38mm, este film adherente de Ormai ofrece una excelente cobertura y sujeción. Ideal para proteger mercancías de diversos tamaños, es perfecto para embalaje industrial o comercial, manteniendo las cargas bien aseguradas."
    },
    {
        id: 3001,
        name: "Film para alimentos 38cm x1000mtr",
        line: "orpack",
        category: "filmAlimentos",
        price: 7000,
        stock: 11,
        routeImage: "Film adherente para alimento 38cm x1000mtr.jpg",
        description: "Este film adherente para alimentos, con 38cm de ancho y 1000 metros de largo, es ideal para envolver productos alimenticios, manteniendo su frescura y protección. Parte de la línea Orpack, está diseñado para ofrecer una envoltura segura en grandes cantidades."
    },
    {
        id: 3002,
        name: "Film para alimentos 45cm x 600mtr",
        line: "orpack",
        category: "filmAlimentos",
        price: 5000,
        stock: 16,
        routeImage: "Film adherente para alimento 45cm x 600mtr.jpg",
        description: "Con un ancho de 45cm y 600 metros de longitud, este film adherente es perfecto para envolver alimentos de manera eficaz, asegurando su frescura y protección. Fabricado por Orpack, es una excelente opción para cocinas industriales o grandes volúmenes de trabajo."
    },
    {
        id: 3003,
        name: "Film para alimentos 45cm x 1000mtr",
        line: "orpack",
        category: "filmAlimentos",
        price: 9700,
        stock: 31,
        routeImage: "Film adherente para alimento 45cm x 1000mtr.jpg",
        description: "Este film de 45cm de ancho y 1000 metros de largo está diseñado específicamente para envolver y proteger alimentos, conservando su calidad. De la línea Orpack, garantiza una excelente durabilidad y flexibilidad, ideal para grandes volúmenes de producción alimentaria."
    },
    {
        id: 3004,
        name: "Film para alimentos 38cm x 600mtr",
        line: "orpack",
        category: "filmAlimentos",
        price: 8100,
        stock: 27,
        routeImage: "Film adherente para alimentos 38cm x 600mtr.jpg",
        description: "Ideal para mantener la frescura de los alimentos, este film adherente de 38cm de ancho y 600 metros de largo ofrece una cobertura perfecta. Con la calidad de Orpack, es la opción ideal para envolver productos de manera rápida y eficiente en entornos de alta demanda."
    },
    {
        id: 4001,
        name: "Film streetch 10cm x 800gr",
        line: "orpack",
        category: "filmStreetch",
        price: 6300,
        stock: 4,
        routeImage: "Film streetch 10cm x 800gr.jpg",
        description: "Este film stretch de 10cm de ancho y 800 gramos es ideal para embalajes industriales que requieren de una fijación segura. De la línea Orpack, ofrece excelente estiramiento y resistencia, perfecto para asegurar y proteger cargas durante su transporte o almacenamiento."
    },
    {
        id: 4002,
        name: "Film Stretch 5cm x 500gr",
        line: "orpack",
        category: "filmStreetch",
        price: 4500,
        stock: 10,
        routeImage: "Film stretch 5cm x 500gr.jpg",
        description: "Compacto pero poderoso, este film stretch de 5cm de ancho y 500 gramos de peso es ideal para tareas de envoltura rápidas y efectivas. Gracias a su calidad Orpack, proporciona una cobertura fuerte y confiable en una variedad de aplicaciones."
    },
    {
        id: 4003,
        name: "Film Stretch de 10cm x500gr",
        line: "orpack",
        category: "filmStreetch",
        price: 4500,
        stock: 7,
        routeImage: "Film stretch de 10cm x500gr.jpg",
        description: "Este film stretch de 10cm de ancho y 500 gramos ofrece una excelente relación entre tamaño y rendimiento, proporcionando un estiramiento fuerte y duradero. Ideal para el embalaje y protección de objetos pequeños o medianos, es una opción confiable de la línea Orpack."
    },
    {
        id: 4004,
        name: "Film Stretch industrial por 5k",
        line: "orpack",
        category: "filmStreetch",
        price: 21700,
        stock: 31,
        routeImage: "Film stretch industrial por 5k.jpg",
        description: "Perfecto para uso industrial, este film stretch de 5kg es ideal para asegurar cargas pesadas. Con la reconocida calidad de la línea Orpack, garantiza una sujeción fuerte y resistente durante el transporte o almacenamiento, evitando desplazamientos o daños."
    },
    {
        id: 4005,
        name: "Film stretch manguito 50cm x 2,5k",
        line: "orpack",
        category: "filmStreetch",
        price: 7500,
        stock: 3,
        routeImage: "Film stretch manguito 50cm x 2,5k.jpg",
        description: "Este film stretch de 50cm de ancho y 2,5kg de peso es perfecto para envolver objetos grandes con eficacia y resistencia. Con su diseño de \"manguito\", ofrece una gran versatilidad y facilidad de uso, ideal para el embalaje de mercancías voluminosas."
    },
    {
        id: 4006,
        name: "Film stretch negro industrial 5k",
        line: "orpack",
        category: "filmStreetch",
        price: 18400,
        stock: 34,
        routeImage: "Film stretch negro industrial 5k.jpg",
        description: "Este film stretch industrial negro, con un peso de 5kg, proporciona una excelente protección y privacidad para las cargas. Su color negro opaco ofrece discreción, ideal para envíos industriales o de alto valor. La línea Orpack garantiza durabilidad y estiramiento en cada uso."
    },
    {
        id: 9001,
        name: "Paletizadora Manual",
        line: "orpack",
        category: "paletizadoras",
        price: 45000,
        stock: 1,
        routeImage: "Paletizadora Manual.jpg",
        description: "La Paletizadora Manual de Orpack es una herramienta esencial para envolver y asegurar palets de manera rápida y eficiente. Diseñada para facilitar el trabajo de embalaje en entornos industriales, es resistente y fácil de usar, garantizando estabilidad en las cargas durante el transporte."
    }
];

const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 3000);
});

export default getProducts;
