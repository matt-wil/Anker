const FullscreenModel = ({ imageUrl, onClose }) => {
    if (!imageUrl) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-4xl hover:text-red-500"
          >
            &times;
          </button>
          <img
            src={imageUrl}
            alt="Fullscreen Tattoo Image"
            className="max-w-[90vw] max-h-[90vh] object-contain shadow-lg"
          />
        </div>
      )
    }

export default FullscreenModel