import Link from "next/link";

import * as S from "./styles";

interface BreadCrumbProps {
  list?: {
    label: string;
    url: string;
  }[];
}

export function BreadCrumbComponent({ list }: BreadCrumbProps) {
  if (!list) {
    return <div></div>;
  }

  return (
    <S.BreadCrumb>
      {list.map((itemList) => (
        <li key={itemList.label} className="paragraph-1-regular uppercase">
          {itemList.url ?  <Link href={itemList.url}>{itemList.label}</Link> : <span>{itemList.label}</span>}
        </li>
      ))}
    </S.BreadCrumb>
  );
}
