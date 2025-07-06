'use client';

import Script from 'next/script';

export function EmbedAI() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/gh/devvcore/embedai/embed.js"
      data-org-id="org_496eba39-60c2-4ecc-8e3e-040185640792"
      data-collection-id="c_bcb73a10_8bb7_4c0e_9af9_954b86dabd81"
      data-api-url="https://embedai-backend-588efaf85c73.herokuapp.com"
      strategy="lazyOnload"
    />
  );
} 