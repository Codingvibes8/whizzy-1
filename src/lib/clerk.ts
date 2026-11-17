/**
 * Clerk is optional.
 *
 * The public marketing site must render even when a deployment has no Clerk
 * keys configured, so auth is only switched on when a usable publishable key
 * and secret key are present. Placeholder values from .env.example count as
 * "not configured" so a copied env file cannot break a deploy.
 */
const rawPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const rawSecretKey = process.env.CLERK_SECRET_KEY;

function isUsableKey(key: string | undefined): key is string {
  if (!key) return false;

  const trimmed = key.trim();

  return trimmed.length > 0 && !trimmed.includes("placeholder");
}

export const clerkPublishableKey = isUsableKey(rawPublishableKey)
  ? rawPublishableKey
  : undefined;

export const clerkSecretKey = isUsableKey(rawSecretKey)
  ? rawSecretKey
  : undefined;

/** True when both halves of the Clerk config are available. */
export const clerkEnabled = Boolean(clerkPublishableKey && clerkSecretKey);
