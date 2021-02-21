import { useState } from 'react';

function GalleryItem({ pic, addLikes }) {
  const [onClick, setOnClick] = useState(0);
  const onClickHandle = () => {
    if (onClick % 2 === 0) {
      return <img src={pic.path} className="resizing" />;
    } else {
      return <p> {pic.description} </p>;
    }
  };

  return (
    <div className="pics">
      {' '}
      <div
        className="imageStore"
        key={pic.id}
        onClick={() => setOnClick(onClick + 1)}
      >
        {onClickHandle()}{' '}
      </div>
      <div>
        {' '}
        <button onClick={addLikes} id={pic.id}>
          LIKE
        </button>{' '}
      </div>
      <div>{pic.likes} people liked this!</div>
    </div>
  );
}
export default GalleryItem;
