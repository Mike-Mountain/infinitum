export interface Dinosaur {
  id: number;
  name: string;
  pronunciation: string;
  meaning: string;
  lived: string;
  location: string;
  summary: string;
  description: string;
  image: string;
  wikiImageOne: string;
  wikiImageTwo: string;
  dinoImageOne: string;
  dinoImageOneSrc: string;
  sizeComparisonDino: string;
  sizeComparisonHuman: string;
  diet: string;
  type: string;
  taxonomy: string;
  fossils: string;
}

/**
 * A factory function that creates Dinosaur
 */
export function createDinosaur(params: Partial<Dinosaur>) {
  return {
    name: params.name,
    pronunciation: params.pronunciation,
    meaning: params.meaning,
    lived: params.lived,
    location: params.location,
    summary: params.summary,
    description: params.description,
    image: params.image,
    wikiImageOne: params.wikiImageOne,
    wikiImageTwo: params.wikiImageTwo,
    dinoImageOne: params.dinoImageOne,
    dinoImageOneSrc: params.dinoImageOneSrc,
    sizeComparisonDino: params.sizeComparisonDino,
    sizeComparisonHuman: params.sizeComparisonHuman,
    diet: params.diet,
    type: params.type,
    taxonomy: params.taxonomy,
    fossils: params.fossils
  } as Dinosaur;
}
