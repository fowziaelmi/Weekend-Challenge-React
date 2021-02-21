function GalleryItem({ pic }) {
  return (
    <div className="imageStore" key={pic.id}>
      <img className="resizing" src={pic.path} />
      <div>{pic.description}</div>
      <button>LIKE</button>
    </div>
  );
}
export default GalleryItem;
