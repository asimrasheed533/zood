import CareerrsMotivationCard from "./CareerrsMotivationCard";
import { memo } from "react";

function CareersMotivation() {
  return (
    <div className="careers__motivation__wrapper">
      <div className="careers__motivation">
        <div className="careers__motivation__content">
          <div className="careers__motivation__content__heading heading">
            Provided
            <span> services</span>
          </div>
        </div>
        <CareerrsMotivationCard
          icon={
            <svg
              width="77"
              height="77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="38.5" cy="38.5" r="38.5" fill="#9d11111f" />
              <path
                d="M66.675 57.805a2.692 2.692 0 0 1-.702.523c-.522.164-.942-.311-.945-1.019-.006-1.873 0-3.745 0-5.666h-6.796c.017.133.009.268-.026.398-.152.28-.31.7-.527.754a.968.968 0 0 1-.907-.285c-1.795-3.125-4.588-3.847-7.59-3.937a3.706 3.706 0 0 1-3.267-1.861c-1.223-1.902-2.51-3.753-3.768-5.629a2.209 2.209 0 0 0-1.692-1.155v.606c0 1.834-.013 3.669.013 5.502.026.333.122.657.282.95.158.32.41.581.589.89a3.922 3.922 0 0 0 2.32 2.032 5.535 5.535 0 0 1 1.994 1.55.72.72 0 0 0 .883.252 11.314 11.314 0 0 1 7.413-.224c3.873 1.269 6.246 4.803 6.282 9.324.005.693-.314 1.156-.809 1.175-.495.019-.863-.433-.87-1.12-.037-4.845-3.131-7.808-7.41-8.013-2.53-.032-5.02.641-7.19 1.944-2.418 1.317-4.75 2.832-7.095 4.309-.942.592-1.018.644-1.885-.121a13480.37 13480.37 0 0 1-12.243-10.799 2.434 2.434 0 0 0-2.448-.695 2.519 2.519 0 0 0-1.75 2.154 2.774 2.774 0 0 0 .918 2.676c2.328 2.072 4.669 4.125 7.005 6.185 1.356 1.196 2.726 2.372 4.053 3.604.24.276.37.633.36 1a.948.948 0 0 1-.544.658 1.025 1.025 0 0 1-.8-.198 8.094 8.094 0 0 1-1.172-1.02c-1.698-1.754-3.75-2.848-5.767-4.02-2.941-1.713-5.886-3.422-8.81-5.173a4.905 4.905 0 0 1-2.202-3.232 4.922 4.922 0 0 1 .856-3.819 3.855 3.855 0 0 1 5.117-1.191 2.683 2.683 0 0 0 2.692.512c1.177-.449 2.346.055 3.336.93 1.34 1.183 2.686 2.358 4.02 3.551.239.212.41.3.713.088a4.643 4.643 0 0 1 2.684-.754c.363-.005.726 0 1.128 0V14.199H20.35c.222.817.437 1.63.662 2.44a44704.49 44704.49 0 0 1 4.605 16.528c.108.39.24.61.65.653a1.237 1.237 0 0 1 .971 1.034 1.24 1.24 0 0 1-.028.5 5.838 5.838 0 0 1-2.178 3.784 8.912 8.912 0 0 1-4.942 2.027 9.878 9.878 0 0 1-7.443-1.921 5.862 5.862 0 0 1-2.25-3.53c-.234-1.143.09-1.692 1.094-1.968.18-.05.37-.35.437-.58 1.13-3.82 2.24-7.648 3.356-11.475l2.013-6.91c.057-.192.107-.386.172-.627-.373 0-.703.005-1.031 0a3.04 3.04 0 0 1-1.895-1.015 3.053 3.053 0 0 1 .01-4.03 3.041 3.041 0 0 1 1.9-1.004c1.413-.012 2.825-.006 4.238 0a.92.92 0 0 1 .954.914.926.926 0 0 1-.578.865.92.92 0 0 1-.36.066c-1.357.007-2.715 0-4.072 0a1.071 1.071 0 0 0-1.12.806 1.164 1.164 0 0 0 .837 1.525c.181.026.365.034.548.024h14.857V9.951h-6.973c-.696 0-1.052-.324-1.046-.938.006-.615.357-.91 1.07-.91 2.402 0 4.805-.008 7.208.006a1.001 1.001 0 0 0 .935-.457 4.969 4.969 0 0 1 2.576-1.657h1.54a4.937 4.937 0 0 1 2.615 1.695.907.907 0 0 0 .837.416c5.208-.01 10.417-.01 15.627 0a3.041 3.041 0 0 1 1.897 1.008 3.053 3.053 0 0 1-1.887 5.04c-.546.008-1.093 0-1.664 0 .023.133.03.213.051.289 1.76 6.314 3.523 12.625 5.291 18.934a.7.7 0 0 0 .449.39 1.339 1.339 0 0 1 1.044 1.692 5.913 5.913 0 0 1-2.2 3.708 8.92 8.92 0 0 1-4.894 1.996 9.884 9.884 0 0 1-7.49-1.944 5.89 5.89 0 0 1-2.265-3.73c-.146-.851.228-1.588.917-1.669.43-.05.576-.28.695-.686 1.272-4.394 2.552-8.786 3.84-13.175.555-1.91 1.107-3.82 1.673-5.758H40.475v23.805c1.486.14 2.472 1.087 3.301 2.384 1.188 1.856 2.45 3.651 3.67 5.48a1.664 1.664 0 0 0 1.456.82 15.45 15.45 0 0 1 2.029.128 9.749 9.749 0 0 1 5.53 2.478 1.375 1.375 0 0 0 1.038.409c2.663-.014 5.319 0 7.979-.015a1.29 1.29 0 0 1 1.194.572l.003 7.543ZM33.886 15.55v33.837h4.827V15.558c-2.056.967-2.783.967-4.83-.009h.003Zm-14.911.031-.137-.018-5.301 18.157h10.49l-5.052-18.14Zm39.19 18.144a60708.9 60708.9 0 0 1-5.061-18.165l-.127-.012-5.304 18.176 10.492.001Zm-28.85 17.892c2.177 1.92 4.213 3.7 6.23 5.508a.598.598 0 0 0 .899.048 44.941 44.941 0 0 1 7.512-4.446c.107-.05.206-.115.354-.2a2.98 2.98 0 0 0-2.137-1.154c-3.902-.023-7.805-.016-11.708 0-.39.046-.775.127-1.15.244Zm11.53-39.346c.065.017.132.028.2.034h14.948c.11 0 .22-.013.326-.04a1.127 1.127 0 0 0 .8-1.284c-.06-.663-.506-1.026-1.28-1.028H41.274c-.152 0-.31.024-.43.034v2.284ZM12.14 35.683c.29.848.84 1.583 1.572 2.1a7.803 7.803 0 0 0 4.23 1.552 7.968 7.968 0 0 0 6.433-2.049c.438-.5.834-1.035 1.184-1.6l-13.419-.003Zm34.159 0a4.082 4.082 0 0 0 1.56 2.108 7.835 7.835 0 0 0 4.233 1.543 7.976 7.976 0 0 0 6.39-2.019c.45-.51.855-1.055 1.212-1.633H46.3Zm-12.888-24.64a2.92 2.92 0 0 0 1.973 2.495 2.906 2.906 0 0 0 3.075-.797 2.92 2.92 0 0 0-2.14-4.886 3.083 3.083 0 0 0-2.101 1.001 3.096 3.096 0 0 0-.806 2.188v-.001ZM17.6 47.357a2.944 2.944 0 0 0-2.2-.886 2.636 2.636 0 0 0-2.197 2.249 2.888 2.888 0 0 0 1.335 2.98c1.046.631 2.104 1.239 3.158 1.854.2.117.408.216.732.386-1.916-2.623-2.082-4.106-.828-6.582Zm49.075 17.007a.54.54 0 0 1-.496.25c-1.332.039-2.663.064-3.997.153-.743.048-1.48.201-2.22.31-1.398.206-2.795.414-4.192.623-.626.093-1.253.183-1.878.277a1.852 1.852 0 0 1-1.445-.34 52.24 52.24 0 0 1-1.128-.883c-.228-.184-.265-.389-.11-.574.154-.185.345-.185.567-.015.347.265.69.533 1.033.805a1.207 1.207 0 0 0 .989.26c1.966-.297 3.934-.578 5.9-.868.748-.11 1.491-.26 2.243-.328.843-.077 1.692-.083 2.539-.109.474-.013.951 0 1.456 0 0-.36.004-.655 0-.949-.004-.207.008-.4.238-.49.23-.09.369.047.504.2l-.003 1.678Z"
                fill="var(--primary)"
              />
            </svg>
          }
          title="Design   and construction"
          info="We are keen to design and build projects according to modern designs that are compatible with the latest technologies, to ensure the provision of real estate products of high quality and competitive advantages."
        />
        <CareerrsMotivationCard
          icon={
            <svg
              width="77"
              height="77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="38.5" cy="38.5" r="38.5" fill="#9d11111f" />
              <path
                d="M66.675 57.805a2.692 2.692 0 0 1-.702.523c-.522.164-.942-.311-.945-1.019-.006-1.873 0-3.745 0-5.666h-6.796c.017.133.009.268-.026.398-.152.28-.31.7-.527.754a.968.968 0 0 1-.907-.285c-1.795-3.125-4.588-3.847-7.59-3.937a3.706 3.706 0 0 1-3.267-1.861c-1.223-1.902-2.51-3.753-3.768-5.629a2.209 2.209 0 0 0-1.692-1.155v.606c0 1.834-.013 3.669.013 5.502.026.333.122.657.282.95.158.32.41.581.589.89a3.922 3.922 0 0 0 2.32 2.032 5.535 5.535 0 0 1 1.994 1.55.72.72 0 0 0 .883.252 11.314 11.314 0 0 1 7.413-.224c3.873 1.269 6.246 4.803 6.282 9.324.005.693-.314 1.156-.809 1.175-.495.019-.863-.433-.87-1.12-.037-4.845-3.131-7.808-7.41-8.013-2.53-.032-5.02.641-7.19 1.944-2.418 1.317-4.75 2.832-7.095 4.309-.942.592-1.018.644-1.885-.121a13480.37 13480.37 0 0 1-12.243-10.799 2.434 2.434 0 0 0-2.448-.695 2.519 2.519 0 0 0-1.75 2.154 2.774 2.774 0 0 0 .918 2.676c2.328 2.072 4.669 4.125 7.005 6.185 1.356 1.196 2.726 2.372 4.053 3.604.24.276.37.633.36 1a.948.948 0 0 1-.544.658 1.025 1.025 0 0 1-.8-.198 8.094 8.094 0 0 1-1.172-1.02c-1.698-1.754-3.75-2.848-5.767-4.02-2.941-1.713-5.886-3.422-8.81-5.173a4.905 4.905 0 0 1-2.202-3.232 4.922 4.922 0 0 1 .856-3.819 3.855 3.855 0 0 1 5.117-1.191 2.683 2.683 0 0 0 2.692.512c1.177-.449 2.346.055 3.336.93 1.34 1.183 2.686 2.358 4.02 3.551.239.212.41.3.713.088a4.643 4.643 0 0 1 2.684-.754c.363-.005.726 0 1.128 0V14.199H20.35c.222.817.437 1.63.662 2.44a44704.49 44704.49 0 0 1 4.605 16.528c.108.39.24.61.65.653a1.237 1.237 0 0 1 .971 1.034 1.24 1.24 0 0 1-.028.5 5.838 5.838 0 0 1-2.178 3.784 8.912 8.912 0 0 1-4.942 2.027 9.878 9.878 0 0 1-7.443-1.921 5.862 5.862 0 0 1-2.25-3.53c-.234-1.143.09-1.692 1.094-1.968.18-.05.37-.35.437-.58 1.13-3.82 2.24-7.648 3.356-11.475l2.013-6.91c.057-.192.107-.386.172-.627-.373 0-.703.005-1.031 0a3.04 3.04 0 0 1-1.895-1.015 3.053 3.053 0 0 1 .01-4.03 3.041 3.041 0 0 1 1.9-1.004c1.413-.012 2.825-.006 4.238 0a.92.92 0 0 1 .954.914.926.926 0 0 1-.578.865.92.92 0 0 1-.36.066c-1.357.007-2.715 0-4.072 0a1.071 1.071 0 0 0-1.12.806 1.164 1.164 0 0 0 .837 1.525c.181.026.365.034.548.024h14.857V9.951h-6.973c-.696 0-1.052-.324-1.046-.938.006-.615.357-.91 1.07-.91 2.402 0 4.805-.008 7.208.006a1.001 1.001 0 0 0 .935-.457 4.969 4.969 0 0 1 2.576-1.657h1.54a4.937 4.937 0 0 1 2.615 1.695.907.907 0 0 0 .837.416c5.208-.01 10.417-.01 15.627 0a3.041 3.041 0 0 1 1.897 1.008 3.053 3.053 0 0 1-1.887 5.04c-.546.008-1.093 0-1.664 0 .023.133.03.213.051.289 1.76 6.314 3.523 12.625 5.291 18.934a.7.7 0 0 0 .449.39 1.339 1.339 0 0 1 1.044 1.692 5.913 5.913 0 0 1-2.2 3.708 8.92 8.92 0 0 1-4.894 1.996 9.884 9.884 0 0 1-7.49-1.944 5.89 5.89 0 0 1-2.265-3.73c-.146-.851.228-1.588.917-1.669.43-.05.576-.28.695-.686 1.272-4.394 2.552-8.786 3.84-13.175.555-1.91 1.107-3.82 1.673-5.758H40.475v23.805c1.486.14 2.472 1.087 3.301 2.384 1.188 1.856 2.45 3.651 3.67 5.48a1.664 1.664 0 0 0 1.456.82 15.45 15.45 0 0 1 2.029.128 9.749 9.749 0 0 1 5.53 2.478 1.375 1.375 0 0 0 1.038.409c2.663-.014 5.319 0 7.979-.015a1.29 1.29 0 0 1 1.194.572l.003 7.543ZM33.886 15.55v33.837h4.827V15.558c-2.056.967-2.783.967-4.83-.009h.003Zm-14.911.031-.137-.018-5.301 18.157h10.49l-5.052-18.14Zm39.19 18.144a60708.9 60708.9 0 0 1-5.061-18.165l-.127-.012-5.304 18.176 10.492.001Zm-28.85 17.892c2.177 1.92 4.213 3.7 6.23 5.508a.598.598 0 0 0 .899.048 44.941 44.941 0 0 1 7.512-4.446c.107-.05.206-.115.354-.2a2.98 2.98 0 0 0-2.137-1.154c-3.902-.023-7.805-.016-11.708 0-.39.046-.775.127-1.15.244Zm11.53-39.346c.065.017.132.028.2.034h14.948c.11 0 .22-.013.326-.04a1.127 1.127 0 0 0 .8-1.284c-.06-.663-.506-1.026-1.28-1.028H41.274c-.152 0-.31.024-.43.034v2.284ZM12.14 35.683c.29.848.84 1.583 1.572 2.1a7.803 7.803 0 0 0 4.23 1.552 7.968 7.968 0 0 0 6.433-2.049c.438-.5.834-1.035 1.184-1.6l-13.419-.003Zm34.159 0a4.082 4.082 0 0 0 1.56 2.108 7.835 7.835 0 0 0 4.233 1.543 7.976 7.976 0 0 0 6.39-2.019c.45-.51.855-1.055 1.212-1.633H46.3Zm-12.888-24.64a2.92 2.92 0 0 0 1.973 2.495 2.906 2.906 0 0 0 3.075-.797 2.92 2.92 0 0 0-2.14-4.886 3.083 3.083 0 0 0-2.101 1.001 3.096 3.096 0 0 0-.806 2.188v-.001ZM17.6 47.357a2.944 2.944 0 0 0-2.2-.886 2.636 2.636 0 0 0-2.197 2.249 2.888 2.888 0 0 0 1.335 2.98c1.046.631 2.104 1.239 3.158 1.854.2.117.408.216.732.386-1.916-2.623-2.082-4.106-.828-6.582Zm49.075 17.007a.54.54 0 0 1-.496.25c-1.332.039-2.663.064-3.997.153-.743.048-1.48.201-2.22.31-1.398.206-2.795.414-4.192.623-.626.093-1.253.183-1.878.277a1.852 1.852 0 0 1-1.445-.34 52.24 52.24 0 0 1-1.128-.883c-.228-.184-.265-.389-.11-.574.154-.185.345-.185.567-.015.347.265.69.533 1.033.805a1.207 1.207 0 0 0 .989.26c1.966-.297 3.934-.578 5.9-.868.748-.11 1.491-.26 2.243-.328.843-.077 1.692-.083 2.539-.109.474-.013.951 0 1.456 0 0-.36.004-.655 0-.949-.004-.207.008-.4.238-.49.23-.09.369.047.504.2l-.003 1.678Z"
                fill="var(--primary)"
              />
            </svg>
          }
          title="Consultations and studies"
          info="Our experience in the field of real estate development has resulted in providing consultations and studies for major projects, through an experienced team responsible for planning and implementing a wide range of real estate projects.
         "
        />
        <CareerrsMotivationCard
          icon={
            <svg
              width="77"
              height="77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="38.5" cy="38.5" r="38.5" fill="#9d11111f" />
              <path
                d="M66.675 57.805a2.692 2.692 0 0 1-.702.523c-.522.164-.942-.311-.945-1.019-.006-1.873 0-3.745 0-5.666h-6.796c.017.133.009.268-.026.398-.152.28-.31.7-.527.754a.968.968 0 0 1-.907-.285c-1.795-3.125-4.588-3.847-7.59-3.937a3.706 3.706 0 0 1-3.267-1.861c-1.223-1.902-2.51-3.753-3.768-5.629a2.209 2.209 0 0 0-1.692-1.155v.606c0 1.834-.013 3.669.013 5.502.026.333.122.657.282.95.158.32.41.581.589.89a3.922 3.922 0 0 0 2.32 2.032 5.535 5.535 0 0 1 1.994 1.55.72.72 0 0 0 .883.252 11.314 11.314 0 0 1 7.413-.224c3.873 1.269 6.246 4.803 6.282 9.324.005.693-.314 1.156-.809 1.175-.495.019-.863-.433-.87-1.12-.037-4.845-3.131-7.808-7.41-8.013-2.53-.032-5.02.641-7.19 1.944-2.418 1.317-4.75 2.832-7.095 4.309-.942.592-1.018.644-1.885-.121a13480.37 13480.37 0 0 1-12.243-10.799 2.434 2.434 0 0 0-2.448-.695 2.519 2.519 0 0 0-1.75 2.154 2.774 2.774 0 0 0 .918 2.676c2.328 2.072 4.669 4.125 7.005 6.185 1.356 1.196 2.726 2.372 4.053 3.604.24.276.37.633.36 1a.948.948 0 0 1-.544.658 1.025 1.025 0 0 1-.8-.198 8.094 8.094 0 0 1-1.172-1.02c-1.698-1.754-3.75-2.848-5.767-4.02-2.941-1.713-5.886-3.422-8.81-5.173a4.905 4.905 0 0 1-2.202-3.232 4.922 4.922 0 0 1 .856-3.819 3.855 3.855 0 0 1 5.117-1.191 2.683 2.683 0 0 0 2.692.512c1.177-.449 2.346.055 3.336.93 1.34 1.183 2.686 2.358 4.02 3.551.239.212.41.3.713.088a4.643 4.643 0 0 1 2.684-.754c.363-.005.726 0 1.128 0V14.199H20.35c.222.817.437 1.63.662 2.44a44704.49 44704.49 0 0 1 4.605 16.528c.108.39.24.61.65.653a1.237 1.237 0 0 1 .971 1.034 1.24 1.24 0 0 1-.028.5 5.838 5.838 0 0 1-2.178 3.784 8.912 8.912 0 0 1-4.942 2.027 9.878 9.878 0 0 1-7.443-1.921 5.862 5.862 0 0 1-2.25-3.53c-.234-1.143.09-1.692 1.094-1.968.18-.05.37-.35.437-.58 1.13-3.82 2.24-7.648 3.356-11.475l2.013-6.91c.057-.192.107-.386.172-.627-.373 0-.703.005-1.031 0a3.04 3.04 0 0 1-1.895-1.015 3.053 3.053 0 0 1 .01-4.03 3.041 3.041 0 0 1 1.9-1.004c1.413-.012 2.825-.006 4.238 0a.92.92 0 0 1 .954.914.926.926 0 0 1-.578.865.92.92 0 0 1-.36.066c-1.357.007-2.715 0-4.072 0a1.071 1.071 0 0 0-1.12.806 1.164 1.164 0 0 0 .837 1.525c.181.026.365.034.548.024h14.857V9.951h-6.973c-.696 0-1.052-.324-1.046-.938.006-.615.357-.91 1.07-.91 2.402 0 4.805-.008 7.208.006a1.001 1.001 0 0 0 .935-.457 4.969 4.969 0 0 1 2.576-1.657h1.54a4.937 4.937 0 0 1 2.615 1.695.907.907 0 0 0 .837.416c5.208-.01 10.417-.01 15.627 0a3.041 3.041 0 0 1 1.897 1.008 3.053 3.053 0 0 1-1.887 5.04c-.546.008-1.093 0-1.664 0 .023.133.03.213.051.289 1.76 6.314 3.523 12.625 5.291 18.934a.7.7 0 0 0 .449.39 1.339 1.339 0 0 1 1.044 1.692 5.913 5.913 0 0 1-2.2 3.708 8.92 8.92 0 0 1-4.894 1.996 9.884 9.884 0 0 1-7.49-1.944 5.89 5.89 0 0 1-2.265-3.73c-.146-.851.228-1.588.917-1.669.43-.05.576-.28.695-.686 1.272-4.394 2.552-8.786 3.84-13.175.555-1.91 1.107-3.82 1.673-5.758H40.475v23.805c1.486.14 2.472 1.087 3.301 2.384 1.188 1.856 2.45 3.651 3.67 5.48a1.664 1.664 0 0 0 1.456.82 15.45 15.45 0 0 1 2.029.128 9.749 9.749 0 0 1 5.53 2.478 1.375 1.375 0 0 0 1.038.409c2.663-.014 5.319 0 7.979-.015a1.29 1.29 0 0 1 1.194.572l.003 7.543ZM33.886 15.55v33.837h4.827V15.558c-2.056.967-2.783.967-4.83-.009h.003Zm-14.911.031-.137-.018-5.301 18.157h10.49l-5.052-18.14Zm39.19 18.144a60708.9 60708.9 0 0 1-5.061-18.165l-.127-.012-5.304 18.176 10.492.001Zm-28.85 17.892c2.177 1.92 4.213 3.7 6.23 5.508a.598.598 0 0 0 .899.048 44.941 44.941 0 0 1 7.512-4.446c.107-.05.206-.115.354-.2a2.98 2.98 0 0 0-2.137-1.154c-3.902-.023-7.805-.016-11.708 0-.39.046-.775.127-1.15.244Zm11.53-39.346c.065.017.132.028.2.034h14.948c.11 0 .22-.013.326-.04a1.127 1.127 0 0 0 .8-1.284c-.06-.663-.506-1.026-1.28-1.028H41.274c-.152 0-.31.024-.43.034v2.284ZM12.14 35.683c.29.848.84 1.583 1.572 2.1a7.803 7.803 0 0 0 4.23 1.552 7.968 7.968 0 0 0 6.433-2.049c.438-.5.834-1.035 1.184-1.6l-13.419-.003Zm34.159 0a4.082 4.082 0 0 0 1.56 2.108 7.835 7.835 0 0 0 4.233 1.543 7.976 7.976 0 0 0 6.39-2.019c.45-.51.855-1.055 1.212-1.633H46.3Zm-12.888-24.64a2.92 2.92 0 0 0 1.973 2.495 2.906 2.906 0 0 0 3.075-.797 2.92 2.92 0 0 0-2.14-4.886 3.083 3.083 0 0 0-2.101 1.001 3.096 3.096 0 0 0-.806 2.188v-.001ZM17.6 47.357a2.944 2.944 0 0 0-2.2-.886 2.636 2.636 0 0 0-2.197 2.249 2.888 2.888 0 0 0 1.335 2.98c1.046.631 2.104 1.239 3.158 1.854.2.117.408.216.732.386-1.916-2.623-2.082-4.106-.828-6.582Zm49.075 17.007a.54.54 0 0 1-.496.25c-1.332.039-2.663.064-3.997.153-.743.048-1.48.201-2.22.31-1.398.206-2.795.414-4.192.623-.626.093-1.253.183-1.878.277a1.852 1.852 0 0 1-1.445-.34 52.24 52.24 0 0 1-1.128-.883c-.228-.184-.265-.389-.11-.574.154-.185.345-.185.567-.015.347.265.69.533 1.033.805a1.207 1.207 0 0 0 .989.26c1.966-.297 3.934-.578 5.9-.868.748-.11 1.491-.26 2.243-.328.843-.077 1.692-.083 2.539-.109.474-.013.951 0 1.456 0 0-.36.004-.655 0-.949-.004-.207.008-.4.238-.49.23-.09.369.047.504.2l-.003 1.678Z"
                fill="var(--primary)"
              />
            </svg>
          }
          title="Asset management and development"
          info="Through optimal use of resources and assets and raising their returns to beneficiaries, using our expertise in the field of operational management and enhancing financial resources."
        />
        <CareerrsMotivationCard
          icon={
            <svg
              width="77"
              height="77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="38.5" cy="38.5" r="38.5" fill="#9d11111f" />
              <path
                d="M66.675 57.805a2.692 2.692 0 0 1-.702.523c-.522.164-.942-.311-.945-1.019-.006-1.873 0-3.745 0-5.666h-6.796c.017.133.009.268-.026.398-.152.28-.31.7-.527.754a.968.968 0 0 1-.907-.285c-1.795-3.125-4.588-3.847-7.59-3.937a3.706 3.706 0 0 1-3.267-1.861c-1.223-1.902-2.51-3.753-3.768-5.629a2.209 2.209 0 0 0-1.692-1.155v.606c0 1.834-.013 3.669.013 5.502.026.333.122.657.282.95.158.32.41.581.589.89a3.922 3.922 0 0 0 2.32 2.032 5.535 5.535 0 0 1 1.994 1.55.72.72 0 0 0 .883.252 11.314 11.314 0 0 1 7.413-.224c3.873 1.269 6.246 4.803 6.282 9.324.005.693-.314 1.156-.809 1.175-.495.019-.863-.433-.87-1.12-.037-4.845-3.131-7.808-7.41-8.013-2.53-.032-5.02.641-7.19 1.944-2.418 1.317-4.75 2.832-7.095 4.309-.942.592-1.018.644-1.885-.121a13480.37 13480.37 0 0 1-12.243-10.799 2.434 2.434 0 0 0-2.448-.695 2.519 2.519 0 0 0-1.75 2.154 2.774 2.774 0 0 0 .918 2.676c2.328 2.072 4.669 4.125 7.005 6.185 1.356 1.196 2.726 2.372 4.053 3.604.24.276.37.633.36 1a.948.948 0 0 1-.544.658 1.025 1.025 0 0 1-.8-.198 8.094 8.094 0 0 1-1.172-1.02c-1.698-1.754-3.75-2.848-5.767-4.02-2.941-1.713-5.886-3.422-8.81-5.173a4.905 4.905 0 0 1-2.202-3.232 4.922 4.922 0 0 1 .856-3.819 3.855 3.855 0 0 1 5.117-1.191 2.683 2.683 0 0 0 2.692.512c1.177-.449 2.346.055 3.336.93 1.34 1.183 2.686 2.358 4.02 3.551.239.212.41.3.713.088a4.643 4.643 0 0 1 2.684-.754c.363-.005.726 0 1.128 0V14.199H20.35c.222.817.437 1.63.662 2.44a44704.49 44704.49 0 0 1 4.605 16.528c.108.39.24.61.65.653a1.237 1.237 0 0 1 .971 1.034 1.24 1.24 0 0 1-.028.5 5.838 5.838 0 0 1-2.178 3.784 8.912 8.912 0 0 1-4.942 2.027 9.878 9.878 0 0 1-7.443-1.921 5.862 5.862 0 0 1-2.25-3.53c-.234-1.143.09-1.692 1.094-1.968.18-.05.37-.35.437-.58 1.13-3.82 2.24-7.648 3.356-11.475l2.013-6.91c.057-.192.107-.386.172-.627-.373 0-.703.005-1.031 0a3.04 3.04 0 0 1-1.895-1.015 3.053 3.053 0 0 1 .01-4.03 3.041 3.041 0 0 1 1.9-1.004c1.413-.012 2.825-.006 4.238 0a.92.92 0 0 1 .954.914.926.926 0 0 1-.578.865.92.92 0 0 1-.36.066c-1.357.007-2.715 0-4.072 0a1.071 1.071 0 0 0-1.12.806 1.164 1.164 0 0 0 .837 1.525c.181.026.365.034.548.024h14.857V9.951h-6.973c-.696 0-1.052-.324-1.046-.938.006-.615.357-.91 1.07-.91 2.402 0 4.805-.008 7.208.006a1.001 1.001 0 0 0 .935-.457 4.969 4.969 0 0 1 2.576-1.657h1.54a4.937 4.937 0 0 1 2.615 1.695.907.907 0 0 0 .837.416c5.208-.01 10.417-.01 15.627 0a3.041 3.041 0 0 1 1.897 1.008 3.053 3.053 0 0 1-1.887 5.04c-.546.008-1.093 0-1.664 0 .023.133.03.213.051.289 1.76 6.314 3.523 12.625 5.291 18.934a.7.7 0 0 0 .449.39 1.339 1.339 0 0 1 1.044 1.692 5.913 5.913 0 0 1-2.2 3.708 8.92 8.92 0 0 1-4.894 1.996 9.884 9.884 0 0 1-7.49-1.944 5.89 5.89 0 0 1-2.265-3.73c-.146-.851.228-1.588.917-1.669.43-.05.576-.28.695-.686 1.272-4.394 2.552-8.786 3.84-13.175.555-1.91 1.107-3.82 1.673-5.758H40.475v23.805c1.486.14 2.472 1.087 3.301 2.384 1.188 1.856 2.45 3.651 3.67 5.48a1.664 1.664 0 0 0 1.456.82 15.45 15.45 0 0 1 2.029.128 9.749 9.749 0 0 1 5.53 2.478 1.375 1.375 0 0 0 1.038.409c2.663-.014 5.319 0 7.979-.015a1.29 1.29 0 0 1 1.194.572l.003 7.543ZM33.886 15.55v33.837h4.827V15.558c-2.056.967-2.783.967-4.83-.009h.003Zm-14.911.031-.137-.018-5.301 18.157h10.49l-5.052-18.14Zm39.19 18.144a60708.9 60708.9 0 0 1-5.061-18.165l-.127-.012-5.304 18.176 10.492.001Zm-28.85 17.892c2.177 1.92 4.213 3.7 6.23 5.508a.598.598 0 0 0 .899.048 44.941 44.941 0 0 1 7.512-4.446c.107-.05.206-.115.354-.2a2.98 2.98 0 0 0-2.137-1.154c-3.902-.023-7.805-.016-11.708 0-.39.046-.775.127-1.15.244Zm11.53-39.346c.065.017.132.028.2.034h14.948c.11 0 .22-.013.326-.04a1.127 1.127 0 0 0 .8-1.284c-.06-.663-.506-1.026-1.28-1.028H41.274c-.152 0-.31.024-.43.034v2.284ZM12.14 35.683c.29.848.84 1.583 1.572 2.1a7.803 7.803 0 0 0 4.23 1.552 7.968 7.968 0 0 0 6.433-2.049c.438-.5.834-1.035 1.184-1.6l-13.419-.003Zm34.159 0a4.082 4.082 0 0 0 1.56 2.108 7.835 7.835 0 0 0 4.233 1.543 7.976 7.976 0 0 0 6.39-2.019c.45-.51.855-1.055 1.212-1.633H46.3Zm-12.888-24.64a2.92 2.92 0 0 0 1.973 2.495 2.906 2.906 0 0 0 3.075-.797 2.92 2.92 0 0 0-2.14-4.886 3.083 3.083 0 0 0-2.101 1.001 3.096 3.096 0 0 0-.806 2.188v-.001ZM17.6 47.357a2.944 2.944 0 0 0-2.2-.886 2.636 2.636 0 0 0-2.197 2.249 2.888 2.888 0 0 0 1.335 2.98c1.046.631 2.104 1.239 3.158 1.854.2.117.408.216.732.386-1.916-2.623-2.082-4.106-.828-6.582Zm49.075 17.007a.54.54 0 0 1-.496.25c-1.332.039-2.663.064-3.997.153-.743.048-1.48.201-2.22.31-1.398.206-2.795.414-4.192.623-.626.093-1.253.183-1.878.277a1.852 1.852 0 0 1-1.445-.34 52.24 52.24 0 0 1-1.128-.883c-.228-.184-.265-.389-.11-.574.154-.185.345-.185.567-.015.347.265.69.533 1.033.805a1.207 1.207 0 0 0 .989.26c1.966-.297 3.934-.578 5.9-.868.748-.11 1.491-.26 2.243-.328.843-.077 1.692-.083 2.539-.109.474-.013.951 0 1.456 0 0-.36.004-.655 0-.949-.004-.207.008-.4.238-.49.23-.09.369.047.504.2l-.003 1.678Z"
                fill="var(--primary)"
              />
            </svg>
          }
          title="Development and acquisitions"
          info="Providing innovative real estate solutions that are consistent with the Kingdom’s Vision 2030 to increase the percentage of citizen ownership, by providing multiple options that suit all segments and seizing the available opportunities."
        />
        <CareerrsMotivationCard
          icon={
            <svg
              width="77"
              height="77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="38.5" cy="38.5" r="38.5" fill="#9d11111f" />
              <path
                d="M66.675 57.805a2.692 2.692 0 0 1-.702.523c-.522.164-.942-.311-.945-1.019-.006-1.873 0-3.745 0-5.666h-6.796c.017.133.009.268-.026.398-.152.28-.31.7-.527.754a.968.968 0 0 1-.907-.285c-1.795-3.125-4.588-3.847-7.59-3.937a3.706 3.706 0 0 1-3.267-1.861c-1.223-1.902-2.51-3.753-3.768-5.629a2.209 2.209 0 0 0-1.692-1.155v.606c0 1.834-.013 3.669.013 5.502.026.333.122.657.282.95.158.32.41.581.589.89a3.922 3.922 0 0 0 2.32 2.032 5.535 5.535 0 0 1 1.994 1.55.72.72 0 0 0 .883.252 11.314 11.314 0 0 1 7.413-.224c3.873 1.269 6.246 4.803 6.282 9.324.005.693-.314 1.156-.809 1.175-.495.019-.863-.433-.87-1.12-.037-4.845-3.131-7.808-7.41-8.013-2.53-.032-5.02.641-7.19 1.944-2.418 1.317-4.75 2.832-7.095 4.309-.942.592-1.018.644-1.885-.121a13480.37 13480.37 0 0 1-12.243-10.799 2.434 2.434 0 0 0-2.448-.695 2.519 2.519 0 0 0-1.75 2.154 2.774 2.774 0 0 0 .918 2.676c2.328 2.072 4.669 4.125 7.005 6.185 1.356 1.196 2.726 2.372 4.053 3.604.24.276.37.633.36 1a.948.948 0 0 1-.544.658 1.025 1.025 0 0 1-.8-.198 8.094 8.094 0 0 1-1.172-1.02c-1.698-1.754-3.75-2.848-5.767-4.02-2.941-1.713-5.886-3.422-8.81-5.173a4.905 4.905 0 0 1-2.202-3.232 4.922 4.922 0 0 1 .856-3.819 3.855 3.855 0 0 1 5.117-1.191 2.683 2.683 0 0 0 2.692.512c1.177-.449 2.346.055 3.336.93 1.34 1.183 2.686 2.358 4.02 3.551.239.212.41.3.713.088a4.643 4.643 0 0 1 2.684-.754c.363-.005.726 0 1.128 0V14.199H20.35c.222.817.437 1.63.662 2.44a44704.49 44704.49 0 0 1 4.605 16.528c.108.39.24.61.65.653a1.237 1.237 0 0 1 .971 1.034 1.24 1.24 0 0 1-.028.5 5.838 5.838 0 0 1-2.178 3.784 8.912 8.912 0 0 1-4.942 2.027 9.878 9.878 0 0 1-7.443-1.921 5.862 5.862 0 0 1-2.25-3.53c-.234-1.143.09-1.692 1.094-1.968.18-.05.37-.35.437-.58 1.13-3.82 2.24-7.648 3.356-11.475l2.013-6.91c.057-.192.107-.386.172-.627-.373 0-.703.005-1.031 0a3.04 3.04 0 0 1-1.895-1.015 3.053 3.053 0 0 1 .01-4.03 3.041 3.041 0 0 1 1.9-1.004c1.413-.012 2.825-.006 4.238 0a.92.92 0 0 1 .954.914.926.926 0 0 1-.578.865.92.92 0 0 1-.36.066c-1.357.007-2.715 0-4.072 0a1.071 1.071 0 0 0-1.12.806 1.164 1.164 0 0 0 .837 1.525c.181.026.365.034.548.024h14.857V9.951h-6.973c-.696 0-1.052-.324-1.046-.938.006-.615.357-.91 1.07-.91 2.402 0 4.805-.008 7.208.006a1.001 1.001 0 0 0 .935-.457 4.969 4.969 0 0 1 2.576-1.657h1.54a4.937 4.937 0 0 1 2.615 1.695.907.907 0 0 0 .837.416c5.208-.01 10.417-.01 15.627 0a3.041 3.041 0 0 1 1.897 1.008 3.053 3.053 0 0 1-1.887 5.04c-.546.008-1.093 0-1.664 0 .023.133.03.213.051.289 1.76 6.314 3.523 12.625 5.291 18.934a.7.7 0 0 0 .449.39 1.339 1.339 0 0 1 1.044 1.692 5.913 5.913 0 0 1-2.2 3.708 8.92 8.92 0 0 1-4.894 1.996 9.884 9.884 0 0 1-7.49-1.944 5.89 5.89 0 0 1-2.265-3.73c-.146-.851.228-1.588.917-1.669.43-.05.576-.28.695-.686 1.272-4.394 2.552-8.786 3.84-13.175.555-1.91 1.107-3.82 1.673-5.758H40.475v23.805c1.486.14 2.472 1.087 3.301 2.384 1.188 1.856 2.45 3.651 3.67 5.48a1.664 1.664 0 0 0 1.456.82 15.45 15.45 0 0 1 2.029.128 9.749 9.749 0 0 1 5.53 2.478 1.375 1.375 0 0 0 1.038.409c2.663-.014 5.319 0 7.979-.015a1.29 1.29 0 0 1 1.194.572l.003 7.543ZM33.886 15.55v33.837h4.827V15.558c-2.056.967-2.783.967-4.83-.009h.003Zm-14.911.031-.137-.018-5.301 18.157h10.49l-5.052-18.14Zm39.19 18.144a60708.9 60708.9 0 0 1-5.061-18.165l-.127-.012-5.304 18.176 10.492.001Zm-28.85 17.892c2.177 1.92 4.213 3.7 6.23 5.508a.598.598 0 0 0 .899.048 44.941 44.941 0 0 1 7.512-4.446c.107-.05.206-.115.354-.2a2.98 2.98 0 0 0-2.137-1.154c-3.902-.023-7.805-.016-11.708 0-.39.046-.775.127-1.15.244Zm11.53-39.346c.065.017.132.028.2.034h14.948c.11 0 .22-.013.326-.04a1.127 1.127 0 0 0 .8-1.284c-.06-.663-.506-1.026-1.28-1.028H41.274c-.152 0-.31.024-.43.034v2.284ZM12.14 35.683c.29.848.84 1.583 1.572 2.1a7.803 7.803 0 0 0 4.23 1.552 7.968 7.968 0 0 0 6.433-2.049c.438-.5.834-1.035 1.184-1.6l-13.419-.003Zm34.159 0a4.082 4.082 0 0 0 1.56 2.108 7.835 7.835 0 0 0 4.233 1.543 7.976 7.976 0 0 0 6.39-2.019c.45-.51.855-1.055 1.212-1.633H46.3Zm-12.888-24.64a2.92 2.92 0 0 0 1.973 2.495 2.906 2.906 0 0 0 3.075-.797 2.92 2.92 0 0 0-2.14-4.886 3.083 3.083 0 0 0-2.101 1.001 3.096 3.096 0 0 0-.806 2.188v-.001ZM17.6 47.357a2.944 2.944 0 0 0-2.2-.886 2.636 2.636 0 0 0-2.197 2.249 2.888 2.888 0 0 0 1.335 2.98c1.046.631 2.104 1.239 3.158 1.854.2.117.408.216.732.386-1.916-2.623-2.082-4.106-.828-6.582Zm49.075 17.007a.54.54 0 0 1-.496.25c-1.332.039-2.663.064-3.997.153-.743.048-1.48.201-2.22.31-1.398.206-2.795.414-4.192.623-.626.093-1.253.183-1.878.277a1.852 1.852 0 0 1-1.445-.34 52.24 52.24 0 0 1-1.128-.883c-.228-.184-.265-.389-.11-.574.154-.185.345-.185.567-.015.347.265.69.533 1.033.805a1.207 1.207 0 0 0 .989.26c1.966-.297 3.934-.578 5.9-.868.748-.11 1.491-.26 2.243-.328.843-.077 1.692-.083 2.539-.109.474-.013.951 0 1.456 0 0-.36.004-.655 0-.949-.004-.207.008-.4.238-.49.23-.09.369.047.504.2l-.003 1.678Z"
                fill="var(--primary)"
              />
            </svg>
          }
          title="Design   and construction"
          info="We are keen to design and build projects according to modern designs that are compatible with the latest technologies, to ensure the provision of real estate products of high quality and competitive advantages."
        />
      </div>
    </div>
  );
}

export default memo(CareersMotivation);