export default function ArrowCharts({
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
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M27.6,8c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.2-0.1-0.3c0-0.1-0.1-0.2-0.2-0.3
	l-3.8-3.8c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,1,0,1.3l2.2,2.2H4.9V3.8c0-0.5-0.4-0.9-0.9-0.9S3,3.3,3,3.8v22.8
	c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9v-2.8h14.5l-2.2,2.2c-0.4,0.4-0.4,1,0,1.3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3.8-3.8
	c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1,0-0.2,0.1-0.3c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.2-0.1-0.3
	c0-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0,0l-3.8-3.8c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,1,0,1.3l2.2,2.2H4.9v-5.7h8.1l-2.2,2.2
	c-0.4,0.4-0.4,1,0,1.3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3.8-3.8c0.1-0.1,0.1-0.1,0.1-0.2c0,0,0-0.1,0.1-0.1
	c0.1-0.2,0.1-0.5,0-0.7c0,0,0-0.1-0.1-0.1c0-0.1-0.1-0.2-0.1-0.2l-3.8-3.8c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,1,0,1.3l2.2,2.2H4.9
	V8.6h19.5l-2.2,2.2c-0.4,0.4-0.4,1,0,1.3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3.8-3.8C27.5,8.2,27.6,8.1,27.6,8z"
      />
    </svg>
  );
}
