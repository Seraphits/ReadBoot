import React, { useState } from "react";
import { Grid3 } from "@/Templetes/grids";
import PicTitle from "@/Molecules/Cards/PicTitleCard";
import { getAllBenfits } from "@/Data/benefits-and-challenges-of-teaching-online/Benefits";
// import Image from "next/image";
import Head from "next/head";

const Benefits = (props) => {
  const cards = getAllBenfits();

  return (
    <div>
      <Head>
        <title>Benefits and Challenges of Teaching Online</title>
        <meta name="keywords" content="ReadBoot" />
      </Head>
      <h1>benefits</h1>
      <p>
        These technologies will allow you to provide face-to-face instruction to
        your learners and simulate a classroom setting. Different applications
        will include different affordances and constraints for instruction.
      </p>
      <p>
        <b>Click on each one to learn more.</b>
      </p>
      <Grid3>
         {cards.map((card) => (

          <PicTitle key={card.ID} title={card.name} imgUrl={card.imgUrl} />
        ))}
      </Grid3>
    </div>
  );
};

export default Benefits;


