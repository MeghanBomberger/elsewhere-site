import * as React from "react"

export const TwitchIcon = (props: any) => (
  <svg
    height={512}
    viewBox="0 0 64 64"
    width={512}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd">
      <path
        d="M48 64H16A16 16 0 0 1 0 48V16A16 16 0 0 1 16 0h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16"
        fill="#9146ff"
      />
      <path
        d="M30 18h18A9 9 0 0 0 48.92.046C48.614.029 48.311 0 48 0H16A16 16 0 0 0 0 16v32a30 30 0 0 1 30-30"
        fill="#b469ff"
      />
      <path d="M48 32a16 16 0 1 0 16 16V16a16 16 0 0 1-16 16" fill="#7328e1" />
      <path
        d="M43.343 39 49 33.343V15H23v24h8v6l6-6zm-3.171 8.828A4.002 4.002 0 0 1 37.343 49H31l-6.293 6.293A1 1 0 0 1 23 54.586V49h-8a2 2 0 0 1-2-2V20.657a3.997 3.997 0 0 1 1.172-2.829l5.656-5.656A4.002 4.002 0 0 1 22.657 11H51a2 2 0 0 1 2 2v21.172a2 2 0 0 1-.586 1.414L40.172 47.828z"
        fill="#fff"
      />
    </g>
    <path d="M32 20h4v10h-4zM41 20h4v10h-4z" fill="#fff" />
  </svg>
)
