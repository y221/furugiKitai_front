<template>
    <v-list three-line class="pt-0">
      <template v-for="(item, index) in items">
        <v-divider></v-divider>
        <v-list-item
          :key="item.title"
        >
          <v-list-item-content>
          　<v-list-item-title
              v-text="item.title"
              class="font-weight-bold"
            >
            </v-list-item-title>
            <p v-text="item.text" class="mt-2 sub-text-color body-2" style="white-space: pre-line;"></p>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        title: '住所',
        text: '神奈川県鎌倉市極楽寺３丁目６−１４',
      },
      {
        title: 'アクセス',
        text: '極楽寺駅より徒歩1分',
      },
      {
        title: 'TEL',
        text: '123-4567-8910',
      },
      {
        title: 'Instagram',
        text: 'https://www.instagram.com/circus_vintage/?hl=ja',
      },
      {
        title: '定休日',
        text: '毎週水曜日',
      },
      {
        title: '営業時間',
        text: "月 : 11:00〜18:00\n火 : 11:00〜18:00\n水 : 定休日\n木 : 11:00〜18:00\n金 : 11:00〜18:00\n土 : 11:00〜18:00\n日 : 11:00〜18:00",
      },
    ],
  }),
}
</script>