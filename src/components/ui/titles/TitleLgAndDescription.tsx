interface Props {
  title: string;
  titleStrong: string;
  texts: string[];
  subTitle?: string;
  description?: string;
  className?: string;
}
 import './TitleLgAndDescription.scss';

export const TitleLgAndDescription = ({
  title,
  titleStrong,
  texts,
  subTitle,
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
          <div className='content'>
          {subTitle}
           <div className="visible">
              <ul className='ul-list '>
                {texts.map((text, index) => (
                  <li key={index} className='li-item'>
                    <span>
                    {text}
                    </span>
                    </li>
                ))}
              </ul>
            </div> 
          </div>
        </h2>
      )}
      {description && <p>{description}</p>}
    </div>
  );
};
