function rgba(r, g, b, opacity) {
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const colors = {
  spring: (opacity = 1) => rgba(33, 255, 148, opacity),
  springLight: (opacity = 1) => rgba(148, 255, 203, opacity),
  tomato: (opacity = 1) => rgba(255, 89, 89, opacity),
  lilac: (opacity = 1) => rgba(253, 112, 255, opacity),
  lilacDeep: (opacity = 1) => rgba(249, 66, 255, opacity),
  lilacBright: (opacity = 1) => rgba(255, 249, 255, opacity),
  lilacPastel: (opacity = 1) => rgba(211, 139, 213, opacity),
  carolina: (opacity = 1) => rgba(89, 195, 255, opacity),
  navy: (opacity = 1) => rgba(1, 14, 23, opacity),
};

export default colors;
