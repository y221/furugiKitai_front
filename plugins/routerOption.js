export default async ({ app, store }) => {
    app.router.afterEach((to, from) => {
      // indexページの場合
      if (to.path === '/') {
        store.$accessor.modules.shops.initConditions();
      }
      // ページ遷移ごとに行いたい処理
    });
  };