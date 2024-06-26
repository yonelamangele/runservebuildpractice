<template>
    <div id="parent">
        <form @submit.prevent="formSubmit">
            <h1> Sign Up Form hehe </h1>
            <label> Email: </label>
            <input type="email" required v-model="email">
            <label> Password </label>
            <input type="password" required v-model="password">

            <label> Role: </label>
            <select v-model="role">
                <option value="developer"> Web Developer </option>
                <option value="designer"> Web DEsigner </option>
                <option value=""> Select a role </option>
            </select>

            <label> Languages: </label>
            <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage">
            <button type="submit"> submit </button>
            <div v-for="lang, index in languages" :key="index+1">
                <p id="para" @click='deleteLang(lang)'>
                    {{ index+1 }}:{{ lang }}
                </p>
            </div>
            <div class="terms">

                <input type="checkbox" required v-model="terms">
                <label> Accept Terms and Conditions </label>
            </div>
            <h4> People wanted in your team: </h4>
            <div>
                <input type="checkbox" value="Shaun" v-model="names">
                <label> Mario </label>
            </div>
            <div>
                <input type="checkbox" value="Dean" v-model="names">
                <label> Dean </label>
            </div>
            <div>
                <input type="checkbox" value="Luigi" v-model="names">
                <label> Luigi </label>
            </div>
        </form>

        <div>
            <p> Email: {{email}} </p>
            <p> Password: {{password}} </p>
            <p> Role: {{role}} </p>
            <p> Terms: {{terms}} </p>
            <p> People: {{people}} </p>
            <p> Current language: {{currentLanguage}} </p>
            <p>languages: {{languages}} </p>
        </div>
        
    </div>
</template>
<script>

export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms:false,
            names: [],
            currentLanguage: '',
            language: ['something','nothing']
        }
    },
    methods: {
        keyfinder(event) {
            console.log(event)
        },
        deleteLang(lang) {
            this.languages=this.languages.filter (item => item !=lang)
        },
        formSubmit(){
                console.log('The page has refreshed');  
                this.email = '',
                this.password = '',
                this.terms = false,
                this.currentLanguage = '',
                this.role = ''
            },

    computed: {
        addLangugae(){
        if (!this.languages.includes(this.currentLanguage)) {
                        this.languages.push(this.currentLanguage)
                    }
                }
            
      }
    }
}
</script>
<style lang="">
    
</style>