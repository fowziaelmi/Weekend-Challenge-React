function GalleryItem({ pic, addLikes }) {
  return (
    <div className="imageStore" key={pic.id}>
      <img className="resizing" src={pic.path} />
      <div>{pic.description}</div>
      <button onClick={addLikes}>LIKE</button>
      <div>{pic.likes} people liked this!</div>
    </div>
  );
}
export default GalleryItem;
