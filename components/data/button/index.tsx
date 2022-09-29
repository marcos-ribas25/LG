import Link from "next/link";

import { LoaderCircle } from "../loader-circle";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  href?: string;
  icon?: string;
  loading?: boolean;
  type?: "submit" | "button";
  backgroundColor?: "var(--orange)" | "var(--blue)";
}

export function ButtonComponent({
  text,
  href,
  type,
  icon,
  loading,
  backgroundColor,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      $loading={loading}
      className="button"
    >
      {href && !type ? (
        <Link href={href} passHref>
          <a href="replace" className="bt link-3-bold tk-poppins" {...props}>
            {icon && (
              <div
                className="icon"
                dangerouslySetInnerHTML={{
                  __html: icon,
                }}
              ></div>
            )}

            {text}
          </a>
        </Link>
      ) : (
        <button
          className="bt link-3-bold tk-poppins"
          type={type ? type : "submit"}
          disabled={loading}
          {...props}
        >
          {loading ? <LoaderCircle size={40} /> : text}
        </button>
      )}
    </S.Button>
  );
}
