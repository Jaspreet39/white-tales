import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  ZoomOut,
  FadeOut,
  FlexCenterStyle
} from "react-scroll-motion";
import About from "../Component/About";
import Banner from "../Component/Banner";
import Carouselimage from "../Component/Carouselimage";
import Header from "../Component/Header";
import Showcase from "../Component/Showcase";
import "../Style/Home.scss";

function Home() {
    const FadeUp = batch(Fade(), Move());
    const FadeUp2 = batch(Fade(),MoveIn(),ZoomOut());
    const ZoomInScrollOut = batch(FadeIn(),ZoomIn())
  return (
    <div className="home">
      <Header />
      {/* <ScrollContainer> */}
        {/* <ScrollPage page={0}> */}
          {/* <Animator animation={ZoomOut()}> */}
            <Banner />
          {/* </Animator> */}
        {/* </ScrollPage> */}
        {/* <ScrollPage page={1}> */}
         {/* <Animator animation={ZoomInScrollOut}> */}
            <Showcase />
         {/* </Animator> */}
        {/* </ScrollPage> */}
        {/* <ScrollPage page={2}> */}
          {/* <Animator animation={ZoomInScrollOut}> */}
            <About />
          {/* </Animator> */}
        {/* </ScrollPage> */}
        {/* <ScrollPage page={3}> */}
          {/* <Animator animation={FadeUp}> */}
            <Carouselimage />
            
          {/* </Animator> */}
        {/* </ScrollPage> */}
      {/* </ScrollContainer> */}
    </div>
  );
}

export default Home;
// < Header />
//       <Banner/>
//       <Showcase/>
//       <About/>
//       <Carouselimage/>
