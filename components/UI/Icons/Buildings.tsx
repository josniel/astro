export default function Buildings({
  width,
  height,
  props,
}: {
  width?: number;
  height?: number;
  [x: string]: any;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M26.6667 28.0001H22.6667V25.3334H26.6667V28.0001ZM26.6667 22.6667H22.6667V20.0001H26.6667V22.6667ZM26.6667 17.3334H22.6667V14.6667H26.6667V17.3334ZM32 10.4001C31.4667 6.00008 27.7333 2.66675 23.3333 2.66675C21.0667 2.66675 18.8 3.60008 17.2 5.20008C16.2667 6.13341 15.6 7.06675 15.2 8.26675L20.8 12.0001H29.3333V29.3334H32V10.4001ZM17.7333 9.33341C18.5333 6.93341 20.8 5.33341 23.3333 5.33341C25.8667 5.33341 28.1333 6.93341 28.9333 9.33341H17.7333ZM10 8.00008L0 14.6667V29.3334H20V14.6667L10 8.00008ZM17.3333 26.6667H13.3333V18.6667H6.66667V26.6667H2.66667V16.0001L10 11.3334L17.3333 16.0001V26.6667Z"
        fill="currentColor"
      />
    </svg>
  );
}