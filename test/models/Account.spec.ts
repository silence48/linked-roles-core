import test from 'ava';
import { createSQLiteDB } from '@miniflare/shared';
import { D1Database, D1DatabaseAPI } from '@miniflare/d1';
import { Account } from '../../lib';
import { database } from '../_database';

test.beforeEach(async (t) => {
  const sqliteDb = await createSQLiteDB(':memory:');
  const db = new D1Database(new D1DatabaseAPI(sqliteDb));
  await db.batch(database.map((item: string) => db.prepare(item)));
  t.context = { db };
});

test('Find by id', async (t) => {
  const { db: binding }: any = t.context;
  const account = await Account.findById(
    'c2b6-43d6-9eba-a5c72090-2dfef25b284a',
    binding
  );
  t.deepEqual(account.id, 'c2b6-43d6-9eba-a5c72090-2dfef25b284a');
});
