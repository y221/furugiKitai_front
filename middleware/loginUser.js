// TODO:mypageの画面で呼び出す(普通のユーザ画面は/user/idにする。ログイン後はmypage)
export default async function ({ store, redirect }) {
  
  // ログインしてない場合
  if (!store.state.auth.user) {
    redirect('/login');
    return;
  }

  // フォームデータ作成
  const formData = {
    uid: store.state.auth.user.userId,
    icon: store.state.auth.user.pictureUrl,
    name: store.state.auth.user.displayName,
  };

  store.dispatch('modules/users/loginUser', formData);
}