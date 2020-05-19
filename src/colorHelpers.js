// {
//     paletteName: "Material UI Colors",
//     id: "material-ui-colors",
//     emoji: "🎨",
//     colors: [
//       { name: "red", color: "#F44336" },
//       { name: "pink", color: "#E91E63" },
//       { name: "purple", color: "#9C27B0" },
//       { name: "deeppurple", color: "#673AB7" },
//       { name: "indigo", color: "#3F51B5" },
//       { name: "blue", color: "#2196F3" },
//       { name: "lightblue", color: "#03A9F4" },
//       { name: "cyan", color: "#00BCD4" },
//       { name: "teal", color: "#009688" },
//       { name: "green", color: "#4CAF50" },
//       { name: "lightgreen", color: "#8BC34A" },
//       { name: "lime", color: "#CDDC39" },
//       { name: "yellow", color: "#FFEB3B" },
//       { name: "amber", color: "#FFC107" },
//       { name: "orange", color: "#FF9800" },
//       { name: "deeporange", color: "#FF5722" },
//       { name: "brown", color: "#795548" },
//       { name: "grey", color: "#9E9E9E" },
//       { name: "bluegrey", color: "#607D8B" }
//     ]
//   }

import chroma from 'chroma-js';
const levels = [50,100,200,300,400,500,600,700,800,900];

function generatePalette(starterPalette){
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
    for(let level of levels) {
        newPalette.colors[level] = [];
    }
    for(let color of starterPalette.colors) {
       let scale = getScale(color.color, 10).reverse();
       for(let i in scale) {
           newPalette.colors[levels[i]].push({
               name: `${color.name} ${levels[i]}`,
               id: color.name.toLowerCase().replace(/ /g, "-"),
               hex: scale[i],
               rgb: chroma(scale[i]).css(),
               rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ", 1.0)") 
           })
       }
    }
    return newPalette;
}

function getRange(hexColor){
    const end = "#fff"
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
           hexColor,
           end
    ];

}


function getScale(hexColor, numberOfColors) {
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors)
}

export { generatePalette };