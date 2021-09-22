import { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const btnGroupStyle = {
  maxWidth: "100%",
  overflowX: "auto",
  padding: "0.75em, 1.25em",
  backgroundColor: "rgba(3, 169, 244, 0.18)",
  borderRadius: "10px 25px",
};

const SocialButtons = ({ url }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <p onClick={() => setShow(!show)} style={{cursor: "pointer"}}>
        <strong>paylaş</strong>{" "}
        {show ? <MdArrowDropUp size={40} /> : <MdArrowDropDown size={40} />}:
      </p>{" "}
      {show && (
        <ButtonGroup style={btnGroupStyle}>
          <FacebookShareButton url={url}>
            <FacebookIcon />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon />
          </TwitterShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon />
          </WhatsappShareButton>
          <RedditShareButton url={url}>
            <RedditIcon />
          </RedditShareButton>
          <TelegramShareButton url={url}>
            <TelegramIcon />
          </TelegramShareButton>
        </ButtonGroup>
      )}
    </>
  );
};

export default SocialButtons;
