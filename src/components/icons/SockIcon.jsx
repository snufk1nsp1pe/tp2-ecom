export function SockIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="38"
        y="18"
        width="120"
        height="42"
        rx="18"
        stroke="currentColor"
        strokeWidth="12"
      />
      <path
        d="M52 60 V140 C52 181 70 202 112 216 L158 231 C191 241 220 218 220 184 C220 159 207 142 177 128 L160 120 C150 115 145 105 145 92 V60"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 137 C92 141 118 169 119 216"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M177 128 L158 231"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}
