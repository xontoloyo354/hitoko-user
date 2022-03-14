import { InputAdornment, OutlinedInput } from "@material-ui/core";
import { Search, ShoppingCartOutlined, Slideshow } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
import "node_modules/swiper/swiper-bundle.css";
import "styles/Home.module.css";

const style = makeStyles(() => ({
  head: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: 288,
    height: 41,
    borderRadius: "100px",
    backgroundColor: "#fafafa",
    border: "1px solid #EBEBEB",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#fafafa",
    borderRadius: "50%",
    border: "1px solid #EBEBEB",
    marginLeft: 20,
  },
  // wrapper: {
  //   paddingRight: 40,
  // },
  // swiperContainer: {
  //   maxWidth: 500,
  //   paddingRight: 40,
  // },
}));

const Home = () => {
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{ listStyle: "none" }}>
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const classes = style();

  return (
    <>
      <div className={classes.head}>
        <OutlinedInput
          className={classes.input}
          placeholder="Mau cari apa?"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
        <div className={classes.icon}>
          <ShoppingCartOutlined />
        </div>
      </div>
      <React.Fragment className={classes.wrapper}>
        <Swiper
          id="main"
          className="swipper-wrapper"
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          style={{
            listStyle: "none",
          }}
        >
          {slides}
        </Swiper>
      </React.Fragment>
    </>
  );
};

export default Home;
