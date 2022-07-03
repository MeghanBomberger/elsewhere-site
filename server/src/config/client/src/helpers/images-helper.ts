export const imageCarouselFormatter = (images: string[], title: string, id: string) => images?.map((image, i) => ({
  url: image,
  title: `${title}-${i}`,
  id: `${id}-img${i}`
})) || []
