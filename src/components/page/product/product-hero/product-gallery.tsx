interface ProductImage {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
  selectedImage: number;
  onImageSelect: (index: number) => void;
}

export default function ProductGallery({
  images,
  selectedImage,
  onImageSelect,
}: ProductGalleryProps) {
  return (
    <div className="flex gap-4 w-full max-w-2xl mx-auto lg:mx-0">
      {/* Thumbnails */}
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onImageSelect(index)}
            className={`relative w-20 h-20 border-2 overflow-hidden bg-surface-coolGrey ${
              selectedImage === index
                ? "border-surface-accent"
                : "border-surface-coolGrey"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-square">
        <img
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          className="w-full h-full object-cover  border-2 border-surface-coolGrey bg-surface-coolGrey"
        />
      </div>
    </div>
  );
}
