import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

type StoryProps = {
  id: string
  image: string
  title: string
}

const Story = ({ id, image, title }: StoryProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-black"
      key={id}
    >
      <Image
        className="h-16 w-16 rounded-full border-2 "
        source={{
          uri: image,
        }}
        alt={title}
      />
    </TouchableOpacity>
  )
}

export default Story
