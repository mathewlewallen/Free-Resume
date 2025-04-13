import { keys as email } from '@cc/email/keys';
import { keys as flags } from '@cc/feature-flags/keys';
import { keys as core } from '@cc/next-config/keys';
import { keys as observability } from '@cc/observability/keys';
import { keys as rateLimit } from '@cc/rate-limit/keys';
import { keys as security } from '@cc/security/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    core(),
    email(),
    observability(),
    flags(),
    security(),
    rateLimit(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
