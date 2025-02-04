const elements = 
[
    // Period 1
    { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, description: 'A colorless, odorless gas.', category: 'nonmetal' },
    { symbol: 'He', name: 'Helium', atomicNumber: 2, description: 'A colorless, odorless gas that is lighter than air.', category: 'noble-gas' },

    // Period 2
    { symbol: 'Li', name: 'Lithium', atomicNumber: 3, description: 'A soft, silvery-white metal.', category: 'metal' },
    { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, description: 'A hard, gray metal.', category: 'metal' },
    { symbol: 'B', name: 'Boron', atomicNumber: 5, description: 'A metalloid essential for plant growth.', category: 'metalloid' },
    { symbol: 'C', name: 'Carbon', atomicNumber: 6, description: 'A nonmetal that is the basis of life.', category: 'nonmetal' },
    { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, description: 'A colorless, odorless gas that makes up 78% of the atmosphere.', category: 'nonmetal' },
    { symbol: 'O', name: 'Oxygen', atomicNumber: 8, description: 'A colorless gas essential for respiration.', category: 'nonmetal' },
    { symbol: 'F', name: 'Fluorine', atomicNumber: 9, description: 'A pale yellow gas that is highly reactive.', category: 'nonmetal' },
    { symbol: 'Ne', name: 'Neon', atomicNumber: 10, description: 'A colorless, odorless gas used in neon signs.', category: 'noble-gas' },

    // Period 3
    { symbol: 'Na', name: 'Sodium', atomicNumber: 11, description: 'A soft, silvery-white metal.', category: 'metal' },
    { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, description: 'A shiny gray solid.', category: 'metal' },
    { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, description: 'A lightweight, silvery-white metal.', category: 'metal' },
    { symbol: 'Si', name: 'Silicon', atomicNumber: 14, description: 'A hard, brittle crystalline solid.', category: 'metalloid' },
    { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, description: 'A nonmetal essential for life.', category: 'nonmetal' },
    { symbol: 'S', name: 'Sulfur', atomicNumber: 16, description: 'A yellow, brittle solid.', category: 'nonmetal' },
    { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, description: 'A greenish-yellow gas used in disinfectants.', category: 'nonmetal' },
    { symbol: 'Ar', name: 'Argon', atomicNumber: 18, description: 'A colorless, odorless gas.', category: 'noble-gas' },

    // Period 4
    { symbol: 'K', name: 'Potassium', atomicNumber: 19, description: 'A soft, waxy-silver metal.', category: 'metal' },
    { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, description: 'A soft gray metal essential for living organisms.', category: 'metal' },
    { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, description: 'A silvery-white metal.', category: 'metal' },
    { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, description: 'A strong, low-density metal.', category: 'metal' },
    { symbol: 'V', name: 'Vanadium', atomicNumber: 23, description: 'A hard, silvery-gray metal.', category: 'metal' },
    { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, description: 'A shiny, hard metal.', category: 'metal' },
    { symbol: ' Mn', name: 'Manganese', atomicNumber: 25, description: 'A gray-white metal.', category: 'metal' },
    { symbol: 'Fe', name: 'Iron', atomicNumber: 26, description: 'A strong, malleable metal.', category: 'metal' },
    { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, description: 'A hard, lustrous metal used in alloys.', category: 'metal' },
    { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, description: 'A silvery-white metal known for its corrosion resistance.', category: 'metal' },
    { symbol: 'Cu', name: 'Copper', atomicNumber: 29, description: 'A reddish-brown metal used in electrical wiring.', category: 'metal' },
    { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, description: 'A bluish-white metal used for galvanizing.', category: 'metal' },

    // Period 5
    { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, description: 'A soft metal that melts just above room temperature.', category: 'metal' },
    { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, description: 'A gray-white metalloid used in semiconductors.', category: 'metalloid' },
    { symbol: 'As', name: 'Arsenic', atomicNumber: 33, description: 'A metalloid that can be toxic in certain forms.', category: 'metalloid' },
    { symbol: 'Se', name: 'Selenium', atomicNumber: 34, description: 'A nonmetal essential for some enzymes.', category: 'nonmetal' },
    { symbol: 'Br', name: 'Bromine', atomicNumber: 35, description: 'A reddish-brown liquid that evaporates easily.', category: 'nonmetal' },
    { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, description: 'A colorless gas used in certain types of lighting.', category: 'noble-gas' },

    // Period 6
    { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, description: 'A soft, silvery-white metal.', category: 'metal' },
    { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, description: 'A soft, silver-white metal used in fireworks.', category: 'metal' },
    { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, description: 'A silvery metal used in LEDs and phosphors.', category: 'metal' },
    { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, description: 'A strong, corrosion-resistant metal.', category: 'metal' },
    { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, description: 'A gray metal used in superconductors.', category: 'metal' },
    { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, description: 'A silvery metal with a high melting point.', category: 'metal' },
    { symbol: 'Tc', name: 'Technetium', atomicNumber: 43, description: 'A radioactive metal used in medical imaging.', category: 'metal' },
    { symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, description: 'A rare metal used in electronics and catalysts.', category: 'metal' },
    { symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, description: 'A silvery-white metal used in catalytic converters.', category: 'metal' },
    { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, description: 'A rare metal used in jewelry and electronics.', category: 'metal' },
    { symbol: 'Ag', name: 'Silver', atomicNumber: 47, description: 'A shiny metal known for its conductivity and luster.', category: 'metal' },
    { symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, description: 'A soft, bluish-white metal used in batteries.', category: 'metal' },

    // Period 7
    { symbol: 'In', name: 'Indium', atomicNumber: 49, description: 'A soft metal used in electronics and alloys.', category: 'metal' },
    { symbol: 'Sn', name: 'Tin', atomicNumber: 50, description: 'A malleable metal used in coatings and alloys.', category: 'metal' },
    { symbol: 'Sb', name: 'Antimony', atomicNumber: 51, description: 'A metalloid used in flame retardants.', category: 'metalloid' },
    { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, description: 'A brittle metalloid used in alloys.', category: 'metalloid' },
    { symbol: 'I', name: 'Iodine', atomicNumber: 53, description: 'A dark gray solid used in antiseptics.', category: 'nonmetal' },
    { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, description: 'A colorless gas used in high-intensity lamps.', category: 'noble-gas' },
    { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, description: 'A soft, gold-colored metal used in atomic clocks.', category: 'metal' },
    { symbol: 'Ba', name: 'Barium', atomicNumber: 56, description: 'A soft, silvery-white metal used in fireworks.', category: 'metal' },
    { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, description: 'A silvery-white metal used in camera lenses.', category: 'metal' },
    { symbol: 'Ce', name: 'Cerium', atomicNumber: 58, description: 'A silvery-white metal used in catalysts.', category: 'metal' },
    { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, description: 'A soft, silvery metal used in magnets.', category: 'metal' },
    { symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, description: 'A silvery metal used in strong magnets.', category: 'metal' },
    { symbol: 'Pm', name: 'Promethium', atomicNumber: 61, description: 'A radioactive metal used in luminous paint.', category: 'metal' },
    { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, description: 'A silvery metal used in magnets and lasers.', category: 'metal' },
    { symbol: 'Eu', name: 'Europium', atomicNumber: 63, description: 'A silvery metal used in phosphorescent materials.', category: 'metal' },
    { symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, description: 'A silvery-white metal used in MRI contrast agents.', category: 'metal' },
    { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, description: 'A silvery metal used in solid-state devices.', category: 'metal' },
    { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, description: 'A silvery metal used in magnets and lasers.', category: 'metal' },
    { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, description: 'A silvery metal used in nuclear reactors.', category: 'metal' },
    { symbol: 'Er', name: 'Erbium', atomicNumber: 68, description: 'A silvery metal used in fiber optics.', category: 'metal' },
    { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, description: 'A silvery metal used in medical imaging.', category: 'metal' },
    { symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, description: 'A silvery metal used in lasers and electronics.', category: 'metal' },
    { symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, description: 'A silvery-white metal used in catalysts.', category: 'metal' },
    { symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, description: 'A shiny, silvery metal used in nuclear reactors.', category: 'metal' },
    { symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, description: 'A hard, blue-gray metal used in electronics.', category: 'metal' },
    { symbol: 'W', name: 'Tungsten', atomicNumber: 74, description: 'A hard, steel-gray metal with a high melting point.', category: 'metal' },
    { symbol: 'Re', name: 'Rhenium', atomicNumber: 75, description: 'A silvery-white metal used in high-temperature alloys.', category: 'metal' },
    { symbol: 'Os', name: 'Osmium', atomicNumber: 76, description: 'A dense, bluish-white metal used in fountain pen nibs.', category: 'metal' },
    { symbol: 'Ir', name: 'Iridium', atomicNumber: 77, description: 'A dense, silvery-white metal used in spark plugs.', category: 'metal' },
    { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, description: 'A dense, malleable metal used in jewelry and catalysts.', category: 'metal' },
    { symbol: 'Au', name: 'Gold', atomicNumber: 79, description: 'A yellow metal known for its luster and malleability.', category: 'metal' },
    { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, description: 'A liquid metal at room temperature, used in thermometers.', category: 'metal' },
    { symbol: 'Tl', name: 'Thallium', atomicNumber: 81, description: 'A soft, malleable metal used in electronics.', category: 'metal' },
    { symbol: 'Pb', name: 'Lead', atomicNumber: 82, description: 'A heavy metal that is toxic in high amounts.', category: 'metal' },
    { symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, description: 'A brittle metal with low toxicity, used in cosmetics.', category: 'metal' },
    { symbol: 'Po', name: 'Polonium', atomicNumber: 84, description: 'A highly radioactive metal.', category: 'metal' },
    { symbol: 'At', name: 'Astatine', atomicNumber: 85, description: 'A rare, radioactive halogen.', category: 'metalloid' },
    { symbol: 'Rn', name: 'Radon', atomicNumber: 86, description: 'A colorless, odorless gas that is radioactive.', category: 'noble-gas' },
    { symbol: 'Fr', name: 'Francium', atomicNumber: 87, description: 'A highly radioactive metal, one of the rarest elements.', category: 'metal' },
    { symbol: 'Ra', name: 'Radium', atomicNumber: 88, description: 'A radioactive metal that glows in the dark.', category: 'metal' },
    { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, description: 'A silvery-white radioactive metal.', category: 'metal' },
    { symbol: 'Th', name: 'Thorium', atomicNumber: 90, description: 'A radioactive metal used in nuclear reactors.', category: 'metal' },
    { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, description: 'A dense, radioactive metal.', category: 'metal' },
    { symbol: 'U', name: 'Uranium', atomicNumber: 92, description: 'A radioactive metal used as fuel in nuclear reactors.', category: 'metal' },
    { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, description: 'A radioactive metal used in research.', category: 'metal' },
    { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, description: 'A radioactive metal used in nuclear weapons and reactors.', category: 'metal' },
    { symbol: 'Am', name: 'Americium', atomicNumber: 95, description: 'A synthetic radioactive element used in smoke detectors.', category: 'metal' },
    { symbol: 'Cm', name: 'Curium', atomicNumber: 96, description: 'A radioactive metal used in scientific research.', category: 'metal' },
    { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Cf', name: 'Californium', atomicNumber: 98, description: 'A radioactive metal used in neutron sources.', category: 'metal' },
    { symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'No', name: 'Nobelium', atomicNumber: 102, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, description: 'A synthetic element used in research.', category: 'metal' },
    { symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, description: 'A synthetic element used in research.', category: 'metalloid' },
    { symbol: 'Og', name: 'Oganesson', atomicNumber: 118, description: 'A synthetic element that is a gas at room temperature.', category: 'noble-gas' }
];
const periodicTable = document.getElementById('periodic-table');
const info = document.getElementById('info');

elements.forEach(element => {
    const elementDiv = document.createElement('div');
    elementDiv.className = 'element';
    elementDiv.innerHTML = `<strong>${element.symbol}</strong><br>${element.name}`;
    
    elementDiv.addEventListener('click', () => {
        info.innerHTML = `<strong>${element.name}</strong> (Atomic Number: ${element.atomicNumber})<br>${element.description}`;
    });

    periodicTable.appendChild(elementDiv);
});
