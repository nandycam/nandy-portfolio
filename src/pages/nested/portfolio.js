import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import Image from "next/image";
import card1 from "../../../public/portfolio-1.jpg";
import card2 from "../../../public/portfolio-2.jpg";
import card3 from "../../../public/portfolio-3.jpg";
import card4 from "../../../public/portfolio-4.jpg";
import card5 from "../../../public/portfolio-5.jpg";
import card6 from "../../../public/portfolio-6.jpg";
import Team1 from "../../../public/team-4.jpg";
const portfolio = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-light">
      <Box sx={{ paddingTop: 12 }}>
        <Container>
          <Typography variant="h2" className="header_text">
            LATEST WORKS
          </Typography>
          <Typography className="parah">
            A LEAD UX & UI DESIGNER BASED IN CANADA
          </Typography>
        </Container>
      </Box>
      <Box sx={{ paddingBottom: 5 }}>
        <Container>
          <div className="row g-2 ">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5 position-relative">
              <div className="img_card">
                <Image className="card_img" src={card1} />
                <div className="card_overlay">
                  <Typography className="overlay_h5">
                    Our Photography
                  </Typography>
                  <Typography className="overlay_span">Design</Typography>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5 position-relative">
              <div className="img_card">
                <Image className="card_img" src={card2} />
                <div className="card_overlay">
                  <Typography className="overlay_h5">
                    Our Photography
                  </Typography>
                  <Typography className="overlay_span">Design</Typography>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5 position-relative">
              <div className="img_card">
                <Image className="card_img" src={card3} />
                <div className="card_overlay">
                  <Typography className="overlay_h5">
                    Our Photography
                  </Typography>
                  <Typography className="overlay_span">Design</Typography>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5  position-relative">
              <div className="img_card">
                <Image className="card_img" src={card4} />
                <div className="card_overlay">
                  <Typography className="overlay_h5">
                    Our Photography
                  </Typography>
                  <Typography className="overlay_span">Design</Typography>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5 position-relative">
              <div className="img_card">
                <Image className="card_img" src={card5} />
                <div className="card_overlay">
                  <Typography className="overlay_h5">
                    Our Photography
                  </Typography>
                  <Typography className="overlay_span">Design</Typography>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-5  position-relative">
              <div className="img_card">
                <Image className="card_img" src={card6} />
                <div className="card_overlay">
                  <Typography className="overlay_h5">
                    Our Photography
                  </Typography>
                  <Typography className="overlay_span">Design</Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Box>
      <Box
        sx={{ paddingTop: 10, backgroundColor: "#eaedf2", paddingBottom: 10 }}
      >
        <Container>
          <Typography variant="h2" className="header_text">
            LATEST WORKS
          </Typography>
          <Typography className="parah">
            A LEAD UX & UI DESIGNER BASED IN CANADA
          </Typography>
        </Container>
        <Container sx={{ paddingTop: 5 }}>
          <Carousel
            responsive={responsive}
            showDots={false}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "superLargeDesktop",
            ]}
            transitionDuration={500}
            autoPlaySpeed={1000}
            infinite={true}
          >
            <div className="swiper_card">
              <div>
                <Image src={Team1} className="Swiper_img" />
              </div>
              <div className="px-3">
                <Typography variant="subtitle2" className="card_parah">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Typography>
                <Typography className="Swiper_head">Nancy Bayers</Typography>
                <Typography variant="subtitle1" className="text-dark">
                  {" "}
                  Co-founder
                </Typography>
              </div>
            </div>
            <div className="swiper_card">
              <div>
                <Image src={Team1} className="Swiper_img" />
              </div>
              <div className="px-3">
                <Typography variant="subtitle2" className="card_parah">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Typography>
                <Typography className="Swiper_head">Nancy Bayers</Typography>
                <Typography variant="subtitle1"> Co-founder</Typography>
              </div>
            </div>
            <div className="swiper_card">
              <div>
                <Image src={Team1} className="Swiper_img" />
              </div>
              <div className="px-3">
                <Typography variant="subtitle2" className="card_parah">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Typography>
                <Typography className="Swiper_head">Nancy Bayers</Typography>
                <Typography variant="subtitle1"> Co-founder</Typography>
              </div>
            </div>
            <div className="swiper_card">
              <div>
                <Image src={Team1} className="Swiper_img" />
              </div>
              <div className="px-3">
                <Typography variant="subtitle2" className="card_parah">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Typography>
                <Typography className="Swiper_head">Nancy Bayers</Typography>
                <Typography variant="subtitle1"> Co-founder</Typography>
              </div>
            </div>
          </Carousel>
        </Container>
      </Box>
    </div>
  );
};

export default portfolio;
