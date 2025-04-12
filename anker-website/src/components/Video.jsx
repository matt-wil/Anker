import React from 'react'

const Video = () => {

    // create a creative way for the video to be skipped.
  return (
<iframe 
  width="560"
  height="315" 
  src="https://www.youtube.com/embed/2gRfq_uGUzg?si=U1UbqXqkswHsW13Z" 
  title="YouTube video player" 
  frameborder="0" 
  autoplay="1"
  loops="1"
  controls="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>

  </iframe>
  )
}

export default Video