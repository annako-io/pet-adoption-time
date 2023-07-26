// Functional Component (Class Component below)
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = (e) => {
    setActive(+e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img 
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnal"
            onClick={handleIndexClick}
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};

// import { Component } from "react";

// class Carousel extends Component {
//   state = {
//     active: 0,
//   };

//   static defaultProps = {
//     images: ["./images/adopt2.png"],
//   };

//   handleIndexClick = (event) => {
//     this.setState({
//       active: +event.target.dataset.index,
//     });
//   };

//   render() {
//     const { active } = this.state;
//     const { images } = this.props;
//     return (
//       <div className="carousel">
//         <img src={images[active]} alt="animal hero" />
//         <div className="carousel-smaller">
//           {images.map((photo, index) => (
//             // eslint-disable-next-line
//             <img 
//               key={photo}
//               src={photo}
//               className={index === active ? "active" : ""}
//               alt="animal thumbnail"
//               onClick={this.handleIndexClick}
//               data-index={index}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

export default Carousel;