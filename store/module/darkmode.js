const darkmode = {
	state: () => ({
		darkMode: false,
	}),
	
	mutations: {
		setDarkState(state, value) {
			state.darkMode = value
		}
	},

	actions: {
		getStoredState({commit}) {
			if (process.client) {
				commit('setDarkState', localStorage.getItem('darkmodestate') === 'true' ? true : false)
			}
		},
		changeStoredState({commit}, value) {
			if (process.client) {
				localStorage.setItem('darkmodestate', value)
			}
			commit('setDarkState', value)
		},
	},

	getters: {
		
	}
}

export default darkmode