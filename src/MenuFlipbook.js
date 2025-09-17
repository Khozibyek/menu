import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import "./MenuFlipbook.css";

const CoverPage = React.forwardRef((props, ref) => (
  <div className="coverPage" ref={ref}>
    <p>{props.children}</p>
    {/* <p> Page number: {props.number}</p> */}
  </div>
));

const Page = React.forwardRef((props, ref) => (
  <div className="demoPage" ref={ref}>
    {props.children}
    {/* <p>Page number: {props.number}</p> */}
  </div>
));


function MyBook() {
  const [size, setSize] = useState({ width: 300, height: 500 });

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const newWidth = Math.min(screenWidth, 400);
      const newHeight = screenHeight;

      setSize({ width: newWidth, height: newHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <HTMLFlipBook
        width={size.width}
        height={size.height}
        showCover={true}
      >
        <CoverPage>
          <img
            src="/images/logo-r.png"
            alt="logo"
          />
          <h1>Restaurant</h1>
        </CoverPage>


        <Page number="1">
          <h1>1-р хоол</h1>
          <hr></hr>
          <div class="foods">
          <div class="food-card-left">
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
            <img src="/images/burger.webp" class="food-img" />
          </div>

           <div class="food-card-right">
            <img src="/images/burger.webp" class="food-img" />
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
          </div>

           <div class="food-card-left">
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
            <img src="/images/burger.webp" class="food-img" />
          </div>

          <div class="food-card-right">
            <img src="/images/burger.webp" class="food-img" />
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
          </div>
          </div>
        </Page>

        <Page number="2">
          <h1>2-р хоол</h1>
          <hr></hr>
          <div class="foods">
          <div class="food-card-left">
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
            <img src="/images/burger.webp" class="food-img" />
          </div>

           <div class="food-card-right">
            <img src="/images/burger.webp" class="food-img" />
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
          </div>

           <div class="food-card-left">
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
            <img src="/images/burger.webp" class="food-img" />
          </div>

          <div class="food-card-right">
            <img src="/images/burger.webp" class="food-img" />
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
          </div>
          </div>
        </Page>

        <Page number="3">
          <h1>3-р хоол</h1>
          <hr></hr>
          <div class="foods">
          <div class="food-card-left">
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
            <img src="/images/burger.webp" class="food-img" />
          </div>

           <div class="food-card-right">
            <img src="/images/burger.webp" class="food-img" />
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
          </div>

           <div class="food-card-left">
            <div class="food-text">
              <h3 class="food-name">Хоолны нэр</h3>
              <p class="food-discription">хоолны тайлбар хоолны тайлбар хоолны тайлбар</p>
            </div>
            <img src="/images/burger.webp" class="food-img" />
          </div>

         
          </div>
        </Page>
        <Page number="4"> Thank you!</Page>
      </HTMLFlipBook>
    </div>
  );
}

export default MyBook;
