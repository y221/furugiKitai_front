<template>
  <div>
    <ul class="mb-5">
        <li
          v-for="item in items"
          :key="item.title"
          class="profile-list"
        >
          <span
            v-text="item.title"
            class="profile-title"></span>
          <span
            v-text="item.text"
            class="profile-text"></span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: '好きな古着',
          text: 'levisとかトレーナーとかアメリカの学生みたいな格好が好き'
        },
        {
          title: 'プロフィール',
          text: '古着屋には詳しくないけど古着屋に行くのは好き'
        },
        {
          title: 'Instagram',
          text: 'http://instagram/xxxxxxxxx'
        },
        {
          title: 'リンク',
          text: 'http://xxxxxxxxxxxxxxxxxxx'
        },
      ],
    }
  }
}
</script>

<style>
.profile-list{
  display: flex;
  font-size: 14px;
  margin-bottom: 10px;
}
.profile-title{
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #888;
  width: 120px;
}
.profile-text{
  width: calc(100% - 120px);
}
</style>