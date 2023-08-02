export default function ArrowImg({ isWhite }: { isWhite?: boolean }) {
  return (
    <svg width="11" height="6" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.224 6L10.224 -1.78814e-07H0.223999L5.224 6Z" fill={isWhite ? '#red' : '#333'} />
    </svg>
  );
}
