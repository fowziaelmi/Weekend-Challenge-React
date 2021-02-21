import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({ gallery, addLikes }) {
  return (
    <div>
      {' '}
      {gallery.map((pic, index) => {
        return <GalleryItem pic={pic} key={index} addLikes={addLikes} />;
      })}
    </div>
  );
}
export default GalleryList;
