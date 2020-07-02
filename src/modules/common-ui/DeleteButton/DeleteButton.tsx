import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type DeleteButtonProps = {
  action: any;
  background?: boolean;
  color?: string;
};

export const DeleteButton = ({
  action,
  background,
  color = "#8C929A",
}: DeleteButtonProps) => (
  <button
    type="button"
    className={classNames(styles.closeButton, {
      [styles.background]: background,
    })}
    onClick={() => action()}
  >
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g
        id="ICONS/GENERIC/delete"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M13.3894237,0 C13.8987119,0 14.3290847,0.176542373 14.668339,0.524338983 C15.2044746,1.07471186 15.3610847,1.93220339 15.4058305,2.44067797 L15.4058305,2.44067797 L21.1186441,2.44067797 C21.3431864,2.44067797 21.5254237,2.62250847 21.5254237,2.84745763 C21.5254237,3.07240678 21.3431864,3.25423729 21.1186441,3.25423729 L21.1186441,3.25423729 L20.2884068,3.25423729 L19.5090169,21.9831864 C19.4943729,22.6751186 19.0583051,24 17.5129492,24 L17.5129492,24 L6.01247458,24 C4.46711864,24 4.03105085,22.6751186 4.016,21.9746441 L4.016,21.9746441 L3.23701695,3.25423729 L2.40677966,3.25423729 C2.18223729,3.25423729 2,3.07240678 2,2.84745763 C2,2.62250847 2.18223729,2.44067797 2.40677966,2.44067797 L2.40677966,2.44067797 L7.30562712,2.44067797 C7.35037288,1.93220339 7.50698305,1.07471186 8.04311864,0.524338983 C8.38237288,0.176542373 8.81274576,0 9.3220339,0 L9.3220339,0 Z M19.4740339,3.25423729 L4.05098305,3.25423729 L4.82915254,21.9490169 C4.83362712,22.0812203 4.90033898,23.1864407 6.01247458,23.1864407 L6.01247458,23.1864407 L17.5129492,23.1864407 C18.6372881,23.1864407 18.6934237,22.0832542 18.6958644,21.9575593 L18.6958644,21.9575593 L19.4740339,3.25423729 Z M11.7627119,6.50847458 C11.9872542,6.50847458 12.1694915,6.69030508 12.1694915,6.91525424 L12.1694915,6.91525424 L12.1694915,20.3389831 C12.1694915,20.5639322 11.9872542,20.7457627 11.7627119,20.7457627 C11.5381695,20.7457627 11.3559322,20.5639322 11.3559322,20.3389831 L11.3559322,20.3389831 L11.3559322,6.91525424 C11.3559322,6.69030508 11.5381695,6.50847458 11.7627119,6.50847458 Z M7.69491525,6.50847458 C7.91945763,6.50847458 8.10169492,6.69030508 8.10169492,6.91525424 L8.10169492,6.91525424 L8.10169492,20.3389831 C8.10169492,20.5639322 7.91945763,20.7457627 7.69491525,20.7457627 C7.47037288,20.7457627 7.28813559,20.5639322 7.28813559,20.3389831 L7.28813559,20.3389831 L7.28813559,6.91525424 C7.28813559,6.69030508 7.47037288,6.50847458 7.69491525,6.50847458 Z M15.8305085,6.50847458 C16.0550508,6.50847458 16.2372881,6.69030508 16.2372881,6.91525424 L16.2372881,6.91525424 L16.2372881,20.3389831 C16.2372881,20.5639322 16.0550508,20.7457627 15.8305085,20.7457627 C15.6059661,20.7457627 15.4237288,20.5639322 15.4237288,20.3389831 L15.4237288,20.3389831 L15.4237288,6.91525424 C15.4237288,6.69030508 15.6059661,6.50847458 15.8305085,6.50847458 Z M13.3894237,0.813559322 L9.3220339,0.813559322 C9.03688136,0.813559322 8.80949153,0.904271186 8.62725424,1.09057627 C8.30020339,1.42535593 8.16881356,2.01437288 8.12325424,2.44067797 L8.12325424,2.44067797 L14.5886102,2.44067797 C14.5430508,2.01437288 14.411661,1.42535593 14.0842034,1.09057627 C13.9019661,0.904271186 13.6745763,0.813559322 13.3894237,0.813559322 L13.3894237,0.813559322 Z"
          id="ICONS/delete"
          fill={color}
        />
      </g>
    </svg>
  </button>
);
