// Gallery - lower priority but
// It's just an array of other images!
import { ImageContent } from './Image'
import ImageGallery from 'react-image-gallery'

interface GalleryContent {
  caption: String
  className?: string
  ids: string
  images: Array<ImageContent>
}

const Gallery = (attributes: GalleryContent) => {
  return <div>Gallery element isn't there</div>
}

export default Gallery

// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
// ];

// class MyGallery extends React.Component {
//   render() {
//     return <ImageGallery items={images} />;
//   }
// }
