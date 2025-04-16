const Tattoo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-2">
        <img src="https://picsum.photos/200/300?grayscale" alt="anker-team"/>
      </div>
      <div className="m-4 text-center">
        <h2 className="text-7xl">Artists</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.
        </p>
      </div>
      <div>
        <button className="white-glowing-button">Gallery</button>
      </div>
    </div>
  )
}

export default Tattoo