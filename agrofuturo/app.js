// AgroFuturo — Huancayo (datos de ejemplo)

// Centro aproximado de Huancayo (Perú)
// Nota: coordenadas aproximadas para demo, no uso catastral.
const HUANCAYO_CENTER = { lat: -12.07, lng: -75.21 };
const COSTO_M2_PEN = 2000;
const USD_TO_PEN = 3.75;

// Contorno aproximado del distrito de Huancayo (OSM, simplificado para la demo)
const HUANCAYO_OUTLINE = [
  [-12.06957, -75.23616], [-12.07562, -75.2355], [-12.07995, -75.23386],
  [-12.08664, -75.23264], [-12.08469, -75.2266], [-12.08285, -75.22198],
  [-12.08202, -75.21734], [-12.0804, -75.21273], [-12.07886, -75.20782],
  [-12.07638, -75.20331], [-12.07438, -75.19869], [-12.07217, -75.19453],
  [-12.07092, -75.1899], [-12.06941, -75.18461], [-12.06742, -75.18045],
  [-12.0643, -75.1763], [-12.06027, -75.17372], [-12.06049, -75.16917],
  [-12.05876, -75.16476], [-12.05729, -75.16032], [-12.05266, -75.15634],
  [-12.05015, -75.1523], [-12.04965, -75.14714], [-12.04875, -75.14247],
  [-12.04811, -75.13725], [-12.04727, -75.13253], [-12.04792, -75.12636],
  [-12.04585, -75.12082], [-12.04721, -75.11623], [-12.05173, -75.11368],
  [-12.05542, -75.11035], [-12.05924, -75.10091], [-12.05815, -75.09641],
  [-12.05712, -75.09169], [-12.05669, -75.08554], [-12.05206, -75.08627],
  [-12.0491, -75.08198], [-12.04441, -75.07824], [-12.04016, -75.07539],
  [-12.03662, -75.07185], [-12.03615, -75.06735], [-12.03112, -75.06744],
  [-12.02654, -75.06538], [-12.02364, -75.06192], [-12.01955, -75.05807],
  [-12.01539, -75.0535], [-12.01205, -75.04812], [-12.00714, -75.04815],
  [-11.99985, -75.04926], [-11.99837, -75.04393], [-11.99925, -75.03609],
  [-12.0019, -75.03206], [-12.00215, -75.02756], [-12.00471, -75.02291],
  [-12.00926, -75.02138], [-12.01204, -75.01729], [-12.0112, -75.01261],
  [-12.01545, -75.0108], [-12.01781, -75.00606], [-12.01873, -75.00138],
  [-12.02113, -74.99724], [-12.01846, -74.99351], [-12.01736, -74.98865],
  [-12.01879, -74.98315], [-12.01974, -74.97852], [-12.02297, -74.97515],
  [-12.02346, -74.97035], [-12.02456, -74.96563], [-12.02312, -74.96009],
  [-12.01968, -74.95675], [-12.01581, -74.95263], [-12.01039, -74.95113],
  [-12.00575, -74.94937], [-12.00012, -74.94812], [-11.99494, -74.94664],
  [-11.98976, -74.95018], [-11.98363, -74.95279], [-11.97845, -74.95408],
  [-11.97476, -74.95855], [-11.97105, -74.96464], [-11.96671, -74.96684],
  [-11.96094, -74.96909], [-11.95896, -74.9734], [-11.95934, -74.97844],
  [-11.95456, -74.97997], [-11.95245, -74.98414], [-11.94779, -74.98378],
  [-11.94426, -74.98774], [-11.9417, -74.99277], [-11.93809, -74.99755],
  [-11.93127, -75.00094], [-11.92602, -75.00481], [-11.92331, -75.00861],
  [-11.92137, -75.01296], [-11.92115, -75.01851], [-11.92272, -75.02347],
  [-11.92227, -75.02848], [-11.92076, -75.03374], [-11.91888, -75.03891],
  [-11.9184, -75.04361], [-11.91414, -75.04817], [-11.91038, -75.05081],
  [-11.90522, -75.0534], [-11.90263, -75.05728], [-11.90143, -75.06195],
  [-11.90257, -75.06928], [-11.90405, -75.07382], [-11.90737, -75.07687],
  [-11.90909, -75.08143], [-11.91127, -75.08585], [-11.91532, -75.08863],
  [-11.91951, -75.09132], [-11.92286, -75.09524], [-11.92769, -75.09475],
  [-11.93347, -75.09303], [-11.93883, -75.09409], [-11.94395, -75.09441],
  [-11.94849, -75.0924], [-11.95188, -75.08821], [-11.95616, -75.08497],
  [-11.96155, -75.08182], [-11.96649, -75.08034], [-11.97132, -75.08233],
  [-11.97559, -75.08553], [-11.97872, -75.08933], [-11.97918, -75.09403],
  [-11.98266, -75.09721], [-11.98464, -75.10158], [-11.98847, -75.10455],
  [-11.99076, -75.10944], [-11.99347, -75.11343], [-11.9962, -75.11708],
  [-12.00116, -75.11843], [-12.00385, -75.12213], [-12.00717, -75.1263],
  [-12.01019, -75.12978], [-12.00977, -75.13486], [-12.00687, -75.13841],
  [-12.00542, -75.14279], [-12.00322, -75.14705], [-12.00438, -75.15224],
  [-12.00471, -75.15769], [-12.00468, -75.16232], [-12.00742, -75.16745],
  [-12.00994, -75.17129], [-12.01176, -75.17589], [-12.01258, -75.18245],
  [-12.01545, -75.18617], [-12.01926, -75.18946], [-12.02262, -75.19362],
  [-12.02624, -75.19651], [-12.03078, -75.19821], [-12.03552, -75.19891],
  [-12.0405, -75.19868], [-12.04543, -75.19928], [-12.0496, -75.20195],
  [-12.05268, -75.20529], [-12.05701, -75.2073], [-12.06085, -75.20991],
  [-12.06491, -75.21217], [-12.06807, -75.21563], [-12.07063, -75.21946],
  [-12.07153, -75.22387], [-12.06993, -75.22887], [-12.06971, -75.23442],
  [-12.06957, -75.23616]
];

// Zonas de ejemplo (rectángulos alrededor del centro con métricas)
// Cada zona tiene: suelo, clima, costos, rendimiento, riesgo, ventanas siembra
const ZONAS = [
  {
    id: 'norte',
    nombre: 'Huancayo Norte',
    color: '#4ade80',
    pol: [
      [-12.045, -75.232],
      [-12.03, -75.242],
      [-12.015, -75.231],
      [-12.004, -75.21],
      [-12.01, -75.196],
      [-12.024, -75.186],
      [-12.04, -75.194],
      [-12.05, -75.212]
    ],
    suelo: { tipo: 'Franco-arenoso', ph: 6.6, om: 3.1, fertilidad: 0.75, drenaje: 0.8 },
    clima: { tmed: 17.8, lluvia: 88, helada: 0.08, viento: 8.2 },
    costoHa: 1600,
    rendimiento: 3.6,
    riesgo: 0.18,
    ventanas: [ { ini: '2025-11-10', fin: '2025-12-10' }, { ini: '2026-02-20', fin: '2026-03-15' } ]
  },
  {
    id: 'centro',
    nombre: 'El Tambo / Centro',
    color: '#60a5fa',
    pol: [
      [-12.06, -75.238],
      [-12.048, -75.228],
      [-12.046, -75.214],
      [-12.05, -75.196],
      [-12.062, -75.185],
      [-12.074, -75.188],
      [-12.08, -75.205],
      [-12.075, -75.226]
    ],
    suelo: { tipo: 'Franco-limoso', ph: 6.8, om: 3.6, fertilidad: 0.82, drenaje: 0.7 },
    clima: { tmed: 17.2, lluvia: 95, helada: 0.06, viento: 7.4 },
    costoHa: 1800,
    rendimiento: 3.9,
    riesgo: 0.15,
    ventanas: [ { ini: '2025-11-20', fin: '2025-12-20' }, { ini: '2026-03-01', fin: '2026-03-25' } ]
  },
  {
    id: 'sur',
    nombre: 'Chilca / Sur',
    color: '#f59e0b',
    pol: [
      [-12.09, -75.236],
      [-12.1, -75.22],
      [-12.104, -75.203],
      [-12.096, -75.185],
      [-12.084, -75.172],
      [-12.074, -75.178],
      [-12.07, -75.202],
      [-12.078, -75.232]
    ],
    suelo: { tipo: 'Franco-arcilloso', ph: 6.1, om: 2.6, fertilidad: 0.65, drenaje: 0.6 },
    clima: { tmed: 16.6, lluvia: 102, helada: 0.12, viento: 6.9 },
    costoHa: 1400,
    rendimiento: 3.2,
    riesgo: 0.22,
    ventanas: [ { ini: '2025-11-05', fin: '2025-11-30' }, { ini: '2026-02-10', fin: '2026-03-05' } ]
  },
  {
    id: 'este',
    nombre: 'Quilcas / Este',
    color: '#a78bfa',
    pol: [
      [-12.05, -75.196],
      [-12.04, -75.182],
      [-12.034, -75.166],
      [-12.025, -75.148],
      [-12.022, -75.124],
      [-12.028, -75.107],
      [-12.042, -75.104],
      [-12.055, -75.128],
      [-12.062, -75.16],
      [-12.058, -75.186]
    ],
    suelo: { tipo: 'Arenoso', ph: 6.3, om: 2.9, fertilidad: 0.58, drenaje: 0.85 },
    clima: { tmed: 18.2, lluvia: 76, helada: 0.1, viento: 9.1 },
    costoHa: 1200,
    rendimiento: 3.0,
    riesgo: 0.25,
    ventanas: [ { ini: '2025-10-25', fin: '2025-11-20' }, { ini: '2026-02-25', fin: '2026-03-20' } ]
  }
];

// Puntos simulados en el mapa con precios como en la referencia visual
const LISTINGS = [
  {
    id: 'l1',
    titulo: 'Lote listo para riego',
    direccion: 'Av. Carriquirry 894 · El Tambo',
    pricePen: 3099,
    priceUsd: 890,
    mantenimiento: 320,
    meta: '62 m² tot. · 2 baños · 2 dorm.',
    detalle: 'Incluye riego por gravedad y almacén liviano',
    photo: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
    badge: 'Super destacado',
    color: '#ff7b3d',
    suelo: { tipo: 'Franco-arenoso', ph: 6.6, om: 3.2, fertilidad: 0.74, drenaje: 0.8 },
    clima: { tmed: 17.5, lluvia: 92, helada: 0.07, viento: 7.2 },
    costoHa: 1700,
    rendimiento: 3.7,
    riesgo: 0.16,
    ventanas: [ { ini: '2025-11-10', fin: '2025-12-05' }, { ini: '2026-02-25', fin: '2026-03-15' } ],
    lat: -12.048,
    lng: -75.27,
    poly: [
      [-12.045, -75.276],
      [-12.043, -75.27],
      [-12.046, -75.264],
      [-12.052, -75.266],
      [-12.053, -75.273]
    ]
  },
  {
    id: 'l2',
    titulo: 'Chacra compacta con riego',
    direccion: 'Jr. Mantaro 211 · Chilca',
    pricePen: 2400,
    priceUsd: 710,
    mantenimiento: 250,
    meta: '48 m² tot. · 1 baño · 1 dorm.',
    detalle: 'Cercano a canal principal y vía afirmada',
    photo: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    badge: 'Destacado',
    color: '#f97316',
    suelo: { tipo: 'Franco-limoso', ph: 6.8, om: 3.6, fertilidad: 0.82, drenaje: 0.72 },
    clima: { tmed: 17.1, lluvia: 98, helada: 0.06, viento: 6.8 },
    costoHa: 1800,
    rendimiento: 3.9,
    riesgo: 0.14,
    ventanas: [ { ini: '2025-11-20', fin: '2025-12-18' }, { ini: '2026-03-05', fin: '2026-03-28' } ],
    lat: -12.092,
    lng: -75.245,
    poly: [
      [-12.089, -75.251],
      [-12.087, -75.243],
      [-12.091, -75.239],
      [-12.096, -75.242],
      [-12.095, -75.249]
    ]
  },
  {
    id: 'l3',
    titulo: 'Punto con vista a valle',
    direccion: 'Pje. Real 180 · San Jerónimo',
    pricePen: 1800,
    priceUsd: 520,
    mantenimiento: 180,
    meta: '39 m² tot. · 1 baño',
    detalle: 'Altitud media, buena exposición solar',
    photo: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    badge: 'Nuevo',
    color: '#fb923c',
    suelo: { tipo: 'Franco-arcilloso', ph: 6.2, om: 2.7, fertilidad: 0.64, drenaje: 0.58 },
    clima: { tmed: 16.4, lluvia: 104, helada: 0.13, viento: 6.2 },
    costoHa: 1400,
    rendimiento: 3.1,
    riesgo: 0.22,
    ventanas: [ { ini: '2025-11-02', fin: '2025-11-28' }, { ini: '2026-02-12', fin: '2026-03-06' } ],
    lat: -12.11,
    lng: -75.225,
    poly: [
      [-12.106, -75.231],
      [-12.104, -75.223],
      [-12.109, -75.218],
      [-12.114, -75.22],
      [-12.115, -75.227]
    ]
  },
  {
    id: 'l4',
    titulo: 'Terreno plano y accesible',
    direccion: 'Colectora Sur 503 · Chilca',
    pricePen: 2800,
    priceUsd: 790,
    mantenimiento: 290,
    meta: '55 m² tot. · 1 baño · 1 estac.',
    detalle: 'Junto a carretera y punto de energía trifásica',
    photo: 'https://images.unsplash.com/photo-1500259571355-332da5cb07e0?auto=format&fit=crop&w=900&q=80',
    badge: 'Visitas hoy',
    color: '#fdba74',
    suelo: { tipo: 'Arenoso', ph: 6.4, om: 2.5, fertilidad: 0.56, drenaje: 0.86 },
    clima: { tmed: 18.1, lluvia: 80, helada: 0.1, viento: 8.5 },
    costoHa: 1250,
    rendimiento: 2.9,
    riesgo: 0.27,
    ventanas: [ { ini: '2025-10-25', fin: '2025-11-18' }, { ini: '2026-02-22', fin: '2026-03-18' } ],
    lat: -12.122,
    lng: -75.205,
    poly: [
      [-12.118, -75.211],
      [-12.117, -75.204],
      [-12.12, -75.199],
      [-12.125, -75.2],
      [-12.127, -75.206],
      [-12.123, -75.211]
    ]
  },
  {
    id: 'l5',
    titulo: 'Ingreso a valle lateral',
    direccion: 'Av. Mariscal 350 · Saños Chico',
    pricePen: 3200,
    priceUsd: 910,
    mantenimiento: 310,
    meta: '64 m² tot. · 2 baños · 2 dorm.',
    detalle: 'Riego por goteo instalado y drenaje natural',
    photo: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    badge: 'Luz trifásica',
    color: '#ff7b3d',
    suelo: { tipo: 'Franco-limoso', ph: 6.7, om: 3.4, fertilidad: 0.78, drenaje: 0.75 },
    clima: { tmed: 17.6, lluvia: 90, helada: 0.09, viento: 7.1 },
    costoHa: 1650,
    rendimiento: 3.5,
    riesgo: 0.18,
    ventanas: [ { ini: '2025-11-08', fin: '2025-12-02' }, { ini: '2026-02-26', fin: '2026-03-20' } ],
    lat: -12.03,
    lng: -75.255,
    poly: [
      [-12.027, -75.261],
      [-12.024, -75.253],
      [-12.028, -75.248],
      [-12.033, -75.25],
      [-12.034, -75.257]
    ]
  },
  {
    id: 'l6',
    titulo: 'Franja junto a canal Mantaro',
    direccion: 'Psje. Mantaro 120 · Huayucachi',
    pricePen: 2100,
    priceUsd: 640,
    mantenimiento: 240,
    meta: '50 m² tot. · 1 baño',
    detalle: 'Ideal para forraje y ensilado rápido',
    photo: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    badge: 'En verde',
    color: '#fb923c',
    suelo: { tipo: 'Franco', ph: 6.5, om: 3.0, fertilidad: 0.7, drenaje: 0.65 },
    clima: { tmed: 17.0, lluvia: 96, helada: 0.09, viento: 6.6 },
    costoHa: 1500,
    rendimiento: 3.2,
    riesgo: 0.2,
    ventanas: [ { ini: '2025-11-05', fin: '2025-12-01' }, { ini: '2026-02-18', fin: '2026-03-12' } ],
    lat: -12.125,
    lng: -75.175,
    poly: [
      [-12.121, -75.18],
      [-12.12, -75.172],
      [-12.124, -75.168],
      [-12.128, -75.17],
      [-12.129, -75.177]
    ]
  },
  {
    id: 'l7',
    titulo: 'Microparcela a prueba',
    direccion: 'Av. Ferrocarril 955 · Huancayo',
    pricePen: 1900,
    priceUsd: 570,
    mantenimiento: 190,
    meta: '44 m² tot. · 1 baño',
    detalle: 'Listo para piloto de hortalizas en invernadero',
    photo: 'https://images.unsplash.com/photo-1532455935009-21f9346c8dfb?auto=format&fit=crop&w=900&q=80',
    badge: 'Piloto',
    color: '#f97316',
    suelo: { tipo: 'Franco-arenoso', ph: 6.3, om: 2.8, fertilidad: 0.6, drenaje: 0.74 },
    clima: { tmed: 18.3, lluvia: 82, helada: 0.11, viento: 8.8 },
    costoHa: 1350,
    rendimiento: 3.0,
    riesgo: 0.24,
    ventanas: [ { ini: '2025-10-30', fin: '2025-11-25' }, { ini: '2026-02-20', fin: '2026-03-10' } ],
    lat: -12.07,
    lng: -75.27,
    poly: [
      [-12.067, -75.276],
      [-12.064, -75.269],
      [-12.069, -75.264],
      [-12.073, -75.267],
      [-12.074, -75.274]
    ]
  },
  {
    id: 'l8',
    titulo: 'Área alta con vista',
    direccion: 'Sector Palián · Este',
    pricePen: 1500,
    priceUsd: 450,
    mantenimiento: 160,
    meta: '36 m² tot.',
    detalle: 'Suelos livianos, buena aireación y acceso a agua',
    photo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
    badge: 'Vista valle',
    color: '#fb923c',
    suelo: { tipo: 'Franco-arenoso', ph: 6.5, om: 3.1, fertilidad: 0.68, drenaje: 0.82 },
    clima: { tmed: 18.0, lluvia: 78, helada: 0.12, viento: 8.9 },
    costoHa: 1300,
    rendimiento: 2.8,
    riesgo: 0.26,
    ventanas: [ { ini: '2025-10-22', fin: '2025-11-15' }, { ini: '2026-02-24', fin: '2026-03-15' } ],
    lat: -12.035,
    lng: -75.155,
    poly: [
      [-12.032, -75.161],
      [-12.031, -75.153],
      [-12.035, -75.149],
      [-12.039, -75.151],
      [-12.04, -75.157]
    ]
  },
  {
    id: 'l9',
    titulo: 'Línea de producción cercana',
    direccion: 'Urb. San Carlos · Centro',
    pricePen: 3600,
    priceUsd: 990,
    mantenimiento: 340,
    meta: '70 m² tot. · 2 baños · 2 dorm.',
    detalle: 'Próximo a planta láctea y nodo logístico',
    photo: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    badge: 'Cercano a planta',
    color: '#ff7b3d',
    suelo: { tipo: 'Franco-limoso', ph: 6.9, om: 3.7, fertilidad: 0.83, drenaje: 0.71 },
    clima: { tmed: 17.3, lluvia: 94, helada: 0.08, viento: 7.0 },
    costoHa: 1750,
    rendimiento: 3.6,
    riesgo: 0.17,
    ventanas: [ { ini: '2025-11-12', fin: '2025-12-08' }, { ini: '2026-02-28', fin: '2026-03-22' } ],
    lat: -12.055,
    lng: -75.145,
    poly: [
      [-12.052, -75.15],
      [-12.05, -75.143],
      [-12.054, -75.139],
      [-12.059, -75.141],
      [-12.06, -75.147]
    ]
  },
  {
    id: 'l10',
    titulo: 'Corredor productivo sur',
    direccion: 'Av. Leoncio Prado · Chilca',
    pricePen: 2700,
    priceUsd: 780,
    mantenimiento: 260,
    meta: '52 m² tot. · 1 baño',
    detalle: 'Suministro de agua 24/7 y cercado perimétrico',
    photo: 'https://images.unsplash.com/photo-1498550744921-75f79806b8a7?auto=format&fit=crop&w=900&q=80',
    badge: 'Cercado',
    color: '#f97316',
    suelo: { tipo: 'Franco', ph: 6.6, om: 3.0, fertilidad: 0.69, drenaje: 0.7 },
    clima: { tmed: 16.8, lluvia: 101, helada: 0.1, viento: 6.4 },
    costoHa: 1550,
    rendimiento: 3.3,
    riesgo: 0.21,
    ventanas: [ { ini: '2025-11-04', fin: '2025-11-30' }, { ini: '2026-02-15', fin: '2026-03-08' } ],
    lat: -12.115,
    lng: -75.195,
    poly: [
      [-12.111, -75.2],
      [-12.11, -75.192],
      [-12.114, -75.188],
      [-12.119, -75.19],
      [-12.12, -75.197]
    ]
  }
];

function toLatLngPath(poly){
  return poly.map(([lat, lng]) => ({ lat, lng }));
}

// Cálculo de aptitud (0..1) combinando suelo y clima
function soilIndex(z){
  return clamp((z.suelo.fertilidad * 0.6) + (z.suelo.om/4 * 0.3) + (z.suelo.drenaje * 0.1), 0, 1);
}

function climateIndex(z){
  return clamp(1 - Math.abs(z.clima.tmed - 17.5)/8, 0, 1) * 0.5
       + clamp((100 - Math.abs(90 - z.clima.lluvia))/100, 0, 1) * 0.3
       + clamp(1 - z.clima.helada, 0, 1) * 0.2;
}

function aptitudZona(z, objetivo='equilibrado'){
  const sueloScore = soilIndex(z);
  const climaScore = climateIndex(z);
  const riesgo = z.riesgo; // menor es mejor

  let wSo = 0.5, wCl = 0.4, wRi = 0.1;
  if (objetivo === 'rendimiento') { wSo = 0.55; wCl = 0.4; wRi = 0.05; }
  if (objetivo === 'riesgo') { wSo = 0.35; wCl = 0.35; wRi = 0.3; }

  return clamp(wSo*sueloScore + wCl*climaScore + wRi*(1-riesgo), 0, 1);
}

function clamp(v, min, max){ return Math.max(min, Math.min(max, v)); }

function aptitudListing(l, objetivo='equilibrado'){
  const sueloScore = soilIndex(l);
  const climaScore = climateIndex(l);
  const riesgo = l.riesgo ?? 0.2;
  let wSo = 0.5, wCl = 0.4, wRi = 0.1;
  if (objetivo === 'rendimiento') { wSo = 0.55; wCl = 0.4; wRi = 0.05; }
  if (objetivo === 'riesgo') { wSo = 0.35; wCl = 0.35; wRi = 0.3; }
  return clamp(wSo*sueloScore + wCl*climaScore + wRi*(1-riesgo), 0, 1);
}

// Util: punto dentro de polígono (ray casting simple)
function pointInPoly(pt, poly){
  let inside = false;
  for (let i=0, j=poly.length-1; i<poly.length; j=i++){
    const xi = poly[i][1], yi = poly[i][0];
    const xj = poly[j][1], yj = poly[j][0];
    const intersect = ((yi > pt.lat) !== (yj > pt.lat)) &&
      (pt.lng < (xj - xi) * (pt.lat - yi) / (yj - yi + 1e-9) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

// Mapa principal (Google Maps)
let map;
let zonaLayers = {};
let currentLayerMode = 'aptitud';
let routeLayerGroup = [];
let huancayoOutlineLayer;
let huancayoHighlightLayer;
let outlineBounds;
let infoWindow;
let routeInfoWindow;
let directionsService;
let routeRequestToken = 0;
let lastParams = { presupuesto: 5000, objetivo: 'equilibrado' };
let listingMarkers = [];
let listingPolygons = [];
let selectedListingId = LISTINGS[0]?.id || null;
let visibleListings = LISTINGS.slice();

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: HUANCAYO_CENTER.lat, lng: HUANCAYO_CENTER.lng },
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor: '#0b0f14'
  });

  infoWindow = new google.maps.InfoWindow();
  routeInfoWindow = new google.maps.InfoWindow();
  directionsService = new google.maps.DirectionsService();
  routeLayerGroup = [];

  const outlinePath = toLatLngPath(HUANCAYO_OUTLINE);
  huancayoOutlineLayer = new google.maps.Polyline({
    path: outlinePath,
    strokeColor: '#60a5fa',
    strokeOpacity: 1,
    strokeWeight: 3,
    map: null,
    visible: false,
    zIndex: 3
  });
  outlineBounds = new google.maps.LatLngBounds();
  outlinePath.forEach(pt => outlineBounds.extend(pt));
  const overallBounds = new google.maps.LatLngBounds();
  outlinePath.forEach(pt => overallBounds.extend(pt));
  LISTINGS.forEach(l => overallBounds.extend({ lat: l.lat, lng: l.lng }));
  map.fitBounds(overallBounds, { top: 40, bottom: 40, left: 40, right: 40 });

  // Sin zonas generales: solo polígonos de terrenos

  // Leyenda mínima sin zonas
  buildLegend();
  applyListingFilter();
}

function focusZona(id){
  const z = ZONAS.find(x => x.id === id);
  const poly = zonaLayers[id];
  if (!z || !poly) return;
  const bounds = new google.maps.LatLngBounds();
  poly.getPath().forEach(latLng => bounds.extend(latLng));
  map.fitBounds(bounds, { top: 30, bottom: 30, left: 30, right: 30 });
  const apt = aptitudZona(z, getObjetivo());
  const popup = `
    <b>${z.nombre}</b><br/>
    Suelo: ${z.suelo.tipo} · pH ${z.suelo.ph.toFixed(1)} · MO ${z.suelo.om.toFixed(1)}%<br/>
    Clima: Tmed ${z.clima.tmed.toFixed(1)}°C · Lluvia ${z.clima.lluvia} mm · Helada ${(z.clima.helada*100).toFixed(0)}%<br/>
    Aptitud estimada: ${(apt*100).toFixed(0)}%
  `;
  const center = centroid(z.pol);
  infoWindow.setContent(popup);
  infoWindow.setPosition(center);
  infoWindow.open({ map });
}

function updateLayerColors(){
  if (!zonaLayers || !Object.keys(zonaLayers).length) {
    buildLegend();
    return;
  }
  const objetivo = getObjetivo();
  const mode = currentLayerMode;
  ZONAS.forEach(z => {
    let v = 0.5;
    if (mode === 'aptitud') v = aptitudZona(z, objetivo);
    if (mode === 'suelo') v = z.suelo.fertilidad;
    if (mode === 'clima') v = clamp(1 - z.clima.helada, 0, 1);
    const color = colorScale(v);
    if (zonaLayers[z.id]) {
      zonaLayers[z.id].setOptions({ fillColor: color, strokeColor: shade(color, -40) });
    }
  });
  buildLegend();
}

function getObjetivo(){
  return document.getElementById('objetivo').value;
}

// Leyenda dinámica según capa
function buildLegend(){
  if (!document.getElementById('legendScale')) return;
  const legendScale = document.getElementById('legendScale');
  legendScale.innerHTML = '';
  const steps = [0, .25, .5, .75, 1].map(colorScale);
  steps.forEach(c => {
    const el = document.createElement('div');
    el.className = 'step';
    el.style.background = c;
    legendScale.appendChild(el);
  });
  const label = document.createElement('div');
  label.className = 'label';
  label.innerHTML = '<span>Bajo</span><span>Alto</span>';
  legendScale.appendChild(label);
}

// ---------- Marcadores con precios ----------
function formatPenLabel(val){
  if (!val && val !== 0) return 'S/ —';
  if (val >= 9500) return `S/ ${(val/1000).toFixed(0)}K`;
  if (val >= 1000) return `S/ ${(val/1000).toFixed(1)}K`;
  return `S/ ${val.toLocaleString()}`;
}

function budgetUsd(){
  const raw = parseFloat(document.getElementById('presupuesto')?.value || '');
  if (!Number.isFinite(raw)) return Infinity;
  // Heurística: valores > 1200 se asumen S/ y se convierten a USD
  return raw > 1200 ? raw / USD_TO_PEN : raw;
}

function filterListingsByBudget(budget){
  if (!Number.isFinite(budget)) return LISTINGS.slice();
  return LISTINGS.filter(l => l.priceUsd <= budget);
}

function listingPolyPath(listing){
  if (listing.poly) return toLatLngPath(listing.poly);
  const deltaLat = 0.0025 + Math.random()*0.0015;
  const deltaLng = 0.003 + Math.random()*0.0015;
  const { lat, lng } = listing;
  return toLatLngPath([
    [lat + deltaLat, lng - deltaLng],
    [lat + deltaLat*0.4, lng + deltaLng*0.8],
    [lat - deltaLat*0.6, lng + deltaLng*0.6],
    [lat - deltaLat, lng - deltaLng*0.5],
    [lat, lng - deltaLng*1.1]
  ]);
}

function buildPriceMarkerIcon(listing, active=false){
  const label = formatPenLabel(listing.pricePen);
  const base = listing.color || '#f97316';
  const color = active ? '#ff6b3d' : base;
  const darker = shade(color, -35);
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="112" height="76" viewBox="0 0 112 76">
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#000" flood-opacity="0.35"/>
      </filter>
    </defs>
    <g filter="url(#shadow)">
      <path d="M16 10 C6 10 2 17 2 24 L2 46 C2 53 6 60 16 60 L96 60 C106 60 110 53 110 46 L110 24 C110 17 106 10 96 10 Z" fill="${color}" />
      <path d="M54 60 L62 72 L46 60 Z" fill="${color}" />
      <rect x="8" y="16" rx="9" ry="9" width="96" height="32" fill="${shade(color, 25)}" opacity="0.16"/>
      <text x="56" y="35" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="800" fill="#0a1f17">${label}</text>
      <text x="56" y="51" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="600" fill="${darker}">${listing.badge || 'Disponible'}</text>
    </g>
  </svg>`;
  return {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
    anchor: new google.maps.Point(56, 72),
    scaledSize: new google.maps.Size(112, 76)
  };
}

function drawListingMarkers(list = visibleListings){
  listingMarkers.forEach(m => m.marker.setMap(null));
  listingMarkers = list.map((listing, idx) => {
    const marker = new google.maps.Marker({
      position: { lat: listing.lat, lng: listing.lng },
      map,
      icon: buildPriceMarkerIcon(listing, selectedListingId === listing.id),
      zIndex: selectedListingId === listing.id ? 60 : 30 + idx
    });
    marker.addListener('click', () => selectListing(listing.id, true));
    return { id: listing.id, marker };
  });
}

function refreshListingMarkers(){
  listingMarkers.forEach(({ id, marker }) => {
    const listing = visibleListings.find(l => l.id === id);
    if (!listing) return;
    marker.setIcon(buildPriceMarkerIcon(listing, id === selectedListingId));
    marker.setZIndex(id === selectedListingId ? 60 : 30);
  });
}

function drawListingPolygons(list = visibleListings){
  listingPolygons.forEach(p => p.poly.setMap(null));
  listingPolygons = list.map(listing => {
    const poly = new google.maps.Polygon({
      paths: listingPolyPath(listing),
      strokeColor: shade(listing.color, -40),
      strokeOpacity: 0.9,
      strokeWeight: listing.id === selectedListingId ? 2.4 : 1.2,
      fillColor: listing.color,
      fillOpacity: listing.id === selectedListingId ? 0.22 : 0.12,
      map,
      zIndex: listing.id === selectedListingId ? 25 : 15
    });
    poly.addListener('click', () => selectListing(listing.id, true));
    return { id: listing.id, poly };
  });
}

function refreshListingPolygons(){
  listingPolygons.forEach(({ id, poly }) => {
    const listing = visibleListings.find(l => l.id === id);
    if (!listing) return;
    poly.setOptions({
      strokeWeight: id === selectedListingId ? 2.4 : 1.2,
      fillOpacity: id === selectedListingId ? 0.22 : 0.12,
      fillColor: listing.color,
      strokeColor: shade(listing.color, -40)
    });
  });
}

function selectListing(id, center=false){
  const listing = visibleListings.find(l => l.id === id);
  if (!listing) return;
  selectedListingId = id;
  updateListingCard(listing);
  refreshListingMarkers();
  refreshListingPolygons();
  renderListingPills(visibleListings);
  if (center && map) map.panTo({ lat: listing.lat, lng: listing.lng });
}

function updateListingCard(listing){
  setText('listingTitle', listing.titulo);
  setText('listingAddress', listing.direccion);
  setText('listingPrice', `${formatPenLabel(listing.pricePen)} · USD ${listing.priceUsd.toLocaleString()}`);
  setText('listingMaintenance', listing.mantenimiento ? `S/ ${listing.mantenimiento} mantenimiento` : 'Mantenimiento incluido');
  setText('listingMeta', listing.meta || '');
  const su = listing.suelo;
  const cl = listing.clima;
  const resumenSuelo = su ? `${su.tipo} · pH ${su.ph.toFixed(1)} · MO ${su.om.toFixed(1)}% · Drenaje ${(su.drenaje*100|0)}%` : '';
  const resumenClima = cl ? `Tmed ${cl.tmed.toFixed(1)}°C · Lluvia ${cl.lluvia} mm · Helada ${(cl.helada*100|0)}%` : '';
  setText('listingDetail', `${listing.detalle || ''}${resumenSuelo ? '\n' + resumenSuelo : ''}${resumenClima ? '\n' + resumenClima : ''}`);
  const badge = document.getElementById('listingBadge');
  if (badge) {
    badge.textContent = listing.badge || 'Disponible';
    badge.hidden = !listing.badge;
  }
  const img = document.getElementById('listingThumb');
  if (img && listing.photo) {
    img.src = listing.photo;
    img.alt = listing.titulo;
  }
}

function renderListingPills(list = visibleListings){
  const wrap = document.getElementById('listingPills');
  if (!wrap) return;
  wrap.innerHTML = '';
  const count = document.getElementById('listingCount');
  const counter = document.getElementById('mapCounter');
  if (count) count.textContent = list.length;
  if (counter) counter.textContent = list.length ? `${list.length} puntos de ejemplo · toca un precio para ver detalle` : 'Sin coincidencias para este presupuesto';
  list.slice(0, 6).forEach(listing => {
    const btn = document.createElement('button');
    btn.className = `pill small ${listing.id === selectedListingId ? 'active' : ''}`;
    btn.textContent = `${formatPenLabel(listing.pricePen)} · ${listing.direccion.split('·')[0].trim()}`;
    btn.addEventListener('click', () => selectListing(listing.id, true));
    wrap.appendChild(btn);
  });
}

function clearListingCard(){
  setText('listingPrice', 'Sin resultados para este presupuesto');
  setText('listingMaintenance', '');
  setText('listingTitle', 'Ajusta el presupuesto o limpia filtros');
  setText('listingAddress', '');
  setText('listingMeta', '');
  setText('listingDetail', '');
  const img = document.getElementById('listingThumb');
  if (img) { img.src = ''; img.alt = 'Sin resultados'; }
  const badge = document.getElementById('listingBadge');
  if (badge) badge.hidden = true;
}

// Color scale (verde-amarillo-naranja-rojo)
function colorScale(t){
  // interpolate 0..1 through array
  const stops = [
    [0,   [56, 189, 248]],   // sky-400
    [0.33,[74, 222, 128]],   // green-400
    [0.66,[245, 158, 11]],   // amber-500
    [1,   [239, 68, 68]]     // red-500
  ];
  const i = stops.findIndex(s => t <= s[0]);
  if (i <= 0) return rgb(stops[0][1]);
  const [t2, c2] = stops[i];
  const [t1, c1] = stops[i-1];
  const f = (t - t1) / (t2 - t1);
  const c = [0,1,2].map(k => Math.round(c1[k] + f*(c2[k]-c1[k])));
  return rgb(c);
}
function rgb([r,g,b]){ return `rgb(${r}, ${g}, ${b})`; }
function shade(hex, amt){
  // accepts #rrggbb or rgb(), quick and dirty shade
  if (hex.startsWith('rgb')){
    const m = hex.match(/rgb\((\d+),\s?(\d+),\s?(\d+)\)/);
    if (!m) return hex; const [r,g,b] = m.slice(1).map(Number);
    return `rgb(${r+amt}, ${g+amt}, ${b+amt})`;
  }
  let c = hex.replace('#','');
  const num = parseInt(c, 16);
  let r = (num >> 16) + amt; let g = ((num >> 8) & 0x00FF) + amt; let b = (num & 0x0000FF) + amt;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + (b | (g << 8) | (r << 16)).toString(16).padStart(6, '0');
}

// Recomendación por presupuesto
function recomendar(presupuesto, objetivo){
  const pool = filterListingsByBudget(presupuesto);
  if (!pool.length) return null;
  const evaluadas = pool.map(l => {
    const apt = aptitudListing(l, objetivo);
    const has = Math.max(0.3, Math.floor((presupuesto / l.costoHa) * 10) / 10);
    const ingresoPorHa = l.rendimiento * 800;
    const margenPorHa = ingresoPorHa - l.costoHa * 0.6;
    const roi = clamp((margenPorHa / Math.max(1,l.costoHa)), -0.5, 1.5);
    const score = apt * (1 - (l.riesgo ?? 0.2)*0.6) * (1 + roi*0.4);
    const mejorVentana = l.ventanas?.[0];
    return { l, apt, has, roi, score, mejorVentana };
  });
  evaluadas.sort((a,b) => b.score - a.score);
  return evaluadas[0];
}

// Gráficos con Chart.js
let chartSuelo, chartClima;
function renderCharts(){
  const ctx1 = document.getElementById('chartSuelo');
  const ctx2 = document.getElementById('chartClima');
  const baseData = (visibleListings.length ? visibleListings : LISTINGS).slice(0,6);
  const labels = baseData.map(z => z.titulo);
  const colores = baseData.map(z => z.color);

  chartSuelo?.destroy();
  chartClima?.destroy();

  if (typeof Chart === 'undefined') {
    renderChartsFallback();
    return;
  }

  chartSuelo = new Chart(ctx1, {
    type: 'radar',
    data: {
      labels: ['Fertilidad','MO','Drenaje','pH óptimo'],
      datasets: baseData.map((z,i) => ({
        label: z.titulo,
        data: [z.suelo.fertilidad, z.suelo.om/4, z.suelo.drenaje, phScore(z.suelo.ph)],
        borderColor: colores[i], backgroundColor: hexOrRgbToRgba(colores[i], 0.2), pointBackgroundColor: colores[i]
      }))
    },
    options: { responsive: true, maintainAspectRatio: false, scales: { r: { angleLines: { color: '#223043' }, grid: { color: '#223043' }, pointLabels: { color: '#98a3b4' }, ticks: { display:false } } }, plugins: { legend: { labels: { color: '#e9eef6' } } } }
  });

  chartClima = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Lluvia (mm)', data: baseData.map(z => z.clima.lluvia), backgroundColor: '#60a5fa' },
        { label: 'Tmed (°C)', data: baseData.map(z => z.clima.tmed), backgroundColor: '#f59e0b' },
        { label: 'Riesgo helada (%)', data: baseData.map(z => Math.round(z.clima.helada*100)), backgroundColor: '#ef4444' }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false,
      scales: { x: { ticks: { color:'#98a3b4' }, grid: { color:'#223043' } }, y: { ticks: { color:'#98a3b4' }, grid: { color:'#223043' } } },
      plugins: { legend: { labels: { color:'#e9eef6' } } }
    }
  });

  // leyenda chips
  const legend = document.getElementById('zonaLegend');
  legend.innerHTML = '';
  baseData.forEach(z => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.innerHTML = `<span class="dot" style="background:${z.color}"></span>${z.titulo}`;
    legend.appendChild(chip);
  });

  // Asegurar que los canvas sean visibles en layout
  ctx1.parentElement.style.display = '';
  ctx2.parentElement.style.display = '';
}

// Fallback de métricas sin Chart.js (barras simples HTML/CSS)
function renderChartsFallback(){
  const grid = document.querySelector('.charts-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const soilCard = document.createElement('div');
  soilCard.className = 'chart-card';
  soilCard.innerHTML = `<div class="card-title">Suelo</div>`;
  baseData.forEach(z => {
    const idx = Math.round(soilIndex(z) * 100);
    const row = document.createElement('div');
    row.className = 'hbar';
    row.innerHTML = `
      <div class="label">${z.titulo}</div>
      <div class="track"><div class="fill" style="width:${idx}%;background:${z.color}"></div></div>
      <div class="value">${idx}%</div>
    `;
    const sub = document.createElement('div');
    sub.className = 'chart-subtext muted';
    sub.textContent = `Tipo ${z.suelo.tipo} · pH ${z.suelo.ph.toFixed(1)} · MO ${z.suelo.om.toFixed(1)}% · Drenaje ${(z.suelo.drenaje*100|0)}%`;
    soilCard.appendChild(row);
    soilCard.appendChild(sub);
  });

  const climaCard = document.createElement('div');
  climaCard.className = 'chart-card';
  climaCard.innerHTML = `<div class="card-title">Clima</div>`;
  baseData.forEach(z => {
    const idx = Math.round(climateIndex(z) * 100);
    const row = document.createElement('div');
    row.className = 'hbar';
    row.innerHTML = `
      <div class="label">${z.titulo}</div>
      <div class="track"><div class="fill" style="width:${idx}%;background:${z.color}"></div></div>
      <div class="value">${idx}%</div>
    `;
    const sub = document.createElement('div');
    sub.className = 'chart-subtext muted';
    sub.textContent = `Lluvia ${z.clima.lluvia} mm · Tmed ${z.clima.tmed.toFixed(1)}°C · Helada ${(z.clima.helada*100|0)}%`;
    climaCard.appendChild(row);
    climaCard.appendChild(sub);
  });

  grid.appendChild(soilCard);
  grid.appendChild(climaCard);
}

function phScore(ph){
  // óptimo 6.3..7.0
  const d = Math.abs(6.65 - ph);
  return clamp(1 - d/2, 0, 1);
}

function hexOrRgbToRgba(c, a){
  if (c.startsWith('rgb')) return c.replace('rgb(', 'rgba(').replace(')', `, ${a})`);
  const num = parseInt(c.replace('#',''), 16);
  const r = num >> 16; const g = (num>>8) & 255; const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// UI handlers
function initUI(){
  document.getElementById('calcularBtn').addEventListener('click', async () => {
    const presupuesto = parseFloat(document.getElementById('presupuesto').value || '0');
    const objetivo = getObjetivo();
    lastParams = { presupuesto, objetivo };
    const res = recomendar(presupuesto, objetivo);
    if (!res) {
      clearListingCard();
      return;
    }
    const { l, has, roi, mejorVentana } = res;
    document.getElementById('recoResumen').hidden = true;
    document.getElementById('recoGrid').hidden = false;
    setText('kpiZona', l.titulo);
    setText('kpiHas', `${has.toFixed(1)} ha`);
    setText('kpiCostoHa', `$${l.costoHa.toLocaleString()}`);
    setText('kpiRoi', `${Math.round(roi*100)}%`);
    if (mejorVentana) setText('kpiVentana', `${fmtDate(mejorVentana.ini)} – ${fmtDate(mejorVentana.fin)}`);
    selectListing(l.id, true);

    // Trazar ruta entre terrenos visibles recomendados si está activado
    if (document.getElementById('toggleRoutes').checked) {
      await drawRouteForVisibleListings(visibleListings);
    } else {
      clearRoutes();
    }
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('presupuesto').value = 5000;
    document.querySelector('input[name=capa][value=aptitud]').checked = true;
    currentLayerMode = 'aptitud';
    updateLayerColors();
    document.getElementById('recoGrid').hidden = true;
    document.getElementById('recoResumen').hidden = false;
    if (outlineBounds) {
      const overallBounds = new google.maps.LatLngBounds(outlineBounds);
      LISTINGS.forEach(l => overallBounds.extend({ lat: l.lat, lng: l.lng }));
      map.fitBounds(overallBounds, { top: 40, bottom: 40, left: 40, right: 40 });
    } else {
      map.setCenter({ lat: HUANCAYO_CENTER.lat, lng: HUANCAYO_CENTER.lng });
      map.setZoom(12);
    }
    // Rutas
    document.getElementById('toggleRoutes').checked = false;
    clearRoutes();
  });

  document.querySelectorAll('input[name=capa]').forEach(r => {
    r.addEventListener('change', (e) => {
      currentLayerMode = e.target.value;
      // capas desactivadas visualmente; solo sincroniza UI
      document.querySelectorAll('.layer-chip').forEach(el => el.classList.toggle('active', el.dataset.layer === currentLayerMode));
      updateLayerColors();
    });
  });
  document.querySelectorAll('.layer-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.layer;
      if (!mode) return;
      currentLayerMode = mode;
      document.querySelectorAll('input[name=capa]').forEach(r => r.checked = r.value === mode);
      document.querySelectorAll('.layer-chip').forEach(el => el.classList.toggle('active', el === btn));
      updateLayerColors();
    });
  });

  document.getElementById('objetivo').addEventListener('change', updateLayerColors);

  document.getElementById('toggleRoutes').addEventListener('change', async (e) => {
    const presupuesto = parseFloat(document.getElementById('presupuesto').value || '0');
    const objetivo = getObjetivo();
    lastParams = { presupuesto, objetivo };
    if (e.target.checked) {
      await drawRouteForVisibleListings();
    } else {
      clearRoutes();
    }
  });

  // Si el usuario cambia presupuesto/objetivo con rutas activas, refrescar rutas
  document.getElementById('presupuesto').addEventListener('input', async () => {
    applyListingFilter();
    if (document.getElementById('toggleRoutes').checked) {
      lastParams.presupuesto = parseFloat(document.getElementById('presupuesto').value || '0');
      await drawSuggestedRoutes(lastParams.presupuesto, getObjetivo());
    }
  });
  document.getElementById('objetivo').addEventListener('change', async () => {
    applyListingFilter();
    if (document.getElementById('toggleRoutes').checked) {
      lastParams.objetivo = getObjetivo();
      await drawSuggestedRoutes(lastParams.presupuesto, lastParams.objetivo);
    }
  });
}

function highlightZona(id){
  Object.entries(zonaLayers).forEach(([k, poly]) => {
    poly.setOptions({
      strokeWeight: k === id ? 3 : 1.4,
      strokeOpacity: k === id ? 1 : 0.9,
      zIndex: k === id ? 3 : 2
    });
  });
  focusZona(id);
}

function setText(id, val){ document.getElementById(id).textContent = val; }
function fmtDate(iso){
  const d = new Date(iso);
  return d.toLocaleDateString('es-PE', { day:'2-digit', month:'short' });
}

// Filtrar y dibujar listados según presupuesto
function applyListingFilter(){
  const budget = budgetUsd();
  visibleListings = filterListingsByBudget(budget);
  if (!visibleListings.find(l => l.id === selectedListingId)) {
    selectedListingId = visibleListings[0]?.id || null;
  }
  drawListingPolygons(visibleListings);
  drawListingMarkers(visibleListings);
  renderListingPills(visibleListings);
  const routesToggle = document.getElementById('toggleRoutes');
  const routesOn = routesToggle?.checked;
  if (routesOn && visibleListings.length >= 2) {
    drawRouteForVisibleListings(visibleListings);
  } else {
    clearRoutes();
  }
  if (selectedListingId) {
    selectListing(selectedListingId, false);
  } else {
    clearListingCard();
  }
}

async function drawRouteForVisibleListings(list = visibleListings){
  clearRoutes();
  const requestId = ++routeRequestToken;
  if (!list || list.length < 2) return;
  const ordered = [...list].sort((a,b) => a.priceUsd - b.priceUsd);

  // greedy por proximidad
  const route = [ordered[0]];
  const remain = ordered.slice(1);
  while (remain.length){
    const last = route[route.length-1];
    let bestIdx = 0; let bestD = Infinity;
    for (let i=0;i<remain.length;i++){
      const d = haversine(last, remain[i]);
      if (d < bestD){ bestD = d; bestIdx = i; }
    }
    route.push(remain.splice(bestIdx,1)[0]);
  }

  let routesBounds = new google.maps.LatLngBounds();
  for (let i=0;i<route.length-1;i++){
    const a = route[i];
    const b = route[i+1];
    const { path, distanceKm } = await fetchGoogleRoute(a, b);
    if (requestId !== routeRequestToken) return;
    const lineLayer = new google.maps.Polyline({
      path,
      strokeColor: '#3ee08f',
      strokeOpacity: 0.95,
      strokeWeight: 4,
      map,
      zIndex: 50
    });
    const mid = path[Math.floor(path.length/2)];
    const label = `${a.titulo} → ${b.titulo} · ${distanceKm.toFixed(1)} km`;
    lineLayer.addListener('mouseover', () => {
      routeInfoWindow.setContent(label);
      routeInfoWindow.setPosition(mid);
      routeInfoWindow.open(map);
    });
    lineLayer.addListener('mouseout', () => routeInfoWindow.close());
    routeLayerGroup.push(lineLayer);
    path.forEach(pt => routesBounds.extend(pt));
  }

  route.forEach((l, idx) => {
    if (requestId !== routeRequestToken) return;
    const marker = new google.maps.Marker({
      position: { lat: l.lat, lng: l.lng },
      map,
      label: { text: String(idx+1), color: '#062e1b', fontWeight:'700' },
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#3ee08f',
        fillOpacity: 0.95,
        strokeColor: '#0a1e14',
        strokeWeight: 2,
        scale: 10
      },
      zIndex: 55,
      title: `${idx+1}. ${l.titulo}`
    });
    routeLayerGroup.push(marker);
    routesBounds.extend(marker.getPosition());
  });

  map.fitBounds(routesBounds, { top: 40, bottom: 40, left: 40, right: 40 });
}

// ------- Rutas sugeridas entre zonas top-N -------
function computeTopZones(presupuesto, objetivo, k = 3){
  const evals = ZONAS.map(z => {
    const apt = aptitudZona(z, objetivo);
    const ingresoPorHa = z.rendimiento * 800;
    const margenPorHa = ingresoPorHa - z.costoHa * 0.6;
    const roi = clamp((margenPorHa / Math.max(1,z.costoHa)), -0.5, 1.5);
    const score = apt * (1 - z.riesgo*0.6) * (1 + roi*0.4);
    const centro = centroid(z.pol);
    return { z, score, centro };
  }).sort((a,b) => b.score - a.score);
  return evals.slice(0, Math.min(k, evals.length));
}

async function drawSuggestedRoutes(presupuesto, objetivo){
  const requestId = ++routeRequestToken;
  clearRoutes();
  const top = computeTopZones(presupuesto, objetivo, 3);
  if (top.length < 2 || requestId !== routeRequestToken) return;

  // Orden: greedy desde mejor hacia vecinos más cercanos
  const order = [ top[0] ];
  const remaining = top.slice(1);
  while (remaining.length){
    const last = order[order.length-1];
    let bestIdx = 0; let bestD = Infinity;
    for (let i=0;i<remaining.length;i++){
      const d = haversine(last.centro, remaining[i].centro);
      if (d < bestD){ bestD = d; bestIdx = i; }
    }
    order.push(remaining.splice(bestIdx,1)[0]);
  }

  // Dibujar líneas y marcadores numerados
  let routesBounds = null;
  for (let i=0;i<order.length-1;i++){
    const a = order[i].centro;
    const b = order[i+1].centro;
    const { path, distanceKm } = await fetchGoogleRoute(a, b);
    if (requestId !== routeRequestToken) return;
    const lineLayer = new google.maps.Polyline({
      path,
      strokeColor: '#39e08c',
      strokeOpacity: 0.95,
      strokeWeight: 4,
      map,
      zIndex: 4
    });
    const label = `Ruta ${i+1} → ${i+2} · ${distanceKm.toFixed(2)} km`;
    lineLayer.addListener('mouseover', () => {
      routeInfoWindow.setContent(label);
      routeInfoWindow.setPosition(path[Math.floor(path.length/2)]);
      routeInfoWindow.open(map);
    });
    lineLayer.addListener('mouseout', () => routeInfoWindow.close());
    routeLayerGroup.push(lineLayer);
    routesBounds = routesBounds || new google.maps.LatLngBounds();
    path.forEach(pt => routesBounds.extend(pt));
  }
  for (let idx=0; idx<order.length; idx++){
    if (requestId !== routeRequestToken) return;
    const o = order[idx];
    const marker = new google.maps.Marker({
      position: { lat: o.centro.lat, lng: o.centro.lng },
      map,
      label: {
        text: String(idx + 1),
        color: '#062e1b',
        fontWeight: '700'
      },
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#3ee08f',
        fillOpacity: 0.95,
        strokeColor: '#0a1e14',
        strokeWeight: 2,
        scale: 10
      },
      zIndex: 5,
      title: `${idx+1}. ${o.z.nombre}`
    });
    routeLayerGroup.push(marker);
    if (routesBounds) routesBounds.extend(marker.getPosition());
  }

  // Ajustar vista a todo el recorrido
  if (requestId !== routeRequestToken) return;
  if (routesBounds) {
    map.fitBounds(routesBounds, { top: 40, bottom: 40, left: 40, right: 40 });
  } else {
    const fallbackBounds = new google.maps.LatLngBounds();
    order.forEach(o => fallbackBounds.extend({ lat: o.centro.lat, lng: o.centro.lng }));
    map.fitBounds(fallbackBounds, { top: 40, bottom: 40, left: 40, right: 40 });
  }
}

async function fetchGoogleRoute(a, b){
  if (!directionsService) {
    const fallback = [ { lat: a.lat, lng: a.lng }, { lat: b.lat, lng: b.lng } ];
    return { path: fallback, distanceKm: haversine(a, b) };
  }

  const origin = { lat: a.lat, lng: a.lng };
  const destination = { lat: b.lat, lng: b.lng };
  return new Promise((resolve) => {
    directionsService.route({
      origin,
      destination,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: false
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && result.routes?.[0]) {
        const route = result.routes[0];
        const overview = route.overview_path.map(latLng => ({ lat: latLng.lat(), lng: latLng.lng() }));
        const leg = route.legs?.[0];
        const distanceKm = leg?.distance?.value ? leg.distance.value / 1000 : haversine(a, b);
        resolve({ path: overview, distanceKm });
      } else {
        console.warn('Fallo al pedir ruta Directions, usando línea directa.', status, result);
        const fallback = [ origin, destination ];
        resolve({ path: fallback, distanceKm: haversine(a, b) });
      }
    });
  });
}

function clearRoutes(){
  routeLayerGroup.forEach(layer => layer.setMap(null));
  routeLayerGroup = [];
  routeInfoWindow?.close();
}

function centroid(poly){
  // Promedio simple de vértices (suficiente para rectángulos de ejemplo)
  let lat=0, lng=0; const n = poly.length;
  poly.forEach(([la, ln]) => { lat += la; lng += ln; });
  return { lat: lat/n, lng: lng/n };
}

function haversine(a, b){
  const R = 6371; // km
  const dLat = deg2rad(b.lat - a.lat);
  const dLng = deg2rad(b.lng - a.lng);
  const la1 = deg2rad(a.lat), la2 = deg2rad(b.lat);
  const sinDLat = Math.sin(dLat/2), sinDLng = Math.sin(dLng/2);
  const x = sinDLat*sinDLat + Math.cos(la1)*Math.cos(la2)*sinDLng*sinDLng;
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
  return R * c;
}
function deg2rad(d){ return d * Math.PI / 180; }

// Boot (llamado por callback de Google Maps)
window.initAgroFuturo = () => {
  initMap();
  initUI();
  renderCharts();
};
