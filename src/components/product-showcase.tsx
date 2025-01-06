type Props = {
  reverse?: boolean;
  label: string;
  title: string;
  description: string;
  image: string;
};

export default function ProductShowcase({
  reverse = false,
  label,
  title,
  description,
  image,
}: Props) {
  return (
    <div className="container px-8 md:px-12 py-12 mx-auto">
      <div
        className={`flex flex-col gap-8 md:gap-12 md:items-center md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="flex-1">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
            {image ? (
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-muted" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium tracking-wide uppercase">
              {label}
            </p>
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>{description}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
