import { AirtableImage } from '../types'

export const getImageUrls = (images: AirtableImage[]) => images?.map(image => image.thumbnails.full.url) || []