import { Icon } from '@aws-amplify/ui-react';
import styles from '../GlobalNav.module.scss';

export enum NavMenuIconType {
  TWITTER = 'TWITTER',
  DISCORD = 'DISCORD',
}

export function IconLink({ iconType }: { iconType: NavMenuIconType | string }) {
  switch (iconType) {
    case NavMenuIconType.TWITTER:
      return (
        <Icon
          className={styles['icon-link-hover']}
          ariaLabel="Twitter icon"
          viewBox={{ width: 20, height: 18 }}
          pathData="M20 2.79906C19.2641 3.12541 18.4733 3.34598 17.6433 3.44517C18.4905 2.93733 19.1411 2.1332 19.4475 1.17508C18.6547 1.64525 17.7765 1.98675 16.8419 2.1708C16.0933 1.37334 15.027 0.875 13.8468 0.875C11.5807 0.875 9.74344 2.71216 9.74344 4.97815C9.74344 5.29974 9.7798 5.61292 9.84974 5.91322C6.43952 5.74211 3.41607 4.10855 1.3923 1.62609C1.0391 2.23211 0.836753 2.93696 0.836753 3.68893C0.836753 5.11246 1.56121 6.3684 2.6622 7.1042C1.98954 7.08291 1.35689 6.89834 0.803614 6.59101C0.803321 6.60813 0.803321 6.62532 0.803321 6.64258C0.803321 8.63066 2.21771 10.2891 4.09481 10.666C3.75047 10.7598 3.38798 10.8099 3.01372 10.8099C2.74933 10.8099 2.49226 10.7842 2.24178 10.7363C2.76389 12.3665 4.27923 13.5528 6.07476 13.5859C4.67047 14.6864 2.9012 15.3424 0.978821 15.3424C0.647646 15.3424 0.321007 15.323 0 15.2851C1.81587 16.4493 3.97271 17.1286 6.28992 17.1286C13.8372 17.1286 17.9644 10.8762 17.9644 5.45395C17.9644 5.27604 17.9604 5.09908 17.9525 4.92314C18.7542 4.34462 19.4499 3.62192 20 2.79906Z"
        />
      );
    case NavMenuIconType.DISCORD:
      return (
        <Icon
          className={styles['icon-link-hover']}
          ariaLabel="Discord icon"
          viewBox={{ width: 20, height: 16 }}
          pathData="M16.9419 1.6144C15.6473 1.01435 14.263 0.578267 12.8157 0.329956C12.638 0.648282 12.4304 1.07644 12.2872 1.41703C10.7488 1.18784 9.22445 1.18784 7.7143 1.41703C7.57116 1.07644 7.3588 0.648282 7.17947 0.329956C5.73067 0.578267 4.3448 1.01596 3.05016 1.61757C0.438869 5.52654 -0.269009 9.33842 0.0849306 13.0962C1.81688 14.3774 3.49534 15.1557 5.14548 15.665C5.55291 15.1096 5.91628 14.5191 6.22931 13.8968C5.63313 13.6723 5.06211 13.3954 4.52256 13.0739C4.6657 12.9689 4.80571 12.859 4.94098 12.746C8.23183 14.2708 11.8074 14.2708 15.0589 12.746C15.1958 12.859 15.3358 12.9689 15.4774 13.0739C14.9362 13.397 14.3637 13.6739 13.7675 13.8984C14.0805 14.5191 14.4423 15.1112 14.8513 15.6666C16.503 15.1573 18.1831 14.379 19.915 13.0962C20.3303 8.73998 19.2056 4.96311 16.9419 1.6144ZM6.67765 10.7852C5.68977 10.7852 4.87963 9.8716 4.87963 8.75907C4.87963 7.64655 5.67247 6.73138 6.67765 6.73138C7.68285 6.73138 8.49297 7.64495 8.47567 8.75907C8.47723 9.8716 7.68285 10.7852 6.67765 10.7852ZM13.3223 10.7852C12.3344 10.7852 11.5243 9.8716 11.5243 8.75907C11.5243 7.64655 12.3171 6.73138 13.3223 6.73138C14.3275 6.73138 15.1376 7.64495 15.1203 8.75907C15.1203 9.8716 14.3275 10.7852 13.3223 10.7852Z"
        />
      );
    default:
      return null;
  }
}
