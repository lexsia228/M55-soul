/**
 * M55 SOUL BRIDGE HOOK
 * Sends User Identity & Plan from React (Clerk) to Legacy (iframe)
 */
import { useEffect, useRef } from 'react';
import { useUser } from '@clerk/nextjs';
import { adaptClerkUserToLegacy } from '../lib/soul/adapter';

export function useSoulBridge() {
  const { user, isLoaded } = useUser();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isLoaded || !iframeRef.current?.contentWindow) return;

    const legacyUser = adaptClerkUserToLegacy(user);
    const message = {
      type: 'M55_SOUL_SYNC',
      payload: legacyUser,
      timestamp: Date.now()
    };

    const send = () => {
      iframeRef.current?.contentWindow?.postMessage(message, window.location.origin);
    };

    send();
    if (iframeRef.current) {
      iframeRef.current.onload = send;
    }
  }, [user, isLoaded]);

  return iframeRef;
}
