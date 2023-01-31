import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const delete1 = await prisma.todo.deleteMany({})
  const todo1 = await prisma.user.upsert({
    where: { id: process.env.MAIN_USER_ID as string },
    update: {
      todo: {
        create: {
          title: 'abc',
          content: 'ふふふ',
          is_done: false,
        },
      },
    },
    create: {
      id: process.env.MAIN_USER_ID as string,
      name: '俺だ',
      todo: {
        create: {
          title: 'abc',
          content: 'ふふふ',
          is_done: false,
        },
      },
    },
  })
  const todo2 = await prisma.user.upsert({
    where: { id: 'def' },
    update: {
      id: 'def',
      name: 'def',
      todo: {
        create: {
          title: 'hogehoge',
          content: 'nohooooooooho',
          is_done: false,
        },
      },
    },
    create: {
      id: 'def',
      name: 'def',
      todo: {
        create: {
          title: 'hogehoge',
          content: 'nohooooooooho',
          is_done: false,
        },
      },
    },
  })
  console.log({ todo1, todo2 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

/*エラーコード 42501が出たときのリカバリ用SQL
https://supabase.com/docs/guides/integrations/prisma#troubleshooting

grant usage on schema public to postgres, anon, authenticated, service_role;

grant all privileges on all tables in schema public to postgres, anon, authenticated, service_role;
grant all privileges on all functions in schema public to postgres, anon, authenticated, service_role;
grant all privileges on all sequences in schema public to postgres, anon, authenticated, service_role;

alter default privileges in schema public grant all on tables to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on functions to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on sequences to postgres, anon, authenticated, service_role;
  */

/*auth.user トリガー
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.users (id, name)
  values (new.id, new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
*/
