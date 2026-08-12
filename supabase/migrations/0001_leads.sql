create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table leads enable row level security;

-- No public policies: only the service role (used server-side) can read/write.
