import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import blog1 from "../../../public/blog-1.jpg";
import blog2 from "../../../public/blog-2.jpg";
import blog3 from "../../../public/blog-3.jpg";
import Link from "next/link";

const blog = () => {
  return (
    <div className="blog_section">
      <Box
        sx={{
          paddingTop: 15,
          backgroundColor: "white",
        }}
      >
        <Container>
          <Typography variant="h2" className="header_text">
            LATEST BLOGS
          </Typography>
          <Typography className="parah">
            A LEAD UX & UI DESIGNER BASED IN CANADA
          </Typography>
          <Box sx={{ justifyContent: "space-between", paddingTop: 10 }}>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
                <div>
                  <Image src={blog1} className="blog_img" />
                  <div className="card">
                    <Typography className="date">02 Mar 2023</Typography>
                    <Typography className="card_label">Design</Typography>

                    <Typography variant="h5" className="card_h5">
                      Make your Marketing website
                    </Typography>
                    <Typography variant="subtitle2" className="pt-2 text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Link className="read_more" href="/">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
                <div>
                  <Image src={blog2} className="blog_img" />
                  <div className="card">
                    <Typography className="date">02 Mar 2023</Typography>
                    <Typography className="card_label">Design</Typography>

                    <Typography variant="h5" className="card_h5">
                      Make your Marketing website
                    </Typography>
                    <Typography variant="subtitle2" className="pt-2 text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Link className="read_more" href="/">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
                <div>
                  <Image src={blog3} className="blog_img" />
                  <div className="card">
                    <Typography className="date">02 Mar 2023</Typography>
                    <Typography className="card_label">Design</Typography>

                    <Typography variant="h5" className="card_h5">
                      Make your Marketing website
                    </Typography>
                    <Typography variant="subtitle2" className="pt-2 text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                    <Link className="read_more" href="/">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default blog;
