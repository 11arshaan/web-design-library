export default function BlurFilters() {
  return (
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blurMe" filterUnits="userSpaceOnUse">
         <feGaussianBlur stdDeviation={5} />
          
        </filter>
      </defs>
    </svg>
  );
}
