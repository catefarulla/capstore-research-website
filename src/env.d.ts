type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    otherLocals: {
      AIRTABLE_ACCESS_TOKEN: string;
      AIRTABLE_BASE_ID: string;
      ANTHROPIC_API_KEY: string;
      WITH_AI_FRICTION: string;
      AI_ENABLED: string;
      GOOGLE_AI_STUDIO_API_KEY: string;
    };
  }
}

interface Env {
  AIRTABLE_ACCESS_TOKEN: string;
  AIRTABLE_BASE_ID: string;
  ANTHROPIC_API_KEY: string;
  WITH_AI_FRICTION: string;
  AI_ENABLED: string;
  GOOGLE_AI_STUDIO_API_KEY: string;
}

interface ImportMetaEnv {
  AIRTABLE_ACCESS_TOKEN: string;
  AIRTABLE_BASE_ID: string;
  ANTHROPIC_API_KEY: string;
  WITH_AI_FRICTION: string;
  AI_ENABLED: string;
  GOOGLE_AI_STUDIO_API_KEY: string;
}
