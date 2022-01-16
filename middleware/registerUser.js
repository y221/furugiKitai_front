export default async function ({ store, redirect }) {
  const formData = {
    uid: store.state.auth.user.userId,
    icon: store.state.auth.user.pictureUrl,
    name: store.state.auth.user.displayName
  };

  const getUser = store.dispatch('modules/users/registerUser', formData);
  await Promise.all([getUser]);
}