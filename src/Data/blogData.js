import imagenTendencia from '../assets/img/Tendencia(Chimenea).jpeg'
import obraAdentro from "../assets/img/dentro_obra.jpg"
import drywallIntalacion from "../assets/img/instalacion_drywall.jpg"
import molduraCornisa from "../assets/img/moldura_corniza.jpg";
import erroresInstalacion from '../assets/img/errores_instalcion.jpg'

export const blogPosts = [
  {
    id: 1,
    title: "Tendencias en acabados de yeso para interiores modernos",
    description:
      "Descubre cómo los acabados en yeso están transformando los espacios interiores con elegancia y funcionalidad.",
    image: imagenTendencia.src,
    slug: "tendencias-acabados-yeso-interiores",
    date: "March 15, 2025",
    author: "Juan Manuel Silva",
    content: `
      <p>El yeso sigue siendo uno de los materiales más versátiles y elegantes para los acabados interiores. Gracias a su adaptabilidad, permite crear superficies lisas, molduras decorativas y cielos rasos modernos.</p>
      <p>En la actualidad, las tendencias apuntan a diseños minimalistas, líneas limpias y acabados que aportan amplitud y luminosidad a los espacios.</p>
      <p>Además de su estética, el yeso ofrece ventajas como fácil mantenimiento, durabilidad y compatibilidad con diferentes estilos arquitectónicos.</p>
    `,
  },
  {
    id: 2,
    title: "Drywall: una solución rápida y eficiente para remodelaciones",
    description:
      "El sistema drywall se ha convertido en la opción preferida para divisiones y remodelaciones interiores.",
    image: drywallIntalacion.src,
    slug: "drywall-solucion-remodelaciones",
    date: "March 5, 2025",
    author: "Juan Manuel Silva",
    content: `
      <p>El drywall permite construir muros, cielos rasos y divisiones de manera rápida y limpia, reduciendo tiempos de obra.</p>
      <p>Es ideal para proyectos de remodelación, ya que no requiere procesos húmedos y ofrece excelentes resultados en aislamiento térmico y acústico.</p>
      <p>Una correcta instalación garantiza estructuras firmes, duraderas y listas para recibir acabados de pintura o decoración.</p>
    `,
  },
  {
    id: 3,
    title: "Cornisas y molduras: el detalle que marca la diferencia",
    description:
      "Las molduras decorativas elevan el diseño interior y aportan identidad a cada espacio.",
    image: molduraCornisa.src,
    slug: "cornisas-y-molduras-decorativas",
    date: "February 25, 2025",
    author: "Arte & Yesos",
    content: `
      <p>Las cornisas y molduras en yeso permiten personalizar los ambientes, aportando elegancia y carácter.</p>
      <p>Existen diseños clásicos y modernos que se adaptan tanto a viviendas como a espacios comerciales.</p>
      <p>Un trabajo artesanal bien ejecutado asegura acabados precisos, simetría y una integración perfecta con el resto del diseño interior.</p>
    `,
  },
  {
    id: 4,
    title: "Pintura de interiores: cómo lograr un acabado profesional",
    description:
      "La pintura es el complemento perfecto para resaltar los acabados en yeso y drywall.",
    image: obraAdentro.src,
    slug: "pintura-interiores-acabado-profesional",
    date: "February 15, 2025",
    author: "Juan Manuel Silva",
    content: `
      <p>Una buena pintura no solo embellece el espacio, también protege las superficies y prolonga su vida útil.</p>
      <p>La preparación adecuada de muros y cielos rasos es clave para lograr un acabado uniforme y duradero.</p>
      <p>Colores neutros, técnicas venecianas y detalles decorativos permiten crear ambientes sofisticados y acogedores.</p>
    `,
  },
  {
    id: 5,
    title: "Errores comunes en instalaciones de yeso y cómo evitarlos",
    description:
      "Conoce los errores más frecuentes en trabajos de yeso y por qué es clave contar con expertos.",
    image: erroresInstalacion.src,
    slug: "errores-comunes-instalacion-yeso",
    date: "February 5, 2025",
    author: "Arte & Yesos",
    content: `
      <p>Una mala nivelación, juntas mal selladas o materiales de baja calidad pueden afectar el resultado final.</p>
      <p>Estos errores no solo impactan la estética, sino también la durabilidad del trabajo.</p>
      <p>Contar con personal especializado garantiza un acabado limpio, resistente y acorde a las expectativas del cliente.</p>
    `,
  },
];
