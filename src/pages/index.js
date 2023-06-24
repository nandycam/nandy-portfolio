import Head from "next/head";
import { Grid, Container, Box, Typography, Modal, Button } from "@mui/material";
import Styles from "../styles/Home.module.css";
import Image from "next/image";
import img from "../../public/home-about.png";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import ContactModal from "../../components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={Styles.home_section}>
      <Head>
        <title>PORTFOLIO</title>
        <meta name="Portfolio" content="Generated by create next app" />
        <meta
          name="developer"
          content="HTML, CSS, JavaScript, React, Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ paddingTop: 12, paddingBottom: 4 }}>
        <Container>
          <div className="row">
            <div className="col-lg-6">
              <Box sx={{ marginTop: 20 }} className={Styles.mob_top}>
                <Typography variant="subtitle1" className={Styles.Banner_h6}>
                  Hello there...
                </Typography>
                <Typography variant="h1" className={Styles.Banner_h1}>
                  Nanthakumar M
                </Typography>
                <Typography variant="h6" className={Styles.Banner_h6}>
                  I'm Front end
                  <div className={Styles.typewriter}>Developer</div>
                </Typography>
                <Typography variant="subtitle1" className={Styles.Banner_p}>
                  The namics of how users interact with interactive elements
                  within a user interface flow chart based on container
                  proportion.
                </Typography>
                <Grid item pt={2}>
                  <Link className={Styles.My_btn} href="/nested/portfolio">
                    {" "}
                    MY WORK
                  </Link>

                  <button
                    type="button"
                    className={Styles.My_btn2}
                    onClick={handleModalOpen}
                  >
                    HIRE ME
                  </button>

                  <div>
                    <Modal
                      open={isModalOpen}
                      onClose={handleModalClose}
                      aria-labelledby="modal-title"
                      aria-describedby="modal-description"
                    >
                      <Box
                        className={Styles.modal_container}
                      >
                        <Button
                          onClick={handleModalClose}
                          className={Styles.close_button}
                        >
                          <CloseIcon />
                        </Button>
                        <ContactModal />
                        <Box sx={{ mt: 2 }}></Box>
                      </Box>
                    </Modal>
                  </div>
                </Grid>
              </Box>
            </div>
            <div className="col-lg-6">
              <Image src={img} className={Styles.banner_img} />
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
}
