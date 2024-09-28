import type { AppType } from "test-deno-hono";
import { hc } from "hono/client";

const client = hc<AppType>(
  "https://59zp2focu5.execute-api.ap-northeast-1.amazonaws.com/",
);

export const getHello = async () => {
  const res = await client.hello.$get({ query: { name: "hanako" } });

  if (res.ok) {
    const json = await res.json();
    return json.message;
  }

  return null;
};
