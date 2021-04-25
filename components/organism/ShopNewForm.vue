<template>
  <div class="main-wrapper">
    <div class="main-content">
      <div class="text-h5 font-weight-bold">基本情報</div>
      <div class="mt-5">
        <FormTextfield columnName="名称" label="例：フルギキタイ" :required="true" />
        <FormTextfield columnName="住所" label="例：東京都○○区△△" :required="false" />
        <FormTextfield columnName="アクセス" label="例：○○駅より徒歩3分" :required="false" />
        <FormTextfield columnName="TEL" label="例：090-1234-5678" :required="false" />
        <FormTextfield columnName="Instagram" label="例：https://www.instagram.com/xxxxx/" :required="false" />
        <FormTextarea columnName="定休日" label="例：水曜日" :required="false" />
        <FormTextarea columnName="営業時間" label="例：14時〜21時" :required="false" />
      </div>
      <div class="text-h5 font-weight-bold mt-15">画像情報</div>
      <v-row>
        <FormImage imagePath="" imageName="メイン" />
        <FormImage imagePath="" imageName="1." />
        <FormImage imagePath="" imageName="2." />
        <FormImage imagePath="" imageName="3." />
        <FormImage imagePath="" imageName="4." />
        <FormImage imagePath="" imageName="5." />
      </v-row>
      <v-col align="center">
        <v-btn
          class="mx-auto my-6 font-weight-bold"
          color="primary"
          depressed
          rounded
          width="200px"
        >
          登録
        </v-btn>
      </v-col>
    </div>
  </div>
</template>
<style>
.flex {
  display: flex;
}
</style>