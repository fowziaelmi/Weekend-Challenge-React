function GalleryList({ gallery }) {
  return (
    <div>
      {gallery.map((pic, index) => {
        console.log(pic.path);
        console.log(pic.id);
        return (
          <div className="resizing" key={pic.id}>
            <img src={pic.path} />
          </div>
        );
      })}
    </div>
  );
}

export default GalleryList;
