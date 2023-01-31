import React, { FormEvent } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

type Props = {
  switchSignupLogin: () => void
}

export const SignUpForm = ({ switchSignupLogin }: Props) => {
  const supabaseClient = useSupabaseClient()
  return (
    <div>
      <button type="button" onClick={switchSignupLogin}>
        ログインはこちら
      </button>
      <h1>ユーザー登録</h1>
      <form
        method="post"
        onSubmit={async (event: React.SyntheticEvent) => {
          event.preventDefault()
          const target = event.target as typeof event.target & {
            name: { value: string }
            email: { value: string }
            password: { value: string }
          }
          const result = await supabaseClient.auth.signUp({
            email: target.email.value,
            password: target.password.value,
            options: {
              data: {
                name: target.name.value,
              },
            },
          })
          if (!result.error) {
            switchSignupLogin()
            alert('メール送ったで')
          } else {
            alert(result.error.message)
          }
        }}
      >
        <div>
          <label htmlFor="name">
            ユーザー名:
            <input id="name" name="name" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            メールアドレス:
            <input id="email" name="email" autoComplete="username" type="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            パスワード:
            <input id="password" type="password" name="password" autoComplete="current-password" />
          </label>
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}
