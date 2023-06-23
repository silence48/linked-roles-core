import test from 'ava';
import { createSQLiteDB } from '@miniflare/shared';
import { D1Database, D1DatabaseAPI } from '@miniflare/d1';
import { AccountBuilder } from '../../lib';
import { database } from '../_database';

test.beforeEach(async (t) => {
  const sqliteDb = await createSQLiteDB(':memory:');
  const db = new D1Database(new D1DatabaseAPI(sqliteDb));
  await db.batch(database.map((item: string) => db.prepare(item)));
  t.context = { db };
});

test('Find an account by discord_id', async (t) => {
  const { db: DB }: any = t.context;
  const { data } = await AccountBuilder.find({ discord_user_id: 'a5c72090-2dfef25b284a-c2b6-43d6-9eba', DB });
  t.deepEqual(data.user.discord_user_id, 'a5c72090-2dfef25b284a-c2b6-43d6-9eba');
});

test('Create a new user', async (t) => {
  const { db: DB }: any = t.context;
  const user = {
    discord_user_id: '6b38b7f3-0d42-48f4-9529-b72a15c85abb',
    discord_access_token: 'discord_access_token',
    discord_refresh_token: 'discord_refresh_token',
    discord_expires_at: (Date.now() * 1000).toString()
  };
  const { data } = await AccountBuilder.create({ user, DB });
  t.deepEqual(data.user.discord_user_id, '6b38b7f3-0d42-48f4-9529-b72a15c85abb');
});

test('Add multiple stellar accounts to user', async (t) => {
  const { db: DB }: any = t.context;
  const user = {
    discord_user_id: '6b38b7f3-0d42-48f4-9529-b72a15c85abb',
    discord_access_token: 'discord_access_token',
    discord_refresh_token: 'discord_refresh_token',
    discord_expires_at: (Date.now() * 1000).toString()
  };
  const account = await AccountBuilder.create({ user, DB });
  await account.addStellarAccount({ public_key: 'GBUIWSE7CLGBSMGBBXRJPOGYV3RSYPXSO2MPJGQZSR7QRN2YJWC4HP3S' });
  await account.addStellarAccount({ public_key: 'GCAB2OXZQLVA7WFLVPO72QSJGHBR6VU5P7SKESI7L7VPMU46GT5UNU5C' });

  t.assert(
    account.data.accounts[0].public_key === 'GBUIWSE7CLGBSMGBBXRJPOGYV3RSYPXSO2MPJGQZSR7QRN2YJWC4HP3S' &&
      account.data.accounts[1].public_key === 'GCAB2OXZQLVA7WFLVPO72QSJGHBR6VU5P7SKESI7L7VPMU46GT5UNU5C'
  );
});

test('Add and remove stellar accounts', async (t) => {
  const { db: DB }: any = t.context;
  const user = {
    discord_user_id: '6b38b7f3-0d42-48f4-9529-b72a15c85abb',
    discord_access_token: 'discord_access_token',
    discord_refresh_token: 'discord_refresh_token',
    discord_expires_at: (Date.now() * 1000).toString()
  };
  const account = await AccountBuilder.create({ user, DB });
  await account.addStellarAccount({ public_key: 'GBUIWSE7CLGBSMGBBXRJPOGYV3RSYPXSO2MPJGQZSR7QRN2YJWC4HP3S' });
  await account.addStellarAccount({ public_key: 'GCAB2OXZQLVA7WFLVPO72QSJGHBR6VU5P7SKESI7L7VPMU46GT5UNU5C' });
  await account.removeStellarAccount({ public_key: 'GBUIWSE7CLGBSMGBBXRJPOGYV3RSYPXSO2MPJGQZSR7QRN2YJWC4HP3S' });

  t.assert(
    account.data.accounts[0].public_key === 'GCAB2OXZQLVA7WFLVPO72QSJGHBR6VU5P7SKESI7L7VPMU46GT5UNU5C'
  );
});