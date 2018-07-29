<template>
<div>
  <input type='text' v-model='monsterForm.name'>
  <button @click="addMonster">追加</button>
  <span>{{monsterForm.name}}</span>
  <ul>
    <li v-for="monster in monsters">
      <span>{{`${monster.name} HP.${monster.hp}`}}</span>
    </li>
  </ul>

</div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      monsterForm: {
        name: '猫'
      },
      monsters: [
        {name: 'スライム', hp: 100},
        {name: 'ゴブリン', hp: 200}
      ]
    }
  },
  methods: {
    addMonster() {
      this.monsters.push(
        {
          name: this.monsterForm.name,
          hp: Math.floor(Math.random() * 100)
        }
      )

      this.monsterForm.name = ''
      // ↓でも良い
      // Vue.set(this.monsterForm, 'name', '')
    }
  },
  created() {
    this.text = 'created'
  }
};
</script>
