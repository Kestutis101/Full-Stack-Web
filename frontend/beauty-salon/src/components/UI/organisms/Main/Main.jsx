import React from "react";
import Header from "../../atoms/Header/Header";
import {
  StyledMainDiv,
  StyledDiv,
  StyledImg,
  StyledImgDiv,
} from "./Main.styled";
import Footer from "../../atoms/Footer/Footer";

export default function Main({ handleLogged }) {
  handleLogged();
  return (
    <>
      <Header />
      <StyledMainDiv>
        <StyledDiv>
          <p>Welcome to our exquisite beauty salon experience.</p>
          <p>
            Discover a world of refined treatments and personalized services
            tailored to your unique preferences. From luxurious hair care
            solutions to rejuvenating facials and body therapies, our skilled
            team is dedicated to enhancing your natural beauty. Immerse yourself
            in a sanctuary of tranquility and indulge in discreet, exceptional
            services that prioritize your privacy and deliver outstanding
            results.
          </p>
          <p>
            Step into our exclusive beauty salon and let us provide you with an
            unforgettable experience.
          </p>
        </StyledDiv>
        <StyledImgDiv>
          <StyledImg
            src='https://i.pinimg.com/originals/53/ae/4d/53ae4decbb6665b6c04cbea8f4b5ceaa.jpg'
            alt='black woman haircut'
          />
          <StyledImg
            src='https://i.pinimg.com/originals/d7/c6/8a/d7c68a9a7f4919669316e5b414bbea5d.jpg'
            alt='white women with new haircut'
          />
          <StyledImg
            src='https://i.pinimg.com/originals/dc/5c/32/dc5c32b2278009ef397a7b4bac4fcbb3.jpg'
            alt='black women with blue hairs'
          />
          <StyledImg
            src='https://www.gogetgroomed.co.uk/media/1576/undercut.png?width=800&height=800&mode=max'
            alt='white men haircut'
          />

          <StyledImg
            src='https://hairstylecamp.com/wp-content/uploads/gentleman-haircut-14.jpg.webp'
            alt='white men in another haircut'
          />
          <StyledImg
            src='https://www.ssbcrack.com/wp-content/uploads/2023/03/High-and-Tight-Army-Hair-Style.jpg'
            alt='white men in profile picture haircut'
          />
        </StyledImgDiv>
        <Footer />
      </StyledMainDiv>
    </>
  );
}
