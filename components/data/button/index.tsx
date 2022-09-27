/* React/Next */
import { divide } from "lodash";
import Link from "next/link";

/* Components */
import { LoaderCircle } from "../loader-circle";

/* Styles */
import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  backgroundColor?: "var(--orange)" | "var(--blue)";
  href?: string;
  type?: "submit" | "button";
  loading?: boolean;
  icon?: string;
}

export function ButtonComponent({
  text,
  backgroundColor,
  href,
  type,
  icon,
  loading,
  ...props
}: ButtonProps) {
  return (
    <S.Button backgroundColor={backgroundColor} $loading={loading} className="button">
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
