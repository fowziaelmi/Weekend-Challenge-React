import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({ gallery }) {
  return (
    <div>
      {' '}
      {gallery.map((pic, index) => {
        return <GalleryItem pic={pic} key={index} />;
      })}
    </div>
  );
}
export default GalleryList;
