const ArtistComponent = ({name, profilePhoto, bio, contact, socials, specialities, gallery}) => {
  return (
    <div>
        <div>
            <img src={profilePhoto} alt={name}/>
        </div>
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
            <p>{contact}</p>
            <p>{specialities}</p>
            <p>{gallery}</p>
            <p>{socials}</p>
        </div>
    </div>
  )
}

export default ArtistComponent