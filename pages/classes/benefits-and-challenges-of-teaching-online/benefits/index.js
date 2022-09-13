import React, { useState } from "react";
import { Grid3 } from "@/Templetes/grids";
import PicTitle from "@/Molecules/Cards/PicTitleCard";
import BenefitsData from "Data/benefits-and-challenges-of-teaching-online/Benefits.json";
// import Image from "next/image";
import Head from "next/head";

const Benefits = (props) => {
  // const cards = getAllBenfits();
  const { cards } = props;
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
        //  <div key={card.ID} >{card.name} - {card.imgUrl} </div>
         <PicTitle key={card.ID} title={card.name} imgUrl={card.imgUrl} />
        ))}
      </Grid3>
    </div>
  );
};

export async function getStaticProps() {
  console.log("getStaticProps runs here");
  return {
    props: {
      cards: BenefitsData,
    }, // will be passed to the page component as props
  }
}

export default Benefits;


