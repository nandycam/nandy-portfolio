import { Box, Button, Container, List, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";
import img from "../../../public/about-us.jpg";
import AlbumIcon from "@mui/icons-material/Album";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import FlagIcon from "@mui/icons-material/Flag";
import { Line, Circle } from "rc-progress";


const About = () => {
  return (
    <div className={styles.about_section}>
      <Head>
        <title>PORTFOLIO | ABOUT</title>
      </Head>
      <Box sx={{ paddingTop: 15 }}>
        <Container>
          <Typography variant="h2" className={styles.about_header_h3}>
            ABOUT ME
          </Typography>
          <Typography className={styles.about_section_p}>
            A LEAD UX & UI DESIGNER BASED IN INDIA
          </Typography>
          <div className="row">
            <div className="col-lg-6">
              <div>
                <Image
                  className={styles.about_section_img}
                  src={img}
                  height={400}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <Typography className={styles.h4}>I'M Nanthakumar M</Typography>
              <Typography className={styles.h6}>
                A Lead <span className={styles.color}>UX & UI</span> designer
                based in india
              </Typography>
              <Typography variant="subtitle1" className="text-dark">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions. Check out my Portfolio
              </Typography>
              <Box sx={{ paddingTop: 2 }}>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className={styles.media}>
                      <Typography className={styles.media_label}>
                        Birthday
                      </Typography>
                      <Typography className={styles.media_mute_label}>
                        10th Dec 2001
                      </Typography>
                    </div>
                    <div className={styles.media}>
                      <Typography className={styles.media_label}>
                        Age
                      </Typography>
                      <Typography className={styles.media_mute_label}>
                        21yr
                      </Typography>
                    </div>
                    <div className={styles.media}>
                      <Typography className={styles.media_label}>
                        Residence
                      </Typography>
                      <Typography className={styles.media_mute_label}>
                        Coimbature
                      </Typography>
                    </div>
                    <div className={styles.media}>
                      <Typography className={styles.media_label}>
                        Address
                      </Typography>
                      <Typography className={styles.media_mute_label}>
                        Peelamedu,Coimbature
                      </Typography>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className={styles.media}>
                      <Typography className={styles.media_label}>
                        E-mail
                      </Typography>
                      <Typography className={styles.media_mute_label}>
                        nandycamfsd0210@gmail.com
                      </Typography>
                    </div>
                    <div className={styles.media}>
                      <Typography className={styles.media_label}>
                        Phone
                      </Typography>
                      <Typography className={styles.media_mute_label}>
                        770-845-9198
                      </Typography>
                    </div>
                    <div className={styles.media}>
                      <Typography className={styles.media_label}>
                        Skype
                      </Typography>
                      <Typography className={styles.media_mute_label}>
                        skype.0404
                      </Typography>
                    </div>
                    <div className={styles.media}>
                      <Typography className={styles.media_label}>
                        Freelance
                      </Typography>
                      <Typography className={styles.media_mute_label}>
                        Available
                      </Typography>
                    </div>
                  </div>
                </div>
              </Box>
              <button variant="text" className={styles.button}>
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "White", marginTop: 8 }}>
        <Container sx={{ paddingTop: 10 }}>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Typography className={styles.about_header_h3}>
                MY SKILLS
              </Typography>
              <Typography
                variant="subtitle1"
                className={styles.about_section_p}
              >
                A LEAD UX & UI DESIGNER BASED IN CANADA
              </Typography>
              <Box>
                <div className={styles.skills}>
                  <div className={styles.skills_bar}>
                    <div className={styles.bar}>
                      <div className={styles.info}>
                        <span>HTML</span>
                      </div>
                      <div className={styles.progress_line}>
                        <span class={styles.html}></span>
                        <span className={styles}></span>
                      </div>
                      <div className={styles.info}>
                        <span>CSS</span>
                      </div>
                      <div className={styles.progress_line}>
                        <span class={styles.css}></span>
                      </div>
                      <div className={styles.info}>
                        <span>MATERIAL-UI</span>
                      </div>
                      <div className={styles.progress_line}>
                        <span class={styles.bootstrap}></span>
                      </div>
                      <div className={styles.info}>
                        <span>REACT JS</span>
                      </div>
                      <div className={styles.progress_line}>
                        <span class={styles.javascript}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Box
              
                className={styles.Mob_skill_card}
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12  mt-5">
                    <div className={styles.media_row}>
                      <AlbumIcon className={styles.icons} />
                      <Typography className={styles.media_text}>
                        80 Albumes Listened
                      </Typography>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12  mt-5">
                    <div className={styles.media_row}>
                      <EmojiEventsIcon className={styles.icons} />
                      <Typography className={styles.media_text}>
                        80 Albumes Listened
                      </Typography>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <div className={styles.media_row}>
                      <EmojiFoodBeverageIcon className={styles.icons} />
                      <Typography className={styles.media_text}>
                        80 Albumes Listened
                      </Typography>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <div className={styles.media_row}>
                      <FlagIcon className={styles.icons} />
                      <Typography className={styles.media_text}>
                        80 Albumes Listened
                      </Typography>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default About;
