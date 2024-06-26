import { createStore } from 'vuex'

export default createStore({
  /* state -> variable
    data -> propertyName; null -> value */ 
  state: {
    // data: null
    education: null,
    aboutMe: null,
    workExp: null,
    projects: null,
    testimonials: null,
    skills: null
  },
  mutations: {
    /* use this to shange /update the state
    commiting a mutation */ 
    setAboutMe(state,hehe) {
      state.aboutMe = hehe
    },
    setEducation(state,hehe) {
      state.education = hehe
    },
    setWorkExp(state,hehe) {
      state.workExp = hehe
    },
    setProjects(state,hehe) {
      state.projects = hehe
    },
    setTestimonials(state,hehe) {
      state.testimonials = hehe
    },
    setSkills(state,hehe) {
      state.skills = hehe
    },
  },
  actions: {
    /* run all async code
    dispatching */
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://yonelamangele.github.io/json/data/data.json');
      let data = await fetchedInfo.json();
      
      // dependant on json file
      let {aboutMe, projects, education, skills, workExp, testimonials} = data
      
      console.log(data)
      commit('setAboutMe',aboutMe)
      commit('setEducation',education)
      commit('setWorkExp',workExp)
      commit('setProjects',projects)
      commit('setTestimonials',testimonials)
      commit('setSkills',skills)
    }
  },
  modules: {
  },
  getters: {
    // filterData() {
    //   return Array.filter()
    // }
  }
})
