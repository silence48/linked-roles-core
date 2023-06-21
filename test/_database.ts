const schema = [
  `
  CREATE TABLE users (
    id text PRIMARY KEY,
    discord_user_id text,
    discord_access_token text,
    discord_refresh_token text,
    discord_expires_at text,
    deleted_at datetime,
    created_at datetime,
    updated_at datetime
  );`,
  `
  CREATE TABLE stellar_accounts (
    id text PRIMARY KEY,
    discord_user_id text,
    public_key text,
    access_token text,
    refresh_token text,
    deleted_at datetime,
    created_at datetime,
    updated_at datetime
  );`,
  `
  CREATE TABLE metadata (
    key text PRIMARY KEY,
    name text,
    description text,
    type number
  );`,
  `
  CREATE TABLE balances (  
    id text PRIMARY KEY,
    tx_id text,
    issuer_id text,
    asset_id text,
    account_id text,
    balance text,
    date_acquired text,
    verified_ownership text,
    deleted_at datetime,
    created_at datetime,
    updated_at datetime
  );`,
  `
  CREATE TABLE cursor(
    id text PRIMARY KEY,
    url text,
    cursor text,
    query text,
    deleted_at datetime,
    created_at datetime,
    updated_at datetime
  );`,
  `
  CREATE TABLE asset(
    id text PRIMARY KEY,
    issuer_id text,
    code text,
    query text,
    deleted_at datetime,
    created_at datetime,
    updated_at datetime
  );`,
  `
  CREATE TABLE claimable(
    id text PRIMARY KEY,
    claimable_id text,
    date_granted text,
    date_claimed text,
    deleted_at datetime,
    created_at datetime,
    updated_at datetime
  );`
];

const seeds = [
  `
  INSERT INTO users (id, discord_user_id, discord_access_token, discord_refresh_token, discord_expires_at) VALUES ('c2b6-43d6-9eba-a5c72090-2dfef25b284a', 'c2b6-43d6-9eba-a5c72090-2dfef25b284a', 'c2b6-43d6-9eba-a5c72090-2dfef25b284a', 'c2b6-43d6-9eba-a5c72090-2dfef25b284a', '0000000000' );`
];

export const database = [...schema, ...seeds];
