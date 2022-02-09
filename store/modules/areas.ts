
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

type area = {
  id: number,
  prefectureId: number,
  name: string
}
type prefecture = {
  id: number,
  prefecture: string
}
type areasGroupByPrefecture = {
  prefecture: string,
  areas: area[]
}[]

export const state = () => ({
  areasGroupByPrefecture: [] as areasGroupByPrefecture,
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  areasGroupByPrefecture: state => state.areasGroupByPrefecture,
})

export const mutations = mutationTree(state, {
  setAreasGroupByPrefecture(state, values): void {
    state.areasGroupByPrefecture = values
  }
})

export const actions = actionTree({ state, mutations }, {
  async fetchAreasGroupByPrefecture({ commit }) {
    
    // エリアが登録されている都道府県IDの抽出
    const areasResponse = await this.$axios.get('/api/api/areas');
    let prefectureIds: number[] = [];
    for (const area of areasResponse.data) {
        if (prefectureIds.includes(area.prefectureId)) {
            continue;
        }
        prefectureIds.push(area.prefectureId);
    }

    const prefecturesPromise = this.$axios.get('/api/api/prefectures', {params: {ids: prefectureIds}})
    const [ prefecturesResponse ] = await Promise.all([prefecturesPromise])
    // areaをprefectureごとにグループ分けして格納
    const areasGroupByPrefecture = [] as areasGroupByPrefecture;
    for (const prefecture of prefecturesResponse.data as prefecture[]) {
      const groupedAreas: area[] = areasResponse.data.filter((target: area) => prefecture.id === target.prefectureId)
      areasGroupByPrefecture.push({prefecture: prefecture.prefecture, areas: groupedAreas})
    }
    commit('setAreasGroupByPrefecture', areasGroupByPrefecture)
  }
})