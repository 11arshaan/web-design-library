export default function BlurFilters({blur=5}) {
  return (
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur1" filterUnits="userSpaceOnUse">
         <feGaussianBlur stdDeviation={blur} />
          
        </filter>
      </defs>
    </svg>
  );
}
