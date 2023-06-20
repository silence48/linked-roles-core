const schema = [
  `
  CREATE TABLE accounts (
    id text PRIMARY KEY,
    deleted_at datetime,
    created_at datetime,
    updated_at datetime
  );`,
]

const seeds = [
  `
  INSERT INTO accounts (id) VALUES ('c2b6-43d6-9eba-a5c72090-2dfef25b284a');`,
]

export const database = [
  ...schema,
  ...seeds
]