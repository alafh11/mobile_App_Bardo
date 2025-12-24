// Art images index - import all Bardo images from assets
export const artImages = [
  require('../assets/images/img_2.jpg'),
  require('../assets/images/img_3.jpg'),
  require('../assets/images/img_4.jpg'),
  require('../assets/images/img_5.jpg'),
  require('../assets/images/img_6.jpg'),
  require('../assets/images/img_7.jpg'),
  require('../assets/images/img_8.jpg'),
  require('../assets/images/img_9.jpg'),
  require('../assets/images/img_10.jpg'),
  // Continue for all 66 images...
  require('../assets/images/img_67.jpg'),
];

export interface ArtImage {
  id: number;
  source: any;
  title?: string;
  period?: string;
  description?: string;
}

export const artImagesWithData: ArtImage[] = artImages.map((source, index) => ({
  id: index + 2,
  source,
  title: `Historical Artifact ${index + 2}`,
  period: 'Various Periods',
  description: 'Ancient artifact from Bardo Museum collection'
}));