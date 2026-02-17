'use client';

import { useRef } from 'react';
import { LegacyBridge } from './LegacyBridge';
import styles from '../../../components/shell/ShellLayout.module.css';

type LegacyFrameProps = {
  src: string;
  title: string;
  className?: string;
  sandbox?: string;
  referrerPolicy?: React.IframeHTMLAttributes<HTMLIFrameElement>['referrerPolicy'];
};

export default function LegacyFrame({
  src,
  title,
  className = styles.iframe,
  sandbox = 'allow-scripts allow-same-origin allow-forms',
  referrerPolicy = 'no-referrer',
}: LegacyFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <>
      <iframe
        ref={iframeRef}
        className={className}
        src={src}
        title={title}
        sandbox={sandbox}
        referrerPolicy={referrerPolicy}
      />
      <LegacyBridge iframeRef={iframeRef} />
    </>
  );
}
