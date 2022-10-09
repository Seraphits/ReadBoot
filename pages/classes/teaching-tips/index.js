import ClassCard from '@/Molecules/Cards/ClassCards'
import PicTitle from '@/Molecules/Cards/PicTitleCard'
import { Grid3 } from '@/Templetes/grids'
import React from 'react'

const TeachingTips = () => {
  return (
    <div>
      <h1>Teaching Tips</h1>
      <Grid3>
        <PicTitle
          title="Online" imgUrl="/images/Classes/Build/BenefitsAndChallengesOfOnlineTeaching/girl_on_computer.jpg"
          link="/classes/teaching-tips/online"
        />
      </Grid3>

    </div>
  )
}

export default TeachingTips
