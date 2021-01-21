type Constants = {
  image: string;
  categorie: string;
};

export function checkImagePost(
  category: string | string[],
  constants: Constants[],
): string {
  let image: string;
  constants.forEach(planet => {
    if (planet.categorie === category) {
      image = planet.image;
    }
  });
  return image;
}
