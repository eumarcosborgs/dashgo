import { cloneElement, ReactElement } from "react";
import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  sholdMatchExactHref?: boolean
}

export function ActiveLink({ children, sholdMatchExactHref = false, ...rest}: ActiveLinkProps) {
  const { asPath } = useRouter()
  let isActive = false

  if (sholdMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  } 

  if (!sholdMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}