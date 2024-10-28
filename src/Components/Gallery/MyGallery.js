function MyGallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-box">
        <div className="gallery-item">
          <img
            src="https://cdn.pixabay.com/photo/2019/12/02/07/07/autumn-4667080_1280.jpg"
            alt="Gallery Item 1"
          />
          <div className="overlay">Image 1</div>
        </div>
        <div className="gallery-item">
          <img
            src="https://cdn.pixabay.com/photo/2020/11/03/16/13/road-5710320_1280.jpg"
            alt="Gallery Item 2"
          />
          <div className="overlay">Image 2</div>
        </div>
        <div className="gallery-item">
          <img
            src="https://cdn.pixabay.com/photo/2018/10/06/22/54/forest-3728911_1280.jpg"
            alt="Gallery Item 3"
          />
          <div className="overlay">Image 3</div>
        </div>
        <div className="gallery-item">
          <img
            src="https://cdn.pixabay.com/photo/2018/12/18/02/57/foliage-3881675_1280.jpg"
            alt="Gallery Item 4"
          />
          <div className="overlay">Image 4</div>
        </div>
      </div>
    </div>
  );
}
export default MyGallery;