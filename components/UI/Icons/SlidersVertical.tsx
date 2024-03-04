export default function SlidersVertical({
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
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                d="M7 6H5C4.44772 6 4 6.44772 4 7V10C4 10.5523 4.44772 11 5 11H7C7.55228 11 8 10.5523 8 10V7C8 6.44772 7.55228 6 7 6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M6 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 11V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M13 14H11C10.4477 14 10 14.4477 10 15V18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18V15C14 14.4477 13.5523 14 13 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M12 4V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M19 5H17C16.4477 5 16 5.44772 16 6V10C16 10.5523 16.4477 11 17 11H19C19.5523 11 20 10.5523 20 10V6C20 5.44772 19.5523 5 19 5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M18 4V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 11V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
