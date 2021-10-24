export default async function ({ store, redirect }) {
  const formData = {
    uid: store.state.auth.user.sub,
    icon: store.state.auth.user.picture,
    name: store.state.auth.user.family_name +" "+ store.state.auth.user.given_name
  };

  const getUser = store.dispatch('modules/users/registerUser', formData);
  await Promise.all([getUser]);
}