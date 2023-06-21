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

test('Create discord user', async (t) => {
  const { db: DB }: any = t.context;
  console.log('AccountBuilder', AccountBuilder);
  const user = {
    discord_user_id: '6b38b7f3-0d42-48f4-9529-b72a15c85abb',
    discord_access_token: 'discord_access_token',
    discord_refresh_token: 'discord_refresh_token',
    discord_expires_at: (Date.now() * 1000).toString()
  };
  const account = new AccountBuilder({ DB });
  const { user: discordUser } = (await account.setup(user)) ?? {};
  t.deepEqual(discordUser.discord_user_id, '6b38b7f3-0d42-48f4-9529-b72a15c85abb');
});

test('Add Multiple Stellar Account discord user', async (t) => {
  const { db: DB }: any = t.context;
  const user = {
    discord_user_id: '6b38b7f3-0d42-48f4-9529-b72a15c85abb',
    discord_access_token: 'discord_access_token',
    discord_refresh_token: 'discord_refresh_token',
    discord_expires_at: (Date.now() * 1000).toString()
  };
  const account = new AccountBuilder({ DB });
  await account.setup(user);
  await account.addWallet({ public_key: 'GBUIWSE7CLGBSMGBBXRJPOGYV3RSYPXSO2MPJGQZSR7QRN2YJWC4HP3S' });
  const { accounts } =
    (await account.addWallet({ public_key: 'GCAB2OXZQLVA7WFLVPO72QSJGHBR6VU5P7SKESI7L7VPMU46GT5UNU5C' })) ?? {};
  t.assert(
    accounts[0].public_key === 'GBUIWSE7CLGBSMGBBXRJPOGYV3RSYPXSO2MPJGQZSR7QRN2YJWC4HP3S' &&
      accounts[1].public_key === 'GCAB2OXZQLVA7WFLVPO72QSJGHBR6VU5P7SKESI7L7VPMU46GT5UNU5C'
  );
});
