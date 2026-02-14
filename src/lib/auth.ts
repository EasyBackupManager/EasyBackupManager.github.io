import crypto from 'node:crypto';

// Build-time multi-user credential handling.
// Set AUTH_USERS in .env as: username1:password1,username2:password2,...
// Each password is hashed (SHA-256) at build time so plain text never reaches the client.

const raw = import.meta.env.AUTH_USERS || '';

export interface UserCredential {
  username: string;
  passwordHash: string;
}

export const AUTH_CREDENTIALS: UserCredential[] = raw
  .split(',')
  .map((entry: string) => entry.trim())
  .filter((entry: string) => entry.includes(':'))
  .map((entry: string) => {
    const sep = entry.indexOf(':');
    const username = entry.slice(0, sep).trim();
    const password = entry.slice(sep + 1);
    return {
      username,
      passwordHash: crypto.createHash('sha256').update(password).digest('hex'),
    };
  });

export const AUTH_ENABLED = AUTH_CREDENTIALS.length > 0;

export default { AUTH_CREDENTIALS, AUTH_ENABLED };
