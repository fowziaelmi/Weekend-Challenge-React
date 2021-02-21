function GalleryItem({ pic }) {
  return (
    <div className="resizing" key={pic.id}>
      <img src={pic.path} />
    </div>
  );
}
export default GalleryItem;
