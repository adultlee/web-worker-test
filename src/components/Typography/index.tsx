import { css } from "@emotion/react";

type TypographyType = {
  children: React.ReactNode;
  size: number;
  color: string;
};

function Typography({ children, size, color }: TypographyType): JSX.Element {
  return (
    <div
      css={css({
        color: color,
        fontSize: size,
      })}
    >
      {children}
    </div>
  );
}

export default Typography;
