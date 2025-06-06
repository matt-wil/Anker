const FullscreenModel = ({ imageUrl, onClose }) => {
    if (!imageUrl) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <img
            onClick={onClose}
            src={imageUrl}
            alt="Fullscreen Tattoo Image"
            className="max-w-[90vw] max-h-[90vh] object-contain shadow-lg cursor-zoom-out"
          />
        </div>
      )
    }

export default FullscreenModel