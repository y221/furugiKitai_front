export default async function ({ store, params, redirect }) {

  const isMyPage = (params.userId == 'me');
  const isSnsAuthed = (store.state.auth.loggedIn);
  const isLoggedIn = store.state.modules.users.user; // なぜか読めない...

  if (!isMyPage) {
    return;
  }

  if (!isSnsAuthed) {
    redirect('/login');
    return;
  }

  // ログイン処理
  const formData = {
    uid: store.state.auth.user.userId,
    icon: store.state.auth.user.pictureUrl,
    name: store.state.auth.user.displayName,
  };

  await store.dispatch('modules/users/loginUser', formData);

}