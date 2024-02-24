interface Props {
  title: string;
  titleStrong: string;
  subTitle?: string;
  subTitleStrong?: string;
  description?: string;
  className?: string;
}
export const TitleLgAndDescription = ({
  title,
  titleStrong,
  subTitle,
  subTitleStrong,
  description,
  className,
}: Props) => {
  return (
    <div
      className={`Title__lg__and__description ${className ? className : ""}`}
    >
      <h1>
        {title} <span>{titleStrong}</span>
      </h1>
      {subTitle && (
        <h2 className="h1">
          {subTitle} <span>{subTitleStrong}</span>
        </h2>
      )}
      {description && <p>{description}</p>}
    </div>
  );
};
