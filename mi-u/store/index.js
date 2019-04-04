import Vue from 'vue'
import Vuex from 'vuex'
import testStore from './testStore'

Vue.use(Vuex)
/**
 *@desc 导入分割过的store
 */
export default new Vuex.Store({
// 定义属性  使用xx.state.message使用
//可使用计算属性,而非angluar需要监听数据才能操作  
    state: {
        message: 'old!!!'
    },
	
    mutations: {
        updateState(state, message) {
            state.message = message
        }
    },

    actions: {
        updateState({ commit }) {
            commit('updateState', 'new')
        }
    },

	getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },

    modules: {
        testStore
    }

})
// 定义方法  虽可xx.state.message=xx等赋值,但无法追踪变化过程,故,官方规定更改 Vuex 的 store 中的状态的唯一方法是提交 mutation  
	 // 通过mutations来修改属性值
	 /**
	  * mutation必须为同步函数 若有异步则使状态追踪变为不可追踪
	  * this.$store.commit('xxx')
	  */
	 
	/**
	 * Action 提交的是 mutation，而不是直接变更状态。
	   Action 可以包含任意异步操作。
	   Action 通过 store.dispatch
	   在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
	   store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：
	 */	/**
	 * mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
	 * getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的
	 * getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
	 * 可以认为是 store 的计算属性。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
	 * 简单理解为,如,一个列表只取特定几个值,则先处理,后续调用直接返回此列表在getter中处理好的数据
	 */  /**
   * strict:true开启严格模式
   * 严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪
   * 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
   * 
   */
  // strict: true
    // store状态管理可拆分