type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    otherLocals: {
      AIRTABLE_ACCESS_TOKEN: string;
    };
  }
}
interface ImportMetaEnv {
  AIRTABLE_ACCESS_TOKEN: string;
  AIRTABLE_BASE_ID: string;
}
